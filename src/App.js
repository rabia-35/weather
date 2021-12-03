import  { WeatherProvider } from './contexts/WeatherData'
import Card from './components/Card';
import './App.css';
import { CityProvider } from './contexts/City';
import Select from './components/Select';

function App() {
  
  return (
    <div>
      <CityProvider>
        <WeatherProvider>
        <Select />
        <Card />
        </WeatherProvider>
      </CityProvider>
      
    </div>
  );
}

export default App;
