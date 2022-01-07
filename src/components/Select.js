import { useContext } from 'react'
import { CityContext } from '../contexts/City'

function Select() {
    const {city, setCity}= useContext(CityContext)// city.js dosyasından city setCity değerlerini çekme

    return (
        <div >
            
            <input  className="input" name="city" value={city} onChange={(e)=>setCity(e.target.value)}/>
        
            
        </div>
    )
}

export default Select