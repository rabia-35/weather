import { useContext } from 'react'
import { CityContext } from '../contexts/City'

function Select() {
    const {city, setCity}= useContext(CityContext)// city.js dosyasından city ve setCity değerlerini çekme
    const handleSubmit=(e)=>{
        e.preventDefault();
        setCity(e.target.value)
    }
    return (
        <div >
            <input placeholder='şehir adı giriniz.' className="input" name="city" value={city} onChange={handleSubmit}/>
        </div>
    )
}

export default Select
