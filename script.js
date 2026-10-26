const companies = [
  { id: 1, name: "Ampersand Energy", category: "Fleet Operator", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["2W", "Commercial"], products: ["Battery swapping", "Fleet operations"], desc: "Commercial electric motorcycle fleet operator focused on uptime, rider support and service reliability.", featured: true, logo: "logo-lime" },
  { id: 2, name: "SIV Mobility", category: "Vehicle Manufacturer", country: "Kenya", city: "Nairobi", status: "Technically verified", segments: ["2W", "3W", "Commercial"], products: ["Electric motorcycles", "Battery swapping"], desc: "Electric mobility brand building practical two- and three-wheeler vehicles for African transport use cases.", featured: true, logo: "logo-dark" },
  { id: 3, name: "Wahu Mobility", category: "Vehicle Manufacturer", country: "Ghana", city: "Accra", status: "Listed", segments: ["2W", "Commercial"], products: ["Electric bikes", "Battery swapping"], desc: "Urban micro-mobility company supporting electric bikes and rider networks across West Africa.", featured: true, logo: "logo-blue" },
  { id: 4, name: "Kifaru E-Mobility", category: "Vehicle Manufacturer", country: "Kenya", city: "Nairobi", status: "KEMTG contacted", segments: ["2W", "Commercial"], products: ["Electric motorcycles", "Vehicle assembly"], desc: "Local manufacturer bridging vehicle assembly, service readiness and commercial deployment support.", featured: true, logo: "logo-cyan" },
  { id: 5, name: "eWAKA", category: "Fleet Operator", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["2W", "Commercial"], products: ["Fleet operations", "Battery swapping"], desc: "Fleet and infrastructure operator building delivery-focused EV networks and last-mile mobility systems.", featured: false, logo: "logo-orange" },
  { id: 6, name: "BasiGo", category: "Vehicle Manufacturer", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["Commercial", "4W"], products: ["Electric buses", "Charging infrastructure"], desc: "Electric bus manufacturer and ecosystem partner supporting public transport electrification in East Africa.", featured: true, logo: "logo-lime" },
  { id: 7, name: "Roam", category: "Vehicle Manufacturer", country: "Kenya", city: "Nairobi", status: "Technically verified", segments: ["2W", "3W", "Commercial"], products: ["Electric motorcycles", "Public charging"], desc: "EV manufacturer focused on high-uptime battery-electric mobility for commercial riders and urban logistics.", featured: true, logo: "logo-purple" },
  { id: 8, name: "Spiro", category: "Charging & Swapping", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["2W", "3W", "Commercial"], products: ["Battery swapping", "Charging services"], desc: "Regional battery-swapping and EV infrastructure provider expanding the charging layer for mobility ecosystems.", featured: true, logo: "logo-cyan" },
  { id: 9, name: "SUN Mobility", category: "Charging & Swapping", country: "Kenya", city: "Nairobi", status: "KEMTG contacted", segments: ["2W", "3W", "Commercial"], products: ["Battery swapping", "Energy services"], desc: "Battery-as-a-service platform helping operators transition to electric mobility with flexible energy access.", featured: false, logo: "logo-blue" },
  { id: 10, name: "ChargeNet", category: "Charging & Swapping", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["Commercial", "4W"], products: ["Public charging", "Fleet charging"], desc: "Public and commercial charging operator serving private and fleet EV demand across growing markets.", featured: false, logo: "logo-orange" },
  { id: 11, name: "E-Safiri", category: "Charging & Swapping", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["2W", "Commercial"], products: ["Charging stations", "Battery swapping"], desc: "Infrastructure-focused player enabling dependable charge access for riders and operators.", featured: false, logo: "logo-lime" },
  { id: 12, name: "M-KOPA", category: "Finance & Investment", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["2W", "Commercial"], products: ["Financing", "Asset finance"], desc: "Digital financing partner enabling uptake of electric mobility through flexible repayment structures.", featured: true, logo: "logo-dark" },
  { id: 13, name: "MOGO Financing", category: "Finance & Investment", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["2W", "Commercial"], products: ["Financing", "EV lending"], desc: "Consumer and business finance platform supporting electric vehicle purchase and usage transitions.", featured: false, logo: "logo-purple" },
  { id: 14, name: "Watu Credit", category: "Finance & Investment", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["2W", "Commercial"], products: ["Financing", "Lease-to-own"], desc: "Asset financing provider supporting access to EVs and mobility-enabled businesses across Africa.", featured: false, logo: "logo-blue" },
  { id: 15, name: "Kazi", category: "Technical Services", country: "Kenya", city: "Nairobi", status: "KEMTG contacted", segments: ["2W", "Commercial"], products: ["EV servicing", "Maintenance"], desc: "Technical service provider supporting fleet maintenance, diagnostics and long-term EV uptime.", featured: false, logo: "logo-orange" },
  { id: 16, name: "Powerhive", category: "Charging & Swapping", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["Commercial"], products: ["Public charging", "Off-grid energy"], desc: "Energy and charging partner supporting distributed infrastructure for underserved transport communities.", featured: false, logo: "logo-cyan" },
  { id: 17, name: "Zimi Charge", category: "Charging & Swapping", country: "South Africa", city: "Johannesburg", status: "Listed", segments: ["4W", "Commercial"], products: ["Charging infrastructure", "Energy access"], desc: "Charging infrastructural provider helping support the electric mobility rollout across Southern Africa.", featured: false, logo: "logo-lime" },
  { id: 18, name: "Kenya Power", category: "Charging & Swapping", country: "Kenya", city: "Nairobi", status: "Technically verified", segments: ["4W", "Commercial"], products: ["Grid charging", "EV infrastructure"], desc: "Utilities partner enabling the wider power network required for increased e-mobility adoption.", featured: false, logo: "logo-dark" },
  { id: 19, name: "Schneider Electric", category: "Electric Mobility Supplier", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["Commercial", "4W"], products: ["Energy management", "Charging systems"], desc: "Global energy company supporting EV-ready infrastructure design and grid-integrated power solutions.", featured: false, logo: "logo-blue" },
  { id: 20, name: "Stride EV", category: "Vehicle Manufacturer", country: "Nigeria", city: "Lagos", status: "Listed", segments: ["2W", "Commercial"], products: ["Electric bikes", "Assembly"], desc: "Nigeria-based EV brand focused on affordable mobility and simple, durable urban transport products.", featured: false, logo: "logo-orange" },
  { id: 21, name: "S.U.L E-Mobility", category: "Technical Services", country: "Rwanda", city: "Kigali", status: "KEMTG contacted", segments: ["3W", "Commercial"], products: ["EV maintenance", "Assembly services"], desc: "Technical services provider supporting vehicle maintenance, local assembly and operational support.", featured: false, logo: "logo-cyan" },
  { id: 22, name: "Go-Electric / UTU Cars", category: "Vehicle Manufacturer", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["4W", "Commercial"], products: ["Electric cars", "Leasing"], desc: "Passenger and commercial EV distribution platform creating access to electric cars for African markets.", featured: false, logo: "logo-lime" },
  { id: 23, name: "Kabisa EV", category: "Vehicle Manufacturer", country: "Kenya", city: "Nairobi", status: "Technically verified", segments: ["4W", "Commercial"], products: ["Electric cars", "Charging"], desc: "EV vehicle and charging partner supporting the development of low-emission mobility solutions.", featured: false, logo: "logo-purple" },
  { id: 24, name: "EcoTrify", category: "Charging & Swapping", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["Commercial", "4W"], products: ["Charging solutions", "Leasing"], desc: "Commercial EV charging and ecosystem support provider helping customers integrate zero-emission transport.", featured: false, logo: "logo-blue" },
  { id: 25, name: "Power Governors Ltd", category: "Electric Mobility Supplier", country: "Kenya", city: "Nairobi", status: "KEMTG contacted", segments: ["Commercial"], products: ["EV charging", "Power systems"], desc: "Power and infrastructure company supporting charging and system deployment for growing EV fleets.", featured: false, logo: "logo-dark" },
  { id: 26, name: "Mazi Mobility", category: "Fleet Operator", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["2W", "Commercial"], products: ["Battery swapping", "Fleet services"], desc: "Operator-focused mobility provider supporting clean transport deployment and mobile charging access.", featured: false, logo: "logo-orange" },
  { id: 27, name: "eBee Africa", category: "Charging & Swapping", country: "Uganda", city: "Kampala", status: "Listed", segments: ["2W", "Commercial"], products: ["Charging", "Battery swapping"], desc: "African EV operator enabling electric transport through charging and ride-ready infrastructure.", featured: false, logo: "logo-cyan" },
  { id: 28, name: "TankVolt", category: "Electric Mobility Supplier", country: "Kenya", city: "Nairobi", status: "KEMTG contacted", segments: ["2W", "3W", "Commercial"], products: ["Battery packs", "Energy systems"], desc: "Battery systems company providing emerging mobility markets with practical energy solutions and support.", featured: false, logo: "logo-purple" },
  { id: 29, name: "ChargeCraft Engineering", category: "Technical Services", country: "Uganda", city: "Kampala", status: "Technically verified", segments: ["2W", "3W", "Commercial"], products: ["Engineering services", "Testing equipment"], desc: "Technical services partner helping validate EV systems, prototypes and in-field deployment quality.", featured: false, logo: "logo-lime" },
  { id: 30, name: "Africa E-Mobility Alliance (AfEMA)", category: "Policy & Ecosystem", country: "Kenya", city: "Nairobi", status: "Listed", segments: ["2W", "3W", "4W", "Commercial"], products: ["Research", "Ecosystem support"], desc: "Policy and ecosystem convenor connecting public, private and research stakeholders across Africa.", featured: false, logo: "logo-blue" }
];

