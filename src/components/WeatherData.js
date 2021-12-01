import { useContext, useEffect, useState } from 'react'
import { CityContext } from '../contexts/City'
import { createContext } from 'react'
import axios from 'axios'
 export const WeatherContext=createContext();

export const  WeatherProvider=({ children })=> {
    const {city}=useContext(CityContext)
    const [weather, setWeather]=useState()
    
    useEffect(() => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=91a58151e7f031bbef14002c854f771a`).then(data=>{setWeather(data.data.weather[0].main)})
    }, [city])
  
    return (
       <WeatherContext.Provider value={JSON.stringify(weather)}>{children}</WeatherContext.Provider>
    )
}


