import './App.css';
import './style/setting.scss';

import Footer from './components/footer/Footer';
import Trip from './components/pages/trip/Trip';
import Driver from './components/pages/driver/Driver';
import Vehicle from './components/pages/vehicle/Vehicle';
import Map from './components/pages/map/Map';
import Logo from './components/layouts/logo/Logo.js';
import data from './assets/data/mission.json';

function App() {
  const { trip, driver, vehicle, vibe} = data;

  return (
    <div className="App">
      <div>
        <Logo />
      </div>
      <div className='content'>
        <Trip data={trip} />
        <Driver data={driver} />
        <Vehicle data={vehicle} />
        <Map data={trip} vibe={vibe} />
      </div>
      {/* <div> */}
        <Footer className="footer" data={trip} />
      {/* </div> */}
    </div>
  );
}

export default App;
