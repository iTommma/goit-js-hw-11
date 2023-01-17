'use strict';

const BASE_URL = 'https://restcountries.com';
const API_KEY = '';
const API_RESPONSE = 'fields=name,capital,population,flags,languages';

export const fetchRestCountries = cityName => {
  // const searchParams = new URLSearchParams({
  //   q: cityName,
  //   units: 'metric',
  //   lang: 'ua',
  //   appid: API_KEY,
  // });

  return fetch(`${BASE_URL}/v3.1/name/${cityName}?${API_RESPONSE}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    }
  );
};
