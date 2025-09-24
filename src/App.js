import { useState } from 'react';
import './App.css';
import getCountries from './services/getCountries';
import getHolidays from './services/getHolidays';
import { useQuery } from '@tanstack/react-query'

function App() {

  const [selectedCountry, setSelectedCountry] = useState('NL')

  const { data: countries = [], isLoading: loadingCountries } =
    useQuery({
      queryKey: ['countries'],
      queryFn: getCountries
    })

  const { data: holidays = [], isLoading: loadingHolidays } =
    useQuery({
      queryKey: ['holidays', selectedCountry],
      queryFn: () => getHolidays(selectedCountry)
    })

  if (loadingCountries || loadingHolidays) return <p>Loading…</p>

  return (
    <div className="App">
      <div className="App-content">
        <h1>Public Holidays</h1>
        <div className="countries">
          <select 
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
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
 