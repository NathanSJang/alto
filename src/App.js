import './App.css';
import './style/setting.scss';

import Footer from './components/footer/Footer';
import Trip from './components/pages/trip/Trip';
import Driver from './components/pages/driver/Driver';
import Vehicle from './components/pages/vehicle/Vehicle';
import Logo from './components/layouts/logo/Logo.js';
import data from './assets/data/mission.json';

function App() {
  const { trip, driver, vehicle, vibe} = data;

  return (
    <div className="App">
      <div className='content'>
        <div>
          <Trip data={trip} />
          <Driver data={driver} />
          <Vehicle data={vehicle} />
        </div>
      </div>
      <Footer data={trip} />
    </div>
  );
}

export default App;
