import { useContext } from 'react'
import { CityContext } from '../contexts/City'

function Select() {
    const {city, setCity}= useContext(CityContext)
    
    return (
        <div style={{backgroundColor:"rgb(235, 205, 140)"}}>
            <input placeholder="şehir ismi yazın" className="select" name="city" value={city} onChange={(e)=>setCity(e.target.value)} />
        </div>
    )
}

export default Select
