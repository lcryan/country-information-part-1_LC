import axios from 'axios';

console.log('Hallo daar!');

async function fetchCountryData() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all')
        console.log(result);
    }
}

fetchCountryData()