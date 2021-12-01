import { useContext } from 'react'

import { WeatherContext } from './WeatherData'
import './img'



function Card() {

    const weather=useContext(WeatherContext)
    const arrDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const d = new Date();
let day = d.getDay();
const findDay=(day)=>{
    
       return (day>=arrDay.length) ? <h5>{arrDay[day-7]} </h5>: <h5>{arrDay[day]} </h5>;
    
}

    return (
        <div>
            <div className="card-group ">
            <div className="click weather">
            {findDay(day)}
            
            <img src={require('./img/Rain.png')} className="card-img-top" alt="..."/> <br/>
        {weather}
               
                <div className="card-body">
                
                <p className="card-text">dsffdfsfds</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="weather"  >
            {findDay(day+1)}
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                
                <p className="card-text"> lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            
            <div className="weather"  >
            {findDay(day+2)}
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                
                <p className="card-text">lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="weather"  >
            {findDay(day+3)}
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                
                <p className="card-text">nt is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="weather"  >
            {findDay(day+4)}
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                
                <p className="card-text">T little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="weather"  >
            {findDay(day+5)}
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                
                <p className="card-text"> bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="weather"  >
            {findDay(day+6)}
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                
                <p className="card-text"> bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card
