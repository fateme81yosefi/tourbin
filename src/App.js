import About from './About/About';
import './App.css';
import Celebration from './Celebration/Celebration';
import CreateTrip from './CreateTrip/CreateTrip';
import Food from './Food/Food';
import Gps from './Gps/Gps';
import Home from './Home/Home';
import ImageSlider from './Slider/ImageSlider';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Gps/>
      <CreateTrip/>
      <Food/>
      <Celebration/>
      <ImageSlider/>
    </div>
  );
}

export default App;
