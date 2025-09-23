export default function getHolidays(countryIsoCode = 'NL') {
    fetch(`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${countryIsoCode}&validFrom=2025-01-01&validTo=2025-12-31&languageIsoCode=en`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const holidays = data.map(holiday => holiday)
      return holidays
    })
    .catch(err => console.error(err))
}