const countryFilter = document.getElementById("countryFilter");
const categoryFilter = document.getElementById("categoryFilter");
const componentFilter = document.getElementById("componentFilter");
const searchInput = document.getElementById("searchInput");
const companyGrid = document.getElementById("companyGrid");
const resultCount = document.getElementById("resultCount");
const filterSummary = document.getElementById("filterSummary");

function populateFilters() {
  const countries = [...new Set(companies.map((company) => company.country))].sort();
  const categories = [...new Set(companies.map((company) => company.category))].sort();
  const products = [...new Set(companies.flatMap((company) => company.products))].sort();

  countryFilter.innerHTML = '<option value="">All markets</option>' + countries.map((country) => `<option value="${country}">${country}</option>`).join("");
  categoryFilter.innerHTML = '<option value="">All categories</option>' + categories.map((cat) => `<option value="${cat}">${cat}</option>`).join("");
  componentFilter.innerHTML = '<option value="">All products & capabilities</option>' + products.map((prod) => `<option value="${prod}">${prod}</option>`).join("");
}

function statusClass(status) {
  if (status === "Technically verified") return "verified";
  if (status === "KEMTG contacted") return "contacted";
  return "listed";
}

function esc(value) {
  return String(value).replace(/[&<>\"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function getFilters() {
  return {
    q: searchInput.value.trim().toLowerCase(),
    category: categoryFilter.value,
    product: componentFilter.value,
    country: countryFilter.value,
    statusFilters: [...document.querySelectorAll('input[name="verification"]:checked')].map((input) => input.value),
    segmentFilters: [...document.querySelectorAll('input[name="segment"]:checked')].map((input) => input.value),
    sort: document.getElementById("sortSelect").value
  };
}

function filteredCompanies() {
  const filters = getFilters();

  let filtered = companies.filter((company) => {
    const haystack = [
      company.name,
      company.category,
      company.country,
      company.city,
      company.desc,
      ...company.products,
      ...company.segments
    ].join(" ").toLowerCase();

    const qMatch = !filters.q || haystack.includes(filters.q);
    const categoryMatch = !filters.category || company.category === filters.category;
    const productMatch = !filters.product || company.products.includes(filters.product);
    const countryMatch = !filters.country || company.country === filters.country;
    const statusMatch = !filters.statusFilters.length || filters.statusFilters.includes(company.status);
    const segmentMatch = !filters.segmentFilters.length || filters.segmentFilters.some((segment) => company.segments.includes(segment));

    return qMatch && categoryMatch && productMatch && countryMatch && statusMatch && segmentMatch;
  });

  if (filters.sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filters.sort === "country") {
    filtered.sort((a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name));
  } else {
    filtered.sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));
  }

  return filtered;
}

