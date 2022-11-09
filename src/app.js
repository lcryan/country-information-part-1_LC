import axios from 'axios';

console.log('Hallo daar!');
const countryList = document.getElementById('list-of-countries')
const populationData = document.getElementById('list-of-countries')

async function fetchCountryData() {
    try {
        const axiosResponse = await axios.get('https://restcountries.com/v2/all')
        console.log(axiosResponse)


        axiosResponse.data.map((country)  => {

            const countryNames = document.createElement('li');
            countryNames.setAttribute('class', 'countryName');
            countryNames.textContent = country.name;

            countryList.appendChild(countryNames);

            const populationC = document.createElement('li');
            populationC.setAttribute('class','population');
            populationC.textContent = `Has a population of ${country.population} people.`;

            populationData.appendChild(populationC)

            });


    } catch (e) {
        console.error(e);
    }
}

fetchCountryData();

