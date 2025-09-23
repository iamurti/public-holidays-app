import { useEffect, useState } from 'react';
import './App.css';
import getCountries from './services/getCountries';
import getHolidays from './services/getHolidays';

function App() {
  const [countries, setCountries] = useState([])
  const [holidays, setHolidays] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('NL')
  
  useEffect(() => {
    getCountries().then(countries => setCountries(countries))
    getHolidays(selectedCountry).then(holidays => setHolidays(holidays))
  }, [])

  return (
    <div className="App">
      <div className="App-content">
        <h1>Public Holidays</h1>
        <div className="countries">
          <select>
            {
              countries.map((val) => <option key={val.isoCode} value={val.isoCode}>{val.name[0].text}</option>)
            }
          </select>
        </div>
        <div className="holidays">
          {
            holidays.map((val) => {
              const date = new Date(val.startDate)
              const formattedDate = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })
              return <div key={val.id}>{val.name[0].text} - {formattedDate}</div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
