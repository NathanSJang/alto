import './App.css';
import './style/setting.scss';

import Footer from './components/footer/Footer';
import Trip from './components/pages/trip/Trip';
import Logo from './components/layouts/logo/Logo.js';
import data from './assets/data/mission.json';

function App() {

  return (
    <div className="App">
      <div className='content'>
        <Logo />
        <div>
          <Trip />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
