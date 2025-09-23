import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([])
  const apiURL = 'https://openholidaysapi.org/Countries?languageIsoCode=en'

  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        const countries = data.map(country => country)
        setCountries(countries)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <div className="App-content">
        <h1>Public Holidays App</h1>
        <p>Welcome to the Public Holidays App!</p>
        <div>
          <select>
            {
              countries.map((val) => <option key={val.isoCode}>{val.name[0].text}</option>)
            }
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
