import { useContext } from 'react'
import { CityContext } from '../contexts/City'

function Select() {
    const {city, setCity}= useContext(CityContext)// city.js dosyasından city ve setCity değerlerini çekme
    return (
        <div >
            <input placeholder='şehir adı giriniz.' className="input" name="city" value={city} onChange={(e)=>setCity(e.target.value)}/>
        </div>
    )
}

export default Select