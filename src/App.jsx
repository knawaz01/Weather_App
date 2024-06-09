import './App.css'
import { Search, MapPin, Wind } from 'react-feather'
import getWeather from './api/api'
import { useState } from 'react'
import dateFormat from 'dateformat'

function App() {
   // State for city input
  const [city, setCity] = useState("");
  // State for weather data
  const [weather, setWeather] = useState([]);
  // State for theme (light or dark)
  const [theme, setTheme] = useState("light"); 

  // Function to fetch weather data by city name
  const getWeatherByCity = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setCity("");
  }

  // Function to render date based on timezone offset
  const renderDate = (timezoneOffset) => {
    let now = new Date();
    let utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    let localTime = new Date(utcTime + timezoneOffset * 1000);
    return dateFormat(localTime, "dddd, mmmm dS, h:MM TT");
  }

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.className = theme === "light" ? "dark" : "light"; // Update body class
  }

  return (
    <>
      <div className={`app ${theme}`}>
        {/* Theme toggle button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
        
        <h1>Weather App</h1>
        
        {/* Input for city name and search button */}
        <div className="input-wrapper">
          <input type="text" value={city} onChange={(e) => { setCity(e.target.value) }} placeholder='Enter City Name' />
          <button onClick={() => getWeatherByCity()}><Search /></button>
        </div>

        {/* Display weather information if available */}
        {weather && weather.weather &&
          <div className="content">
            <div className="location d-flex">
              <MapPin />
              <h2>{weather.name} <span>({weather.sys.country})</span></h2>
            </div>

            <p className='datetext'>{renderDate(weather.timezone)}</p>

            <div className="weatherdesc d-flex flex-c">
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" />
              <h3 style={{ margin: 0 }}>{weather.weather[0].description}</h3>
            </div>

            <div className="tempstats d-flex flex-c">
              <h1>{weather.main.temp}<span>&deg;C</span></h1>
              <h3 style={{ margin: 0 }}>Feels like {weather.main.feels_like} <span>&deg;C</span></h3>
              <h3 style={{ margin: 10 }}>Humidity: {weather.main.humidity}%</h3>
            </div>

            <div className="windstats d-flex">
              <Wind />
              <h3>Wind: {(weather.wind.speed * 3.6).toString().slice(0, 5)} Km/h</h3>
            </div>
          </div>
        }
        {!weather.weather &&
          <div className="content">
            <h3>No Data Found</h3>
          </div>
        }
      </div>
    </>
  )
}

export default App
