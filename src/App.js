import './App.css';
import CurrencyTable from './components/CurrencyTable';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  // Setting up the initial states using
    // react hook 'useState'
  const [ search, setSearch ] = useState('');
  const [ crypto, setCrypto ] = useState([]);

  // Fetching crypto data from the API only
  // once when the component is mounted
  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=USD')
      .then(res => {
        setCrypto(res.data.coins);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <section className='container'>
        <header>
          <h1>The Crypto App</h1>
        </header>
        <div className="filter-container">
            <input type="text"
              placeholder='search for currency...'
              onChange={ e => setSearch(e.target.value) }
            />
        </div>
      </section>
      <section className='container'>
        <CurrencyTable crypto={crypto} search={search} />
      </section>
      <div className="footer container">
        <p>Created with  &hearts; by <a href="https://github.com/raghad-farhud">Raghad Farhud</a></p>
      </div>
    </div>
  );
}

export default App;
