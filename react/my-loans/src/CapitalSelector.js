import React, { useState } from "react";
// import MessageBus from '@podium/browser';

const CapitalSelector = () => {
  const [capital, setCapital] = useState("");
  const [isSeacherd, setIsSearched] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  const capitals = [
    "London",
    "Berlin",
    "Paris",
    "Madrid",
    "Rome",
    "Amsterdam",
    "Vienna",
    "Brussels",
    "Lisbon",
    "Dublin",
    "Helsinki",
    "Oslo",
    "Stockholm",
    "Copenhagen",
    "Reykjavik",
    "Prague",
    "Budapest",
    "Warsaw",
    "Bratislava",
    "Ljubljana",
  ];

  const handleClick = async () => {
    // const messageBus = new MessageBus();
    // messageBus.subscribe('city-data', 'city', (data) => {
    //     console.log(data);
    // });
    //fetch weather api with current capital
    if (capital === "") return;
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=81def5aa7e0e4176a9b74756233001&q=" +
        capital +
        "&aqi=no"
    );
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
    setIsSearched(true);
  };

  return (
    <div>
      <h1>Capital Selector</h1>
      <select value={capital} onChange={(e) => setCapital(e.target.value)}>
        {capitals.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Click me</button>
      {isSeacherd && (
        <div>
          <h3>Selected Capital: {capital}</h3>
          <div>
            <p>
              <b>Current weather:</b> {weatherData.current.condition.text}
            </p>
            <p>
              <b>Current temperature:</b> {weatherData.current.temp_c}°C
            </p>
            <p>
              <b>Current wind speed:</b> {weatherData.current.wind_kph} km/h
            </p>
            <p>
              <b>Current humidity:</b> {weatherData.current.humidity} %
            </p>
            <img src={weatherData.current.condition.icon} alt="weather icon" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CapitalSelector;
