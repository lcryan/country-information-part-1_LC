import axios from 'axios';

console.log('Hallo daar!');
const countryList = document.getElementById('list-of-countries')

async function fetchCountryData() {
    try {
        const axiosResponse = await axios.get('https://restcountries.com/v2/all')
        console.log(axiosResponse)


        axiosResponse.data.map((countryName) => {
            const countryNames = document.createElement('li');
            countryNames.setAttribute('class', 'countryName');
            countryNames.textContent = countryName.name;

            countryList.appendChild(countryNames);
        });

    } catch (e) {
        console.error(e);
    }
}

fetchCountryData();

