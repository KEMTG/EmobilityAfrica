// ==========================================
// DATA MANAGEMENT
// ==========================================

class CompanyManager {
    constructor() {
        this.companies = this.loadCompanies();
    }

    loadCompanies() {
        const stored = localStorage.getItem('emobility_companies');
        return stored ? JSON.parse(stored) : this.getDefaultCompanies();
    }

    saveCompanies() {
        localStorage.setItem('emobility_companies', JSON.stringify(this.companies));
    }

    addCompany(companyData) {
        const company = {
            id: Date.now(),
            ...companyData,
            dateAdded: new Date().toISOString()
        };
        this.companies.push(company);
        this.saveCompanies();
        return company;
    }

    getCompanies() {
        return this.companies;
    }

    filterCompanies(filters) {
        let filtered = this.companies;

        if (filters.category && filters.category !== 'all') {
            filtered = filtered.filter(company =>
                company.categories.includes(filters.category)
            );
        }

        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            filtered = filtered.filter(company =>
                company.companyName.toLowerCase().includes(searchLower) ||
                company.countries.some(c => c.toLowerCase().includes(searchLower)) ||
                company.hqCity.toLowerCase().includes(searchLower)
            );
        }

        return filtered;
    }

    getStatistics() {
        const companies = this.companies;
        const stats = {
            totalCompanies: companies.length,
            totalCountries: new Set(companies.flatMap(c => c.countries)).size,
            totalCategories: 7,
            categories: {
                cars: companies.filter(c => c.categories.includes('cars')).length,
                motorcycles: companies.filter(c => c.categories.includes('motorcycles')).length,
                buses: companies.filter(c => c.categories.includes('buses')).length,
                trucks: companies.filter(c => c.categories.includes('trucks')).length,
                software: companies.filter(c => c.categories.includes('software')).length,
                financing: companies.filter(c => c.categories.includes('financing')).length,
                infrastructure: companies.filter(c => c.categories.includes('infrastructure')).length
            },
            chargingMethods: this.getChargingMethodStats(companies),
            financing: companies.filter(c => c.categories.includes('financing')).length
        };

        return stats;
    }

    getChargingMethodStats(companies) {
        const methods = {};
        companies.forEach(company => {
            if (company.chargingMethods) {
                company.chargingMethods.forEach(method => {
                    methods[method] = (methods[method] || 0) + 1;
                });
            }
        });
        return methods;
    }

    getDefaultCompanies() {
        return [
            {
                id: 1,
                companyName: "Opibus",
                hqCity: "Nairobi",
                countries: ["Kenya"],
                website: "https://opibus.com",
                email: "info@opibus.com",
                categories: ["buses", "infrastructure"],
                chargingMethods: ["public_charging", "battery_swap"],
                description: "Opibus designs electric minibus solutions and charging infrastructure for African cities.",
                yearFounded: 2016,
                employees: "11-50",
                contactPerson: "Company Contact",
                phone: "+254"
            },
            {
                id: 2,
                companyName: "Strides",
                hqCity: "Lagos",
                countries: ["Nigeria"],
                website: "https://strides.ng",
                email: "contact@strides.ng",
                categories: ["motorcycles", "financing"],
                chargingMethods: ["home_charging", "public_charging"],
                description: "Strides provides electric motorcycles with financing solutions for African transportation.",
                yearFounded: 2018,
                employees: "51-100",
                contactPerson: "Company Contact",
                phone: "+234"
            },
            {
                id: 3,
                companyName: "Saf Cabs",
                hqCity: "Nairobi",
                countries: ["Kenya"],
                website: "https://safcabs.com",
                email: "hello@safcabs.com",
                categories: ["cars", "infrastructure"],
                chargingMethods: ["home_charging", "fast_charging"],
                description: "Saf Cabs operates electric taxis and charging networks across East Africa.",
                yearFounded: 2019,
                employees: "101-500",
                contactPerson: "Company Contact",
                phone: "+254"
            }
        ];
    }
}

// ==========================================
// UI MANAGER
// ==========================================

class UIManager {
    constructor() {
        this.manager = new CompanyManager();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderStatistics();
        this.renderDirectory();
    }

