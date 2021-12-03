import { useContext, useEffect, useState } from 'react'
import { CityContext } from './City'
import { createContext } from 'react'
import axios from 'axios'

 export const WeatherContext=createContext();

export const  WeatherProvider=({ children })=> {
    const {city}=useContext(CityContext) // City.js dosyasından city state çekme
    const [weather, setWeather]=useState() 
    const [maxTemp, setMaxTemp]=useState() 
    const [minTemp, setMinTemp]=useState()
    const [country, setCountry]=useState()

    useEffect(() => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=91a58151e7f031bbef14002c854f771a`).then(data=>{ 
            setWeather(data.data.weather[0].description);
            setMaxTemp(data.data.main.temp_max);
            setMinTemp(data.data.main.temp_min);
            setCountry(data.data.sys.country);
            });
    }, [city]) // Openweather'dan city state bağlı olarak weather(description),temp_max,temp_min ve country datalarını çekme
   
    const values={
        weather,
        maxTemp,
        minTemp,
        country,
    }
    
    return (
       <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}


