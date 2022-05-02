import './App.css';
import Footer from './components/footer/Footer';
import data from './assets/data/mission.json';

function App() {
  const { trip } = data;
  const ea = trip.estimated_arrival;
  let date = new Date(ea)
  console.log(date.toLocaleTimeString())

  return (
    <div className="App">
      APP
      <Footer />
    </div>
  );
}

export default App;
