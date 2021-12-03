import { useContext } from 'react'
import { CityContext } from '../contexts/City'

function Select() {
    const {city, setCity}= useContext(CityContext)// city.js dosyasından city setCity değerlerini çekme

    return (
        <div className="selectArea">
            
            <input placeholder="şehir ismi yazın" className="select" name="city" value={city} onChange={(e)=>setCity(e.target.value)}/>
            <button className="btn">search city</button>
            
        </div>
    )
}

export default Select
