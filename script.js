const companies = [

{
name:"Ampersand Energy",
countries:["Kenya","Rwanda"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"],
description:"Builds electric motorcycles and battery swapping network."
},
  {
name:"Wahu Mobility",
countries:["Ghana","Togo"],
categories:["eBikes"],
energyModels:["Battery Swapping","Home Charging"]
},
  {
name:"eWAKA",
countries:["Kenya","Rwanda","DRC","Malawi"],
categories:["eBikes","Motorcycle"],
energyModels:["tbc"]
},
    {
name:"SGV Electric Mobility",
countries:["Malawi"],
categories:["Motorcycle","Commercial Vehicles","3 Wheeler"],
energyModels:["tbc"]
},
  {
name:"eBee Africa",
countries:["Kenya","Rwanda","Uganda"],
categories:["eBikes"],
energyModels:["Home Charging"]
},

{
name:"Roam",
countries:["Kenya"],
categories:["Motorcycle"],
energyModels:["Public Charging","Battery Swapping","Home Charging"]
},
  {
name:"SUN Mobility",
countries:["Kenya"],
categories:["Motorcycle","3 Wheeler"],
energyModels:["tbc"]
},
  {
name:"TankVolt",
countries:["Kenya","Nigeria","Tanzania","Ethiopia","Uganda"],
categories:["Motorcycle","3 Wheeler"],
energyModels:["tbc"]
},
  {
name:"Kiri EV",
countries:["Kenya"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"]
},
  {
name:"Dodai",
countries:["Ethiopia"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"]
},

{
name:"Spiro",
countries:["Kenya","Rwanda","Benin","Togo","Uganda","Tanzania","Nigeria","Cameroon"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"]
},
  {
name:"Zembo",
countries:["Uganda"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"]
},
{
name:"Orbit Electric",
countries:["Nigeria"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"]
},
  {
name:"Gogo Electric",
countries:["Uganda"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"]
},
   {
name:"Mazi Mobility",
countries:["Kenya"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"]
},
     {
name:"Kibo",
countries:["Kenya"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"]
},
{
name:"Songa Mobility",
countries:["Kenya"],
categories:["3 Wheeler","EV Charging"],
energyModels:["Public Charging"]
},
{
name:"Emergi",
countries:["Liberia"],
categories:["3 Wheeler"],
energyModels:[""]
},
{
name:"BasiGo",
countries:["Kenya","Rwanda"],
categories:["Bus"],
energyModels:["Public Charging"]
},
  {
name:"Kabisa EV",
countries:["Kenya","Rwanda"],
categories:["Car","Commercial Vehicles","EV Charging"],
energyModels:["Public Charging"]
},
   {
name:"GIZ Kenya",
countries:["Kenya"],
categories:["Development Partners & Foundations"],
energyModels:["NA"]
},
   {
name:"Siemens Stiftung",
countries:["Kenya"],
categories:["Development Partners & Foundations"],
energyModels:["NA"]
},
  {
name:"United Nations Environment Programme",
countries:["Kenya"],
categories:["Development Partners & Foundations"],
energyModels:["NA"]
},
  {
name:"M-KOPA",
countries:["Kenya"],
categories:["Financing","Motorcycle"],
energyModels:["NA"]
},
    {
name:"Fortune Credit",
countries:["Kenya"],
categories:["Financing","Motorcycle"],
energyModels:["NA"]
},
    {
name:"Equator Mobility",
countries:["Kenya"],
categories:["Leasing","Car","EV Maintenance"],
energyModels:["Public Charging"]
},
    {
name:"Drivelectric",
countries:["Kenya"],
categories:["Leasing","Financing","Car"],
energyModels:["Public Charging"]
},
     {
name:"Izi Electric",
countries:["Rwanda"],
categories:["Leasing","Bus"],
energyModels:["Public Charging"]
},
    {
name:"EMAK",
countries:["Kenya"],
categories:["Industry Associations"],
energyModels:["NA"]
},
  {
name:"TAEMA",
countries:["Tanzania"],
categories:["Industry Associations"],
energyModels:["NA"]
},
  {
name:"ZEMIA",
countries:["Zambia"],
categories:["Industry Associations"],
energyModels:["NA"]
},
   {
name:"UEA",
countries:["Uganda"],
categories:["Industry Associations"],
energyModels:["NA"]
},
     {
name:"EOA",
countries:["Ethiopia"],
categories:["Industry Associations"],
energyModels:["NA"]
},
  {
name:"Advance Mobility Centre",
countries:["Kenya"],
categories:["Training"],
energyModels:["NA"]
},
   {
name:"NITA",
countries:["Kenya"],
categories:["Training"],
energyModels:["NA"]
},
  {name:"WTS",
countries:["Kenya"],
categories:["Training"],
energyModels:["NA"]
},
   {
name:"MAX",
countries:["Nigeria"],
categories:["Financing","Motorcycle"],
energyModels:["NA"]
},
    {
name:"Watu Credit",
countries:["Kenya","Sierra Leone","Nigeria","Uganda","Rwanda","Tanzania","DRC","South Africa"],
categories:["Financing","Motorcycle"],
energyModels:["NA"]
},
  {
name:"Enzi",
countries:["Kenya"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"]
},
  {
name:"Arc Ride",
countries:["Kenya"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"]
},
  {
name:"Zeno",
countries:["Kenya"],
categories:["Motorcycle"],
energyModels:["Battery Swapping","Public Charging"]
},
  {
name:"Kofa",
countries:["Kenya","Ghana"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"]
},
  {
name:"Alpha Mobility",
countries:["Kenya"],
categories:["3 Wheeler"],
energyModels:["Battery Swapping"]
},
    {
name:"Moja EV",
countries:["Kenya"],
categories:["Car"],
energyModels:["Public Charging","Home Charging"]
},
  {
name:"Neo Motors",
countries:["Morocco"],
categories:["Car"],
energyModels:["tbc"]
},
   {
name:"EVChaja",
countries:["Kenya"],
categories:["EV Charging"],
energyModels:["Public Charging"]
},
   {
name:"Powerhive",
countries:["Kenya"],
categories:["EV Charging"],
energyModels:["Battery Swapping"]
}
];

// Region mappings
const regions = {
  "East Africa": ["Kenya", "Rwanda", "Uganda", "Tanzania", "Ethiopia", "Malawi", "DRC", "Zambia"],
  "West Africa": ["Ghana", "Nigeria", "Togo", "Benin", "Cameroon", "Sierra Leone"],
  "Southern Africa": ["South Africa", "Zambia"],
  "Central Africa": ["DRC", "Cameroon"],
  "Horn of Africa": ["Ethiopia", "Kenya", "Uganda"],
  "Sahel": ["Nigeria", "Ghana", "Benin", "Togo"]
};

const categoryFilter = document.getElementById("categoryFilter");
const countryFilter = document.getElementById("countryFilter");
const energyFilter = document.getElementById("energyFilter");
const searchInput = document.getElementById("searchInput");
const container = document.getElementById("companyContainer");
const resultsCount = document.getElementById("resultsCount");

// AI Search Elements
let aiSearchInput, aiSearchBtn, aiSearchResults, aiLoading;

// Initialize AI elements when DOM is ready
function initializeAIElements() {
  aiSearchInput = document.getElementById("aiSearchInput");
  aiSearchBtn = document.getElementById("aiSearchBtn");
  aiSearchResults = document.getElementById("aiSearchResults");
  aiLoading = document.getElementById("aiLoading");
  
  if (aiSearchBtn) {
    aiSearchBtn.addEventListener("click", handleAISearch);
  }
  if (aiSearchInput) {
    aiSearchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleAISearch();
      }
    });
  }
}

function populateFilters(){

const countries =
[...new Set(companies.flatMap(c=>c.countries))]
.sort();

countryFilter.innerHTML=
'<option value="">All Countries</option>';

countries.forEach(country=>{
countryFilter.innerHTML+=
`<option>${country}</option>`;
});

const categories =
[...new Set(companies.flatMap(c=>c.categories))]
.sort();

categoryFilter.innerHTML=
'<option value="">All Categories</option>';

categories.forEach(cat=>{
categoryFilter.innerHTML+=
`<option>${cat}</option>`;
});

const energies =
[...new Set(companies.flatMap(c=>c.energyModels))]
.sort();

energyFilter.innerHTML=
'<option value="">All Energy Models</option>';

energies.forEach(model=>{
energyFilter.innerHTML+=
`<option>${model}</option>`;
});

}

function renderCompanies(){

const search =
searchInput.value.toLowerCase();

const country =
countryFilter.value;

const category =
categoryFilter.value;

const energy =
energyFilter.value;

const filtered =
companies.filter(company=>{

const searchMatch =
company.name.toLowerCase()
.includes(search);

const countryMatch =
!country ||
company.countries.includes(country);

const categoryMatch =
!category ||
company.categories.includes(category);

const energyMatch =
!energy ||
company.energyModels.includes(energy);

return searchMatch &&
countryMatch &&
categoryMatch &&
energyMatch;

});

container.innerHTML="";

filtered.forEach(company=>{

const card =
document.createElement("div");

card.className =
"company-card";

card.innerHTML=`

<h3>${company.name}</h3>

<p>
<strong>Countries:</strong>
${company.countries.join(", ")}
</p>

<p>
<strong>Categories:</strong>
</p>

${company.categories.map(cat=>
`<span class="badge">${cat}</span>`
).join("")}

<p style="margin-top:15px;">
<strong>Energy Model:</strong>
${company.energyModels.join(", ")}
</p>

`;

container.appendChild(card);

});

resultsCount.innerText =
`${filtered.length} Companies Found`;

updateStats();
}

function countCategory(name){

return companies.filter(
c=>c.categories.includes(name)
).length;

}

function updateStats(){

document.getElementById(
"totalCompanies"
).innerText=
companies.length;

document.getElementById(
"motorcycleCount"
).innerText=
countCategory("Motorcycle");

document.getElementById(
"busCount"
).innerText=
countCategory("Bus");

document.getElementById(
"carCount"
).innerText=
countCategory("Car");
  
document.getElementById(
"commercialCount"
).innerText=
countCategory("Commercial Vehicles");
  
document.getElementById(
"chargingCount"
).innerText=
countCategory("EV Charging");

document.getElementById(
"threeCount"
).innerText=
countCategory("3 Wheeler");

document.getElementById(
"financeCount"
).innerText=
countCategory("Financing");
}

// ============= AI SEARCH FUNCTIONALITY =============

// Detect region from query
function extractRegionFromQuery(query) {
  const queryLower = query.toLowerCase();
  for (let [region, countries] of Object.entries(regions)) {
    if (queryLower.includes(region.toLowerCase())) {
      return { type: "region", name: region, countries };
    }
  }
  return null;
}

// Detect country from query
function extractCountryFromQuery(query) {
  const queryLower = query.toLowerCase();
  const allCountries = [...new Set(companies.flatMap(c => c.countries))];
  
  for (let country of allCountries) {
    if (queryLower.includes(country.toLowerCase())) {
      return { type: "country", name: country };
    }
  }
  return null;
}

// Detect category from query (Car, Bus, Financing, etc.)
function extractCategoryFromQuery(query) {
  const queryLower = query.toLowerCase();
  const allCategories = [...new Set(companies.flatMap(c => c.categories))];
  
  for (let category of allCategories) {
    if (queryLower.includes(category.toLowerCase()) || 
        (category === "Financing" && (queryLower.includes("finance") || queryLower.includes("financing") || queryLower.includes("lending") || queryLower.includes("credit"))) ||
        (category === "EV Charging" && (queryLower.includes("charging") || queryLower.includes("charge") || queryLower.includes("charger"))) ||
        (category === "Bus" && (queryLower.includes("bus") || queryLower.includes("buses")))) {
      return category;
    }
  }
  return null;
}

// Generate Africa-wide ecosystem summary
function generateAfricaWideSummary(filter = {}) {
  let filtered = companies;
  
  if (filter.category) {
    filtered = filtered.filter(c => c.categories.includes(filter.category));
  }
  if (filter.energyModel) {
    filtered = filtered.filter(c => c.energyModels.includes(filter.energyModel));
  }

  const allCountriesInvolved = [...new Set(filtered.flatMap(c => c.countries))].sort();
  
  // Count by category
  const categoryCount = {};
  filtered.forEach(company => {
    company.categories.forEach(cat => {
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    });
  });

  // Count by energy model
  const energyCount = {};
  filtered.forEach(company => {
    company.energyModels.forEach(model => {
      if (model && model !== "tbc" && model !== "NA" && model !== "") {
        energyCount[model] = (energyCount[model] || 0) + 1;
      }
    });
  });

  // Count by country
  const countryCount = {};
  filtered.forEach(company => {
    company.countries.forEach(country => {
      countryCount[country] = (countryCount[country] || 0) + 1;
    });
  });

  const topCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  
  const topEnergyModels = Object.entries(energyCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const topCountries = Object.entries(countryCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return {
    scope: "Africa-wide",
    totalCompanies: filtered.length,
    companies: filtered,
    countriesInvolved: allCountriesInvolved,
    categoryBreakdown: categoryCount,
    energyBreakdown: energyCount,
    countryBreakdown: countryCount,
    topCategories,
    topEnergyModels,
    topCountries,
    filter
  };
}

// Generate ecosystem summary for a region
function generateRegionalSummary(region, regionCountries, filter = {}) {
  let filtered = companies.filter(c => 
    c.countries.some(country => regionCountries.includes(country))
  );
  
  if (filter.category) {
    filtered = filtered.filter(c => c.categories.includes(filter.category));
  }
  if (filter.energyModel) {
    filtered = filtered.filter(c => c.energyModels.includes(filter.energyModel));
  }

  const countriesInRegion = [...new Set(filtered.flatMap(c => c.countries))].sort();
  
  // Count by category
  const categoryCount = {};
  filtered.forEach(company => {
    company.categories.forEach(cat => {
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    });
  });

  // Count by energy model
  const energyCount = {};
  filtered.forEach(company => {
    company.energyModels.forEach(model => {
      if (model && model !== "tbc" && model !== "NA" && model !== "") {
        energyCount[model] = (energyCount[model] || 0) + 1;
      }
    });
  });

  const topCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  
  const topEnergyModels = Object.entries(energyCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return {
    scope: region,
    totalCompanies: filtered.length,
    companies: filtered,
    countriesInRegion,
    categoryBreakdown: categoryCount,
    energyBreakdown: energyCount,
    topCategories,
    topEnergyModels,
    filter
  };
}

// Generate country ecosystem summary
function generateCountrySummary(country, filter = {}) {
  let filtered = companies.filter(c => c.countries.includes(country));
  
  if (filter.category) {
    filtered = filtered.filter(c => c.categories.includes(filter.category));
  }
  if (filter.energyModel) {
    filtered = filtered.filter(c => c.energyModels.includes(filter.energyModel));
  }

  if (filtered.length === 0) {
    return null;
  }

  // Count by category
  const categoryCount = {};
  filtered.forEach(company => {
    company.categories.forEach(cat => {
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    });
  });

  // Count by energy model
  const energyCount = {};
  filtered.forEach(company => {
    company.energyModels.forEach(model => {
      if (model && model !== "tbc" && model !== "NA" && model !== "") {
        energyCount[model] = (energyCount[model] || 0) + 1;
      }
    });
  });

  const topCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  
  const topEnergyModels = Object.entries(energyCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return {
    scope: country,
    totalCompanies: filtered.length,
    companies: filtered,
    categoryBreakdown: categoryCount,
    energyBreakdown: energyCount,
    topCategories,
    topEnergyModels,
    filter
  };
}

// Generate intelligent summary text
function generateSummaryText(summary) {
  const scope = summary.scope;
  const count = summary.totalCompanies;
  
  if (summary.filter?.category) {
    const category = summary.filter.category;
    const categoryCompanies = summary.companies.length;
    const topCountry = Object.entries(summary.countryBreakdown || summary.categoryBreakdown)
      .sort((a, b) => b[1] - a[1])[0];
    
    return `${scope}'s ${category.toLowerCase()} landscape includes ${categoryCompanies} active companies. The segment is characterized by ${summary.topEnergyModels[0]?.[0] ? 'a focus on ' + summary.topEnergyModels[0][0].toLowerCase() : 'diverse technology adoption'}. Key innovation hubs include businesses operating across multiple countries, with strong presence in urban markets. Financing and fleet solutions are emerging as critical enablers for market growth.`;
  }
  
  const topCategory = summary.topCategories[0]?.[0] || "Electric vehicles";
  const topEnergy = summary.topEnergyModels[0]?.[0] || "various charging models";
  const topCountriesStr = (summary.topCountries || []).slice(0, 2).map(c => c[0]).join(" and ");
  const countriesStr = summary.countriesInRegion ? summary.countriesInRegion.join(", ") : scope;
  
  if (summary.topCountries) {
    // Africa-wide summary
    return `Africa's e-mobility ecosystem is anchored by ${count} active companies across ${summary.countriesInvolved.length} countries. The market is dominated by ${topCategory.toLowerCase()} solutions powered primarily by ${topEnergy.toLowerCase()}. Leading markets include ${topCountriesStr}, which collectively drive innovation in sustainable transport. The ecosystem shows diverse business models from manufacturing to financing, positioning Africa as a critical frontier for electric mobility innovation.`;
  } else if (summary.countriesInRegion) {
    // Regional summary
    return `The ${scope} e-mobility ecosystem comprises ${count} companies operating across ${summary.countriesInRegion.length} countries (${countriesStr}). ${topCategory.charAt(0).toUpperCase() + topCategory.slice(1).toLowerCase()} dominates the market, with ${topEnergy.toLowerCase()} as the preferred energy model. The region demonstrates strong innovation capacity with companies expanding across multiple countries, indicating a maturing and interconnected market. Key growth drivers include last-mile mobility solutions and cross-border financing networks.`;
  } else {
    // Single country summary
    const companies = summary.companies.slice(0, 3).map(c => c.name).join(", ");
    return `${scope}'s e-mobility ecosystem includes ${count} active companies, primarily focused on ${topCategory.toLowerCase()}. The market demonstrates strong preference for ${topEnergy.toLowerCase()} with key players including ${companies}. The ecosystem shows diverse innovation across vehicle types, financing solutions, and charging infrastructure, positioning ${scope} as a key hub in Africa's sustainable transport transition.`;
  }
}

// Comparison analysis between countries
function generateComparisonAnalysis(countries) {
  const summaries = countries.map(country => ({
    country,
    summary: generateCountrySummary(country)
  })).filter(s => s.summary !== null);

  if (summaries.length === 0) {
    return null;
  }

  const comparison = {
    type: "comparison",
    countries: summaries.map(s => s.country),
    summaries: summaries,
    largest: summaries.reduce((max, s) => 
      s.summary.totalCompanies > max.summary.totalCompanies ? s : max
    ),
    analysis: `Comparative analysis across ${summaries.length} countries shows significant variation in market maturity. ${summaries[0].summary.totalCompanies > summaries[summaries.length-1].summary.totalCompanies ? summaries[0].country + ' leads with ' + summaries[0].summary.totalCompanies + ' companies' : summaries[summaries.length-1].country + ' leads with ' + summaries[summaries.length-1].summary.totalCompanies + ' companies'}. Each market demonstrates unique strengths aligned with local transportation needs and economic conditions. Cross-country collaborations through companies like Spiro and Watu Credit indicate growing regional integration.`
  };

  return comparison;
}

// Main AI search handler
async function handleAISearch() {
  console.log("AI Search triggered");
  
  if (!aiSearchInput) {
    console.error("AI search input element not found");
    return;
  }
  
  const query = aiSearchInput.value.trim();
  console.log("Query:", query);
  
  if (!query) {
    if (aiSearchResults) {
      aiSearchResults.innerHTML = '<div class="ai-result-box error"><p style="color: #ff6666;">Please enter a search query</p></div>';
    }
    return;
  }

  if (aiLoading) aiLoading.style.display = "block";
  if (aiSearchResults) aiSearchResults.innerHTML = "";

  try {
    // Extract filter criteria
    const category = extractCategoryFromQuery(query);
    const energyModel = null; // Can be extended for energy model queries
    
    let summary = null;
    let comparisonResult = null;

    // Check for comparison keywords (between, vs, versus, compare)
    const isComparison = /\b(between|vs|versus|compare|comparing)\b/i.test(query);
    
    if (isComparison) {
      // Extract multiple countries
      const allCountries = [...new Set(companies.flatMap(c => c.countries))];
      const mentionedCountries = allCountries.filter(country => 
        query.toLowerCase().includes(country.toLowerCase())
      );
      
      if (mentionedCountries.length >= 2) {
        comparisonResult = generateComparisonAnalysis(mentionedCountries);
        console.log("Comparison analysis generated for:", mentionedCountries);
      }
    }

    if (!comparisonResult) {
      // Check for region
      const region = extractRegionFromQuery(query);
      if (region) {
        summary = generateRegionalSummary(region.name, region.countries, { category });
        console.log("Region detected:", region.name);
      } else {
        // Check for specific country
        const country = extractCountryFromQuery(query);
        if (country) {
          summary = generateCountrySummary(country.name, { category });
          console.log("Country detected:", country.name);
        } else {
          // Africa-wide query
          summary = generateAfricaWideSummary({ category });
          console.log("Africa-wide summary generated");
        }
      }
    }

    // Generate and display results
    if (comparisonResult) {
      displayComparisonResults(comparisonResult, category);
    } else if (summary) {
      displaySummaryResults(summary);
    } else {
      if (aiSearchResults) {
        aiSearchResults.innerHTML = `
          <div class="ai-result-box error">
            <p>No data found for your query. Try searching for specific countries, regions, or categories like "Financing", "Buses", "EV Charging", etc.</p>
          </div>
        `;
      }
    }

  } catch (error) {
    console.error("Error:", error);
    if (aiSearchResults) {
      aiSearchResults.innerHTML = `
        <div class="ai-result-box error">
          <p>An error occurred while processing your query. Please try again.</p>
        </div>
      `;
    }
  } finally {
    if (aiLoading) aiLoading.style.display = "none";
  }
}

// Display summary results
function displaySummaryResults(summary) {
  if (!aiSearchResults) return;

  const summaryText = generateSummaryText(summary);
  
  aiSearchResults.innerHTML = `
    <div class="ai-result-box">
      <h3>${summary.scope} E-Mobility Ecosystem ${summary.filter?.category ? '- ' + summary.filter.category : ''}</h3>
      <div class="ai-summary">
        <p class="ai-text">${summaryText}</p>
      </div>
      
      <div class="ai-stats">
        <div class="ai-stat">
          <span class="stat-label">Active Companies:</span>
          <span class="stat-value">${summary.totalCompanies}</span>
        </div>
        
        ${summary.topCategories[0] ? `
          <div class="ai-stat">
            <span class="stat-label">Top Vehicle Type:</span>
            <span class="stat-value">${summary.topCategories[0][0]}</span>
          </div>
        ` : ''}
        
        ${summary.topEnergyModels[0] ? `
          <div class="ai-stat">
            <span class="stat-label">Primary Energy Model:</span>
            <span class="stat-value">${summary.topEnergyModels[0][0]}</span>
          </div>
        ` : ''}

        ${summary.countriesInRegion ? `
          <div class="ai-stat">
            <span class="stat-label">Countries Covered:</span>
            <span class="stat-value">${summary.countriesInRegion.length}</span>
          </div>
        ` : ''}
      </div>

      ${summary.topCategories.length > 0 ? `
        <div style="background: rgba(0, 255, 136, 0.05); padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00ff88;">
          <strong style="color: #00ff88;">Market Breakdown:</strong>
          <ul style="list-style: none; margin: 8px 0 0 0; padding: 0;">
            ${Object.entries(summary.categoryBreakdown).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([cat, count]) => 
              `<li style="padding: 4px 0;"><span style="color: #aaa;">${cat}:</span> <strong>${count}</strong></li>`
            ).join("")}
          </ul>
        </div>
      ` : ''}

      <div class="ai-companies-list">
        <h4>Operating Companies:</h4>
        <ul>
          ${summary.companies.slice(0, 15).map(c => `
            <li class="company-item">
              <strong>${c.name}</strong>
              <br><small>${c.categories.join(", ")}</small>
            </li>
          `).join("")}
          ${summary.companies.length > 15 ? `<li class="company-item"><em>... and ${summary.companies.length - 15} more companies</em></li>` : ''}
        </ul>
      </div>
    </div>
  `;
}

// Display comparison results
function displayComparisonResults(comparisonResult, category) {
  if (!aiSearchResults) return;

  aiSearchResults.innerHTML = `
    <div class="ai-result-box">
      <h3>E-Mobility Comparison: ${comparisonResult.countries.join(" vs ")}</h3>
      <div class="ai-summary">
        <p class="ai-text">${comparisonResult.analysis}</p>
      </div>
      
      <div class="ai-stats">
        ${comparisonResult.summaries.map(s => `
          <div class="ai-stat">
            <span class="stat-label">${s.country}</span>
            <span class="stat-value">${s.summary.totalCompanies} cos</span>
          </div>
        `).join("")}
      </div>

      <div style="background: rgba(0, 255, 136, 0.05); padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00ff88;">
        <strong style="color: #00ff88;">Market Details:</strong>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-top: 12px;">
          ${comparisonResult.summaries.map(s => `
            <div style="border: 1px solid rgba(0, 255, 136, 0.3); padding: 12px; border-radius: 6px;">
              <h5 style="color: #00ff88; margin: 0 0 8px 0;">${s.country}</h5>
              <p style="font-size: 13px; color: #aaa; margin: 0;">
                <strong>${s.summary.totalCompanies}</strong> companies<br>
                Top: <strong>${s.summary.topCategories[0]?.[0] || 'N/A'}</strong><br>
                Energy: <strong>${s.summary.topEnergyModels[0]?.[0] || 'N/A'}</strong>
              </p>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

searchInput.addEventListener("input", renderCompanies);
countryFilter.addEventListener("change", renderCompanies);
categoryFilter.addEventListener("change", renderCompanies);
energyFilter.addEventListener("change", renderCompanies);

document.getElementById("resetBtn")
.addEventListener("click",()=>{
  searchInput.value="";
  countryFilter.value="";
  categoryFilter.value="";
  energyFilter.value="";
  renderCompanies();
});

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing...");
  initializeAIElements();
  populateFilters();
  renderCompanies();
});

// Also call in case DOM is already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initializeAIElements();
    populateFilters();
    renderCompanies();
  });
} else {
  initializeAIElements();
  populateFilters();
  renderCompanies();
}
