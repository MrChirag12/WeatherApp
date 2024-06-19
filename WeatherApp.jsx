import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 41.82,
        temp: 43.05,
        tempMin: 43.05,
        tempMax: 43.05,
        humidity: 15,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return (
    <div style={{textAlign: "center"}}>
        <h2>Weather App by Delta</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
    );
}