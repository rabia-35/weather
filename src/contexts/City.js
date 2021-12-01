import React, { createContext, useState } from "react";
export const CityContext=createContext();

export const CityProvider=({ children })=>{
    const [city, setCity] = useState("izmir")
    const values={city, setCity}
    
    return (
        <CityContext.Provider value={values}>{ children }</CityContext.Provider>
       
    )
}
