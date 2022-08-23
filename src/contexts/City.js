import React, { createContext, useState } from "react";
import cityData from "../cityData.json"


export const CityContext=createContext();


const CityProvider=({ children })=>{
    const [city, setCity] = useState("izmir") 
    const cities=[...cityData]
    const values={city, setCity, cities}
    
    return (
        <CityContext.Provider value={values}>{ children }</CityContext.Provider>
       
    )
}

export default CityProvider;