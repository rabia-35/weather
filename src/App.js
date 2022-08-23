import './App.css';
import WeatherPro  from './contexts/Weather'
import CityProvider  from './contexts/City';
import Select from './components/Select';
import WeatherCard from './components/weatherCard';
import Footer from "./components/footer"

function App() {
  
  return (
   <div className='App' style={{ backgroundImage: `url(/images/cover.jpg)` }}  >
       <CityProvider>
        <WeatherPro>
          <Select />
          <WeatherCard />
          <Footer />
        </WeatherPro> 
      </CityProvider>
   </div>
    
      
    
  );
}

export default App;



