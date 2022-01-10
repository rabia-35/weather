import { useContext, useEffect, useState } from 'react'
import { CityContext } from './City'
import axios from 'axios'

export const  Weather=()=> {
    const {city}=useContext(CityContext) // City.js dosyasından city state çekme
    const [weather, setWeather]=useState()
    const [data, setData]=useState();
    const [loading, setLoading]=useState(true);
    
    const apiKey="91a58151e7f031bbef14002c854f771a"

    useEffect(() => {
        axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
          ).then(({ data }) => {
            axios(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,minutely&units=metric&lang=tr&appid=${apiKey}`
            ).then(({ data }) => {
                setData(data);
                setWeather(data.current)
                setLoading(false);
                
            });
           
        });
    }, [city]); // Openweather'dan city state bağlı olarak  dataları çekme

   const arrDay=["Pazar","Pzt","Salı","Çarş","Perş","Cuma","Cmt"]

   const d = new Date();
   let days = d.getDay();// güncel günü getDate ve getDay ile alma
   const findDay=(day)=>{
    return (day>6) ? arrDay[day-7] : arrDay[day]
   }

   if (loading) {
    return (
        <div >
            <h2>Yükleniyor...</h2>
        </div>
    );
}
   console.log(data) 
    return (
        <>
        <h5 className="selectText">{city.toUpperCase()} İÇİN 7 GÜNLÜK HAVA DURUMU TAHMİNİ</h5>
        <div className='container' >
            <div className="row today" >
                <div className="col">
                        <h2 className='days'>
                            {findDay(days)}
                        </h2>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                </div>
                <div className="col todayCol">
                        <h5>{weather.weather[0].description}</h5>
                        <h5><small>Sıcaklık:</small> {weather.temp}°C </h5> <br/>
                        <h6><small>Rüzgar Hızı: </small>{(weather.wind_speed * 1.609344).toFixed(1)} km/s</h6>
                 </div>
                 
                 
                
            </div>


        <div className='row otherDays' >
        {data.daily.map((day,i)=>{
            if(i<7 && i>0){
                return (
                    <div key={day.dt} className="col-4 col-sm-2" > 
                            <h6 className='days'>
                                {findDay(days+ i )}
                            </h6>
                            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} className="img"/>
                            <h6>{day.weather[0].description}</h6>
                            <span > {day.temp.max}°C {day.temp.min}°C</span>
                        
                    </div>
                    
                )
               
                }
            
        })}
         </div>
        </div>
        
        <br/>
        <p>GitHub: @rabia-35</p>
    </>
    )
}