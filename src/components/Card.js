import { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherData'

function Card() {

    const {weather, maxTemp, minTemp, country}=useContext(WeatherContext)

    const arrDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    const d = new Date();
    let day = d.getDay();// güncel günü getDate ve getDay ile alma
    const findDay=(day)=>{
        return day>=arrDay.length ? <h5>{arrDay[day-7]}</h5> : <h5>{arrDay[day]}</h5> ;
    }
  
   
    return (
        
            <div>
                <h2 className="selectText">Weather Forecast</h2>
                <div className="cardClick ">
                        {findDay(day)}
                        <img src={`/img/${weather}.png`} className="card-img-top" alt="..."/>
                        <h5 className="card-title">{weather}</h5>
                    <div class=" row">
                        <div class=" col">Max Temperature {parseInt(maxTemp-272.15)} </div>
                        <div class=" col">Min Temperature {parseInt(minTemp-272.15)} </div>
                    </div><br/>
                    <p className="selectText" >Country {country}</p>
                </div>
            </div>
       
    )
}
export default Card
