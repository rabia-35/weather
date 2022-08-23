import { useContext, useEffect, useState, createContext } from 'react'
import { CityContext } from './City'
import axios from 'axios'

export const weatherContext=createContext();

const WeatherPro=({ children })=> {
    const {city}=useContext(CityContext) //  city state pulled from  City.js file with useContext
    const [weather, setWeather]=useState()
    const [data, setData]=useState();
    const [loading, setLoading]=useState(true);
    
    const apiKey="91a58151e7f031bbef14002c854f771a"

   
    useEffect(() => {
        axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
          ).then(({ data }) => {
            axios(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,minutely&units=metric&lang=tr&appid=${apiKey}`
            ).then(({ data }) => {
                setData(data);
                setWeather(data.current)
                setLoading(false);
                
            });
           
        });
    }, [city]);   //  data pulled from Openweather by city

   const values={weather, data, loading}

   return (
    <weatherContext.Provider value={values} >{children}</weatherContext.Provider>
   )
  
}
export default WeatherPro