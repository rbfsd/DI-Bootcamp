import React, { useState } from "react";
import axios from "axios";
import CitySearch from "../Components/CitySearch";
import WeatherDisplay from "../Components/WeatherDisplay";

const WeatherPage = ({ onAddFavorite }) => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  return (
    <div>
      <CitySearch onSearch={fetchWeather} />
      {weather && <WeatherDisplay weather={weather} onSave={onAddFavorite} />}
    </div>
  );
};

export default WeatherPage;
