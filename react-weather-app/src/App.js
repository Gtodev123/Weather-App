import React, {useState} from "react";
import axios from "axios";


function App () {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7baa135ce2badbbdfff270808d999331&units=metric `



  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        setLocation('')
      })
    }
  }

  

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event =>setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <div className="iconWeather"><p className="iconText">{data.weather[0].main}</p> <img className="iconWeather" src ={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} 
         alt="icon" /></div> : null} 
          </div>
        </div>

    {data.name !== undefined && 
    <div className="bottom">
    <div className="feels">
    {data.main ? <p>{data.main.feels_like.toFixed()} °C </p> : null}
      <p>Feels like</p>
    </div>
    <div className="humidity">
    {data.main ? <p>{data.main.humidity} %</p> : null}
      <p>Humidity</p>
    </div>
    <div className="wind">
    {data.main ? <p>{data.wind.speed} KPH</p> : null}
      <p>Winds</p>
    </div>
  </div>
    }

        


      </div>


    </div>
  );
}

export default App;
