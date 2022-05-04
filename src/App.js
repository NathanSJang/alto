import React, { useState, useEffect ,useRef } from 'react';
import { Link } from 'react-scroll'

import './App.css';
import './style/setting.scss';

import Footer from './components/footer/Footer';
import Trip from './components/pages/trip/Trip';
import Driver from './components/pages/driver/Driver';
import Vehicle from './components/pages/vehicle/Vehicle';
import Map from './components/pages/map/Map';
import Logo from './components/layouts/logo/Logo.js';
import data from './assets/data/mission.json';
import DotNav from './components/layouts/dotNav/DotNav';


function App() {
  const { trip, driver, vehicle, vibe} = data;

  // const renderPage = pages => {
  //   let arr = new Array(num);
    
  //   arr[0] = <Trip data={trip} />
  //   arr[1] = <Driver data={driver} />
  //   arr[2] = <Vehicle data={vehicle} />
  //   arr[3] = <Map data={trip} vibe={vibe} />

  //   return arr
  // }

  // const dotNav = (num) => {
  //   let arr = new Array(num);

  //   arr[0] = <Link to={'/'}/>

  // }

  return (
    // <Router>
    <div className="App">
      <div>
        <Logo />
      </div>
      <div className='dot-nav'>
        <DotNav />
        {/* <ul>
          {[1, 2, 3, 4].map(el => (
            <li>
              <Link
                activeClass="active"
                to='trip'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                {el}
              </Link>
            </li>
            ))}
        </ul> */}
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
    // </Router>
  );
}

export default App;
