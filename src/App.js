import { useEffect, useState } from 'react';
import './App.css';
import getCountries from './services/getCountries';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries().then(countries => setCountries(countries))
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
