// API key for OpenWeatherMap API
const apikey = 'b2bcca20bad0c1a13fe44d65cba0b692';


// Function to fetch weather data for a given city
const getWeather =async(city)=>{
     // Use fetch to make a request to the OpenWeatherMap API
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
    // Parse the response as JSON
    .then((res)=>res.json())
     // Return the parsed JSON data
    .then((json)=>{
        return json;
    })
}

// Export the getWeather function as the default export
export default getWeather;