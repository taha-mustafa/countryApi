// It's time To Handle The Elements
const searchInput = document.getElementById("country-input"),
      searchBtn = document.getElementById("searchBtn");

////////////////////////////////////////////////
let conuntryContainer = document.getElementById("country-container");
window.onload = conuntryContainer.style.display = "none";
setTimeout(() => {
  conuntryContainer.style.display = "block";
  window.onload = searchInput.focus();
  let introId = document.getElementById('intro').style.display = "none";
}, 6000); 
//////////////////////////////////////////////// 

// Time For Functionalities
searchBtn.addEventListener("click", () => {
  let nameForCountry = searchInput.value;
  const countriesUrl = `https://restcountries.com/v3.1/name/${nameForCountry}?fullText=true`;
  // Time To Fetch Data
  fetch(countriesUrl).then((resolved) => resolved.json()).then((dataOutput) => {
    resultsArea.innerHTML = `
    <img class="countryFlag" src="${dataOutput[0].flags.svg}">
    <header class="header">
      <h1>${Object.values(dataOutput[0].translations.ara.common).toString().split(',').join('')}</h1>
      <h1>${dataOutput[0].name.common}</h1>
    </header>
    <div class="dataCollector">
      <p><span>Capital: </span> ${dataOutput[0].capital} </p>
      <p><span>Continent:</span> ${dataOutput[0].continents[0]} </p>
      <p><span>Located In:</span> ${dataOutput[0].subregion} </p>
      <p><span>Currency:</span> ${dataOutput[0].currencies[Object.keys(dataOutput[0].currencies)].name} </p>
      <p><span>Languages:</span> ${Object.values(dataOutput[0].languages).toString().split(",").join(", ")} </p>
      <p><span>Population:</span> ${dataOutput[0].population} </p>
      <p><span>Start Of Week:</span> ${dataOutput[0].startOfWeek} </p>
      <p><span>Time Zone:</span> ${dataOutput[0].timezones[0]} </p>
      <h1><span class="done-by">Done by:</span> Taha Mustafa </h1>
    </div>
    `;
  }).catch(() => {
    if (nameForCountry.length === 0) {
      setTimeout(() => {
        resultsArea.innerHTML = `<span>It is best not to leave this field blank.</span>`;
      }, 500);
      setTimeout(() => {
        resultsArea.innerHTML = '';
      }, 2000);
    } else {
      setTimeout(() => {
        resultsArea.innerHTML = `<span>Enter a Valid Country name.</span>`;
      }, 500);
      setTimeout(() => {
        resultsArea.innerHTML = '';
      }, 2000);
    }
  });
  searchInput.value = '';
});