    setupEventListeners() {
        // Form submission
        const form = document.getElementById('companyForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterClick(e));
        });

        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e));
        }

        // Smooth scroll for nav links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        // Collect form data
        const companyData = {
            companyName: formData.get('companyName'),
            hqCity: formData.get('hqCity'),
            countries: formData.get('countries').split(',').map(c => c.trim()),
            website: formData.get('website') || '',
            email: formData.get('email'),
            categories: Array.from(formData.getAll('categories')),
            chargingMethods: Array.from(formData.getAll('chargingMethods')),
            description: formData.get('description') || '',
            yearFounded: formData.get('yearFounded') || '',
            employees: formData.get('employees') || '',
            contactPerson: formData.get('contactPerson') || '',
            phone: formData.get('phone') || ''
        };

        // Validate required fields
        if (!companyData.categories.length) {
            this.showFormMessage('Please select at least one business category', 'error');
            return;
        }

        // Add company
        this.manager.addCompany(companyData);

        // Show success message
        this.showFormMessage('Company listed successfully! 🎉', 'success');

        // Reset form
        form.reset();

        // Update UI
        this.renderStatistics();
        this.renderDirectory();

        // Scroll to directory
        setTimeout(() => {
            document.getElementById('directory').scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    }

    handleFilterClick(e) {
        const button = e.target;
        const filter = button.getAttribute('data-filter');

        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        // Update filter
        this.currentFilter = filter;

        // Re-render
        this.renderDirectory();
    }

    handleSearch(e) {
        const searchTerm = e.target.value;
        this.renderDirectory(searchTerm);
    }

    renderStatistics() {
        const stats = this.manager.getStatistics();

        // Update main stats
        document.getElementById('total-companies').textContent = stats.totalCompanies;
        document.getElementById('total-countries').textContent = stats.totalCountries;
        document.getElementById('total-charging').textContent = 
            Object.values(stats.chargingMethods).length || 0;

        // Update category breakdown
        document.getElementById('count-cars').textContent = stats.categories.cars;
        document.getElementById('count-motorcycles').textContent = stats.categories.motorcycles;
        document.getElementById('count-buses').textContent = stats.categories.buses;
        document.getElementById('count-trucks').textContent = stats.categories.trucks;
        document.getElementById('count-software').textContent = stats.categories.software;
        document.getElementById('count-financing').textContent = stats.categories.financing;
        document.getElementById('count-infrastructure').textContent = stats.categories.infrastructure;

        // Animate numbers
        this.animateNumbers();
    }

    animateNumbers() {
        const numberElements = document.querySelectorAll('.stat-number, .breakdown-count');
        numberElements.forEach(element => {
            const finalValue = parseInt(element.textContent);
            if (finalValue === 0) return;

            let currentValue = 0;
            const increment = Math.ceil(finalValue / 30);
            const interval = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    element.textContent = finalValue;
                    clearInterval(interval);
                } else {
                    element.textContent = currentValue;
                }
            }, 30);
        });
    }

    renderDirectory(searchTerm = '') {
        const grid = document.getElementById('companiesGrid');
        const emptyState = document.getElementById('emptyState');

        let companies = this.manager.filterCompanies({
            category: this.currentFilter,
            search: searchTerm
        });

        if (companies.length === 0) {
            grid.innerHTML = '';
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';
        grid.innerHTML = companies.map(company => this.createCompanyCard(company)).join('');
    }

    createCompanyCard(company) {
        const categoriesHtml = company.categories
            .map(cat => {
                const icons = {
                    cars: '🚗',
                    motorcycles: '🏍️',
                    buses: '🚌',
                    trucks: '🚚',
                    software: '💻',
                    financing: '💰',
                    infrastructure: '🔌'
                };
                return `<span class="category-tag">${icons[cat]} ${this.formatText(cat)}</span>`;
            })
            .join('');

        const chargingHtml = company.chargingMethods && company.chargingMethods.length > 0
            ? `
                <div class="company-charging">
                    <div class="charging-label">⚡ Charging Methods</div>
                    <div class="charging-methods">
                        ${company.chargingMethods
                            .map(method => `<span class="charging-badge">${this.formatText(method)}</span>`)
                            .join('')}
                    </div>
                </div>
            `
            : '';

        const countriesText = company.countries.join(', ');
        const websiteHtml = company.website
            ? `<a href="${company.website}" target="_blank" class="company-website">Visit Website ↗</a>`
            : '';

        return `
            <div class="company-card">
                <div class="company-header">
                    <h3 class="company-name">${company.companyName}</h3>
                    <div class="company-location">
                        <span>📍</span>
                        <span><strong>${company.hqCity}</strong> • ${countriesText}</span>
                    </div>
                </div>

                <div class="company-categories">
                    ${categoriesHtml}
                </div>

                ${company.description ? `<p class="company-description">${company.description}</p>` : ''}
                ${chargingHtml}

                <div class="company-footer">
                    ${websiteHtml}
                    <span style="color: var(--text-tertiary); font-size: 0.75rem;">Founded ${company.yearFounded || 'N/A'}</span>
                </div>
            </div>
        `;
    }

    showFormMessage(message, type) {
        const messageEl = document.getElementById('formMessage');
        messageEl.textContent = message;
        messageEl.className = `form-message ${type}`;

        setTimeout(() => {
            messageEl.className = 'form-message';
        }, 4000);
    }

    formatText(text) {
        return text
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    new UIManager();
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Add smooth scroll behavior polyfill for older browsers
if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = function(smooth) {
        this.scrollIntoViewIfNeeded();
    };
}

// Export for use in browser console
window.CompanyManager = CompanyManager;
window.UIManager = UIManager;
