import React from 'react';
import './style/setting.scss';

// Components
import Footer from './components/layouts/footer/Footer';
import Logo from './components/layouts/logo/Logo.js';
import data from './assets/data/mission.json';
import DotNav from './components/layouts/dotNav/DotNav';

// Components-pages
import Trip from './components/pages/trip/Trip';
import Driver from './components/pages/driver/Driver';
import Vehicle from './components/pages/vehicle/Vehicle';
import Map from './components/pages/map/Map';


function App() {
  const { trip, driver, vehicle, vibe} = data;

  return (
    <div className="App">
      <Logo />
      <div className='dot-nav-container'>
        <DotNav />
      </div>
      <div className='content'>
        <div className='page'>
          <Trip data={trip} />
          <Driver data={driver} />
          <Vehicle data={vehicle} />
          <Map data={trip} vibe={vibe} />
        </div>
      </div>
      <Footer className="footer" data={trip} />
    </div>
  );
}

export default App;
