import axios from 'axios';

console.log('Hallo daar!');
const countryFlag = document.getElementById('list-of-countries')
const countryList = document.getElementById('list-of-countries')
const populationData = document.getElementById('list-of-countries')


async function fetchCountryData() {
    let axiosResponse
    try {
        axiosResponse = await axios.get('https://restcountries.com/v2/all')
    } catch (e) {
        console.error(e);
    }
    console.log(axiosResponse)

    const sortedCountries = axiosResponse.data.sort((a, b) => {
        return a.population - b.population
    })

    const countries = sortedCountries.map((country) => {
        const countryNamesContainer = document.createElement('li');
        /*countryNamesContainer.setAttribute('class', 'countryName');*/

        const countryName = document.createElement('span')
        countryName.textContent = country.name;
        countryName.setAttribute('class', 'countryName')
        countryNamesContainer.appendChild(countryName);

        const flagC = document.createElement('img');
        flagC.setAttribute('id', 'flag');
        flagC.setAttribute('src', country.flags.png);
        countryNamesContainer.appendChild(flagC);

        const populationC = document.createElement('p');
        populationC.setAttribute('class', 'population');
        populationC.textContent = `Has a population of ${country.population} people`;
        countryNamesContainer.appendChild(populationC);

        switch (country.region) {
            case "Africa":
                countryName.setAttribute('id', 'africa');
                break
            case "Americas":
                countryName.setAttribute('id', 'americas');
                break
            case "Asia":
                countryName.setAttribute('id', 'asia');
                break
            case "Europe":
                countryName.setAttribute('id', 'europe');
                break
            case "Oceania":
                countryName.setAttribute('id', 'oceania');
                break
            default:
                countryName.setAttribute('id', 'other');
        }

        return countryNamesContainer;

    })

    countryList.append(...countries);

}

fetchCountryData();

