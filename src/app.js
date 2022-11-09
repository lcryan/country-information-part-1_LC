import axios from 'axios';

console.log('Hallo daar!');

async function fetchCountryData() {
    try {
        const axiosResponse = await axios.get('https://restcountries.com/v2/all')
        console.log(axiosResponse)
        } catch (e) {
        console.error(e);
    }
}
fetchCountryData();

