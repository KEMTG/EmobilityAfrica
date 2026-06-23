const countries = [
  "All Countries",
  "Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cabo Verde","Cameroon","Central African Republic",
  "Chad","Comoros","Congo","Côte d’Ivoire","Djibouti","Democratic Republic of the Congo","Egypt","Equatorial Guinea",
  "Eritrea","Eswatini","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia",
  "Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Morocco","Mozambique","Namibia","Niger","Nigeria",
  "Rwanda","São Tomé and Príncipe","Senegal","Seychelles","Sierra Leone","Somalia","South Africa","South Sudan",
  "Sudan","Tanzania","Togo","Tunisia","Uganda","Zambia","Zimbabwe"
];

const categories = [
  "All Categories",
  "Financing Companies",
  "Motorcycle Companies",
  "Bus Companies",
  "Car Companies",
  "Electric 3 Wheelers",
  "Electric Trucks"
];

const companies = [
  {
    name: "Ampersand Energy",
    countries: ["Kenya", "Rwanda"],
    categories: ["Motorcycle Companies"],
    energyModel: "Battery Swapping",
    description: "Electric motorcycle ecosystem with battery swapping infrastructure.",
    website: "#"
  },
  {
    name: "Roam",
    countries: ["Kenya", "Uganda", "Tanzania"],
    categories: ["Motorcycle Companies", "Bus Companies", "Car Companies"],
    energyModel: "Charging + Battery Systems",
    description: "Builds electric motorcycles and buses with local manufacturing focus.",
    website: "#"
  },
  {
    name: "Spiro",
    countries: ["Kenya", "Uganda", "Rwanda", "Togo", "Benin", "Nigeria"],
    categories: ["Motorcycle Companies", "Electric 3 Wheelers", "Financing Companies"],
    energyModel: "Battery Swapping + Financing",
    description: "Expanding electric two- and three-wheeler mobility with financing support.",
    website: "#"
  },
  {
    name: "BasiGo",
    countries: ["Kenya", "Rwanda"],
    categories: ["Bus Companies", "Financing Companies"],
    energyModel: "Charging + Leasing / Pay-As-You-Drive",
    description: "Electric bus solutions designed for public transport operators.",
    website: "#"
  }
];

const els = {
  statsGrid: document.getElementById("statsGrid"),
  visibleCount: document.getElementById("visibleCount"),
  companyGrid: document.getElementById("companyGrid"),
  emptyState: document.getElementById("emptyState"),
  resultsLabel: document.getElementById("resultsLabel"),
  categoryFilter: document.getElementById("categoryFilter"),
  countryFilter: document.getElementById("countryFilter"),
  searchInput: document.getElementById("searchInput"),
  resetBtn: document.getElementById("resetBtn"),
  year: document.getElementById("year")
};

els.year.textContent = new Date().getFullYear();

function countByCategory(cat) {
  return companies.filter(company => company.categories.includes(cat)).length;
}

function buildStats() {
  const stats = [
    { label: "Financing companies", value: countByCategory("Financing Companies") },
    { label: "Motorcycle companies", value: countByCategory("Motorcycle Companies") },
    { label: "Bus companies", value: countByCategory("Bus Companies") },
    { label: "Car companies", value: countByCategory("Car Companies") },
    { label: "Electric 3 wheelers", value: countByCategory("Electric 3 Wheelers") },
    { label: "Electric trucks", value: countByCategory("Electric Trucks") }
  ];

  els.statsGrid.innerHTML = stats.map(stat => `
    <article class="stat-card">
      <div class="stat-label">${stat.label}</div>
      <div class="stat-value">${stat.value}</div>
    </article>
  `).join("");
}

function populateFilters() {
  els.categoryFilter.innerHTML = categories.map(category =>
    `<option value="${category}">${category}</option>`
  ).join("");

  els.countryFilter.innerHTML = countries.map(country =>
    `<option value="${country}">${country}</option>`
  ).join("");
}

function matchesFilters(company) {
  const category = els.categoryFilter.value;
  const country = els.countryFilter.value;
  const search = els.searchInput.value.trim().toLowerCase();

  const categoryMatch = category === "All Categories" || company.categories.includes(category);
  const countryMatch = country === "All Countries" || company.countries.includes(country);
  const searchMatch = !search || company.name.toLowerCase().includes(search);

  return categoryMatch && countryMatch && searchMatch;
}

function renderCompanies() {
  const filtered = companies.filter(matchesFilters);

  els.visibleCount.textContent = String(filtered.length);
  els.resultsLabel.textContent = `Showing ${filtered.length} compan${filtered.length === 1 ? "y" : "ies"}`;
  els.companyGrid.innerHTML = filtered.map(company => `
    <article class="card">
      <div class="card-top">
        <div>
          <h3>${company.name}</h3>
          <div class="country-list">${company.countries.join(", ")}</div>
        </div>
      </div>

      <div class="badges">
        ${company.categories.map(category => `<span class="badge">${category}</span>`).join("")}
      </div>

      <div class="meta">
        <div><strong>Energy model:</strong> ${company.energyModel}</div>
        <div><strong>About:</strong> ${company.description}</div>
      </div>
    </article>
  `).join("");

  els.emptyState.classList.toggle("hidden", filtered.length !== 0);
}

function resetFilters() {
  els.categoryFilter.value = "All Categories";
  els.countryFilter.value = "All Countries";
  els.searchInput.value = "";
  renderCompanies();
}

["change", "input"].forEach(evt => {
  els.categoryFilter.addEventListener(evt, renderCompanies);
  els.countryFilter.addEventListener(evt, renderCompanies);
  els.searchInput.addEventListener(evt, renderCompanies);
});

els.resetBtn.addEventListener("click", resetFilters);

buildStats();
populateFilters();
resetFilters();
