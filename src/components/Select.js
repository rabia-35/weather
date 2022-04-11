import { useContext, useState } from 'react'
import { CityContext } from '../contexts/City'

function Select() {
    const [title, setTitle]=useState()
    const { setCity}= useContext(CityContext)// city.js dosyasından city ve setCity değerlerini çekme
    const handleSubmit=(e)=>{
        e.preventDefault();
        setCity(title)
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit} >
            <input placeholder='şehir adı giriniz.' className="input" name="city" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </form>
           
    )
}

export default Select