function cardHTML(company) {
  return `
    <article class="company-card">
      <div class="company-top">
        <div class="company-logo ${company.logo}">${esc(company.name.slice(0, 2).toUpperCase())}</div>
        <div style="min-width:0;flex:1;">
          <div class="company-name">${esc(company.name)}</div>
          <div class="company-meta">${esc(company.category)} <span class=\"dot\"></span> ${esc(company.country)}</div>
        </div>
        <span class="verify ${statusClass(company.status)}">${esc(company.status)}</span>
      </div>

      <p class="company-desc">${esc(company.desc)}</p>
      <div class="tag-row">
        ${company.products.slice(0, 3).map((product) => `<span class=\"tag\">${esc(product)}</span>`).join("")}
      </div>

      <div class="company-bottom">
        <span class="company-location">⌖ ${esc(company.city)}, ${esc(company.country)}</span>
        <button class="text-action" data-company="${company.id}">View profile ↗</button>
      </div>
    </article>
  `;
}

function render() {
  const filtered = filteredCompanies();

  companyGrid.innerHTML = filtered.length
    ? filtered.map((company) => cardHTML(company)).join("")
    : `<div class="empty-state"><div style="font-size:30px">⌕</div><strong>No matching companies found</strong><span>Try a broader search or clear one or more filters.</span><div style="margin-top:16px"><button class="btn btn-outline" id="emptyReset">Clear filters</button></div></div>`;

  resultCount.textContent = `${filtered.length} compan${filtered.length === 1 ? "y" : "ies"}`;
  const activeFilters = !!(
    searchInput.value.trim() ||
    categoryFilter.value ||
    componentFilter.value ||
    countryFilter.value ||
    document.querySelectorAll('input[name="verification"]:checked').length ||
    document.querySelectorAll('input[name="segment"]:checked').length
  );
  filterSummary.textContent = activeFilters ? "matching your filters" : "in the directory";

  const gridView = document.getElementById("gridViewBtn");
  const listView = document.getElementById("listViewBtn");
  const viewMode = document.body.dataset.view || "grid";
  companyGrid.style.gridTemplateColumns = viewMode === "list" ? "1fr" : "";

  if (viewMode === "list") {
    [...document.querySelectorAll(".company-card")].forEach((card) => {
      card.style.flexDirection = "row";
      card.style.alignItems = "center";
      card.style.gap = "18px";
      card.style.flexWrap = "wrap";
      const desc = card.querySelector(".company-desc");
      if (desc) {
        desc.style.flex = "1 1 240px";
        desc.style.minHeight = "0";
      }
      const bottom = card.querySelector(".company-bottom");
      if (bottom) {
        bottom.style.borderTop = "0";
        bottom.style.paddingTop = "0";
        bottom.style.marginTop = "0";
      }
    });
  }

  gridView.classList.toggle("selected", viewMode === "grid");
  listView.classList.toggle("selected", viewMode === "list");

  const emptyReset = document.getElementById("emptyReset");
  if (emptyReset) {
    emptyReset.addEventListener("click", resetAll);
  }

  [...document.querySelectorAll("[data-company]")].forEach((button) => {
    button.addEventListener("click", () => showCompany(Number(button.dataset.company)));
  });
}

function resetAll() {
  searchInput.value = "";
  categoryFilter.value = "";
  componentFilter.value = "";
  countryFilter.value = "";
  document.getElementById("sortSelect").value = "featured";
  document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = false;
  });
  render();
}

function clearFilterChecks() {
  document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = false;
  });
}

function toast(message) {
  const toastEl = document.getElementById("toast");
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastEl.timer);
  toastEl.timer = setTimeout(() => toastEl.classList.remove("show"), 3600);
}

function openModal(which) {
  const modal = document.getElementById(`${which}Modal`);
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  const firstInput = modal.querySelector("input");
  if (firstInput) {
    setTimeout(() => firstInput.focus(), 50);
  }
}

function closeModals() {
  document.querySelectorAll(".modal-backdrop").forEach((modal) => modal.classList.remove("open"));
  document.body.style.overflow = "";
}

function showCompany(id) {
  const company = companies.find((item) => item.id === id);
  if (!company) return;

  document.getElementById("requestTitle").textContent = "Connect with " + company.name;
  document.querySelector("#requestModal .modal-head p").textContent = "This is a demo profile. Submit a request to explore a potential introduction.";
  document.getElementById("reqNeed").value = company.products[0] || "";
  document.getElementById("reqDetails").value = `I would like to learn more about ${company.name} and its capabilities in ${company.products.join(", ")}. Please confirm relevant specifications, market availability and next steps.`;
  openModal("request");
}

function applyQuickFilter(category, product) {
  if (category) categoryFilter.value = category;
  if (product) componentFilter.value = product;
  render();
  document.getElementById("directory").scrollIntoView({ behavior: "smooth" });
}

searchInput.addEventListener("input", render);
["categoryFilter", "componentFilter", "countryFilter"].forEach((id) => {
  document.getElementById(id).addEventListener("change", render);
});

document.getElementById("sortSelect").addEventListener("change", render);
document.querySelectorAll('input[name="verification"], input[name="segment"]').forEach((input) => input.addEventListener("change", render));
document.getElementById("applyFilters").addEventListener("click", render);
document.getElementById("clearFilters").addEventListener("click", () => {
  clearFilterChecks();
  render();
});
document.getElementById("resetFilters").addEventListener("click", resetAll);
document.getElementById("searchBtn").addEventListener("click", render);

const gridViewBtn = document.getElementById("gridViewBtn");
const listViewBtn = document.getElementById("listViewBtn");

gridViewBtn.addEventListener("click", () => {
  document.body.dataset.view = "grid";
  render();
});

listViewBtn.addEventListener("click", () => {
  document.body.dataset.view = "list";
  render();
});

["list", "request"].forEach((type) => {
  document.querySelectorAll(`[data-open="${type}"]`).forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      openModal(type);
    });
  });
});

document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", closeModals));
document.querySelectorAll(".modal-backdrop").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModals();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModals();
});

document.querySelector("#requestForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const summary = `Supplier introduction request preview\nName: ${document.getElementById("reqName").value}\nOrganization: ${document.getElementById("reqOrg").value}\nEmail: ${document.getElementById("reqEmail").value}\nMarket: ${document.getElementById("reqCountry").value}\nNeed: ${document.getElementById("reqNeed").value}\nScale: ${document.getElementById("reqQuantity").value || "Not specified"}\nRequirements: ${document.getElementById("reqDetails").value}`;
  closeModals();
  toast("Request preview created. Connect a backend to submit it securely.");
  const blob = new Blob([summary], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "kemtg-supplier-request-preview.txt";
  anchor.click();
  URL.revokeObjectURL(url);
  event.target.reset();
  document.getElementById("requestTitle").textContent = "Request a supplier introduction";
  document.querySelector("#requestModal .modal-head p").textContent = "Tell us what you need. This is a front-end prototype.";
});

document.querySelector("#listForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const summary = `KEMTG company listing preview\nCompany: ${document.getElementById("listCompany").value}\nWebsite: ${document.getElementById("listWebsite").value || "Not supplied"}\nCategory: ${document.getElementById("listCategory").value}\nCountry: ${document.getElementById("listCountry").value}\nCapabilities: ${document.getElementById("listProducts").value}\nContact: ${document.getElementById("listContact").value}\n\nReview before publication. This is demo data and has not been submitted to KEMTG.`;
  closeModals();
  toast("Listing preview created. Connect a backend for real submissions.");
  const blob = new Blob([summary], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "kemtg-company-listing-preview.txt";
  anchor.click();
  URL.revokeObjectURL(url);
  event.target.reset();
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navlinks").classList.toggle("mobile-open");
});

document.querySelectorAll(".navlinks a").forEach((link) => {
  link.addEventListener("click", () => document.getElementById("navlinks").classList.remove("mobile-open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("heroCompanies").textContent = companies.length;
document.getElementById("heroSuppliers").textContent = companies.filter((company) => company.category === "Electric Mobility Supplier").length;
document.getElementById("statCompanies").textContent = companies.length;
document.getElementById("statSuppliers").textContent = companies.filter((company) => company.category === "Electric Mobility Supplier").length;
document.getElementById("statCountries").textContent = [...new Set(companies.map((company) => company.country))].length;

document.body.dataset.view = "grid";
populateFilters();
render();
