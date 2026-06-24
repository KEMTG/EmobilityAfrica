const companies = [

{
name:"Ampersand Energy",
countries:["Kenya","Rwanda"],
categories:["Motorcycle"],
energyModels:["Battery Swapping"]
},

{
name:"Roam",
countries:["Kenya"],
categories:["Motorcycle"],
energyModels:["Public Charging","Battery Swapping","Home Charging"]
},

{
name:"Spiro",
countries:["Kenya","Rwanda","Benin","Togo"],
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
name:"M-KOPA",
countries:["Kenya"],
categories:["Financing"],
energyModels:[""]
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

const categoryFilter =
document.getElementById("categoryFilter");

const countryFilter =
document.getElementById("countryFilter");

const energyFilter =
document.getElementById("energyFilter");

const searchInput =
document.getElementById("searchInput");

const container =
document.getElementById("companyContainer");

const resultsCount =
document.getElementById("resultsCount");

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
searchInput.addEventListener(
"input",
renderCompanies
);
countryFilter.addEventListener(
"change",
renderCompanies
);

categoryFilter.addEventListener(
"change",
renderCompanies
);

energyFilter.addEventListener(
"change",
renderCompanies
);

document.getElementById("resetBtn")
.addEventListener("click",()=>{

searchInput.value="";
countryFilter.value="";
categoryFilter.value="";
energyFilter.value="";

renderCompanies();

});

populateFilters();
renderCompanies();
