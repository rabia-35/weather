import  { useState, useContext } from 'react'
import {weatherContext }  from '../contexts/Weather';
import { CityContext } from '../contexts/City';
import Loading from './loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faDroplet} from  "@fortawesome/free-solid-svg-icons"


function WeatherCard() {
    const [degree, setDegree]=useState("C")
    const {data, loading, weather }=useContext(weatherContext)
    const { city }= useContext(CityContext);

    if (loading) {
        return <Loading />
    }
  
   
    return (
        <>
        <h5 className=" text-uppercase text-center text-light mb-4">{data.timezone}-{city}</h5>
        
        <div className='container text-center border' >
        
            <div className="row" >
                <div className="col">
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                    <div className='d-flex justify-content-center'>
                    <h1 className='me-3'>  {degree==="C" ? Math.round(weather.temp) : Math.round((1.8 * weather.temp) + 32)} </h1>
                    <h1 type="button" onClick={()=>setDegree("C")} className={degree==="F" ? "text-muted": ""}>°C |</h1>
                    <h1 type="button" onClick={()=>setDegree("F")} className={degree==="C" ? "text-muted" : ""}>°F </h1>
                    <div className='fs-4 align-self-end ms-3'>{weather.weather[0].main}</div>

                    </div>
                </div>
                <div className="col mt-3">
                    <h4>TODAY </h4>
                    <p><small>Humidity : </small> {weather.humidity} % <FontAwesomeIcon icon={faDroplet} /></p>
                    <p><small>Wind Speed : </small>{Math.round(weather.wind_speed)} mph <FontAwesomeIcon icon={faWind} /></p>
                 </div>
              
            </div>


        <div className='row ' >
        {
        data.daily.map((item,i)=>{
            let date = new Date((item.dt) * 1000)
            if(i<7 && i>0){
                return (
                    <div key={item.dt} className="col-4 col-sm-2 card" > 
                    <h5> {date.toUTCString().slice(0,3)}</h5>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className="img"/>
                            <h6>{item.weather[0].main}</h6>
                            <span>max {Math.round(item.temp.max)}°C <br/> min {Math.round(item.temp.min)}°C</span>
                    </div>    
                )
            }
            
        })}
         </div>
        </div>
    </>
    )
   
}

export default WeatherCard