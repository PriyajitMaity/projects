import { useState } from "react";
import  './weather.css'
import axios from "axios";

export const Weather = () => {
    const [city, setCity] = useState("");
    const [data, setData] = useState({});
    const [error, setError] =useState(null);

    const weatherData = async () => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8234baa24a19f04306919ec5d6109324`
            );
            setError(null);
            setData(res.data);
        } catch (error) {
            setData(error);
            setError('city not found', error);
        }
    };

    return (
        <div className="box">
            <div className="search-bar">
                <input
                    className="search-box"
                    placeholder="enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
             <button className="search-button" onClick={weatherData}>search</button>
            </div>

            {error && <p className="error">{error}</p>}
            {data.main && (
                <div className="weather-info">
                    <h2>
                        {data.name}, {data.sys.country}
                    </h2>
                    <h3>Temp :<i>{data.main.temp}°C</i></h3>
                    <h4>Weather : <i>{data.weather[0].description}</i></h4>
                </div>
            )}
        </div>
    );
};
