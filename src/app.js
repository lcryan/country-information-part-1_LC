import axios from 'axios';

console.log('Hallo daar!');
const countryFlag = document.getElementById('list-of-countries')
const countryList = document.getElementById('list-of-countries')
const populationData = document.getElementById('list-of-countries')


async function fetchCountryData() {
    try {
        const axiosResponse = await axios.get('https://restcountries.com/v2/all')
        console.log(axiosResponse)


        axiosResponse.data.map((country) => {

            const countryNames = document.createElement('li');
            countryNames.setAttribute('class', 'countryName');
            countryNames.textContent = country.name;
            countryList.appendChild(countryNames);

            const flagC = document.createElement('img')
            flagC.setAttribute('class', 'flag')
            flagC.setAttribute('src', country.flags.png);
            countryFlag.appendChild(flagC);


            const populationC = document.createElement('li');
            populationC.setAttribute('class', 'population');
            populationC.textContent = `Has a population of ${country.population} people.`;
            populationData.appendChild(populationC);


            switch (country.region) {
                case "Africa":
                    countryNames.setAttribute('id', 'africa');
                    break
                case "Americas":
                    countryNames.setAttribute('id', 'americas');
                    break
                case "Asia":
                    countryNames.setAttribute('id', 'asia');
                    break
                case "Europe":
                    countryNames.setAttribute('id', 'europe');
                    break
                case "Oceania":
                    countryNames.setAttribute('id', 'oceania');
                    break
                default:
                    countryNames.setAttribute('id', 'other');
            }
        })


    } catch (e) {
        console.error(e);
    }
}

fetchCountryData();

