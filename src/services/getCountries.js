export default function getCountries() {
    const apiURL = 'https://openholidaysapi.org/Countries?languageIsoCode=en'
    return fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const countries = data.map(country => country)
        return countries
      })
      .catch(err => console.error(err))
}
