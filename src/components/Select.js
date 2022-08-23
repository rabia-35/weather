import { useContext, useState } from 'react'
import { CityContext } from '../contexts/City'


function Select() {
    const {city, setCity, cities}= useContext(CityContext)// city.js dosyasından city ve setCity değerlerini çekme
  console.log(city)
    return (
       <div className=' selected py-5'>
         <div className="btn-group">
            <button className="btn btn-outline-warning btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cities of Turkey
            </button>
            <ul className="dropdown-menu">
                {cities &&(
                    cities.map(city=>(
                        <li className='dropdown-item' key={city.id}  onClick={()=>setCity(city.name)} >{city.name}</li>
                    ))
                )
                }
            </ul>
        </div>
       </div>
           
    )
}

export default Select
