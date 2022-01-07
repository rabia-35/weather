import  { Weather } from './contexts/WeatherData'

import './App.css';
import { CityProvider } from './contexts/City';
import Select from './components/Select';

function App() {
  
  return (
    <div>
     <CityProvider>
     <Select />
        <Weather />
        
      </CityProvider>
      
    </div>
  );
}

export default App;



