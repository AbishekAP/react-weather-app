import React from "react";
import { FaBuildingCircleExclamation, FaPlugCircleXmark } from "react-icons/fa6";
import rain_d from './assets/weather_icons/rain_d.png';
import rain_n from './assets/weather_icons/rain_n.png';
import cloudy_d from './assets/weather_icons/cloudy_d.png';
import cloudy_n from './assets/weather_icons/cloudy_n.png';
import cloud from './assets/weather_icons/cloud.png';
import cloudy from './assets/weather_icons/cloudy.png';
import day from './assets/weather_icons/day.png';
import mist from './assets/weather_icons/mist.png';
import night from './assets/weather_icons/night.png';
import slow_rain from './assets/weather_icons/slow_rain.png';
import snow from './assets/weather_icons/snow.png';
import storm from './assets/weather_icons/storm.png';

function WeatherReport({ weatherResult, isLoad, notFound, errorMsg }) {
  const weatherIcons={
    '01d':day,
    '02d':cloudy_d,
    '03d':cloud,
    '04d':cloudy,
    '09d':slow_rain,
    '10d':rain_d,
    '11d':storm,
    '13d':snow,
    '50d':mist,
    '01n':night,
    '02n':cloudy_n,
    '03n':cloud,
    '04n':cloudy,
    '09n':slow_rain,
    '10n':rain_n,
    '11n':storm,
    '13n':snow,
    '50n':mist,
  }
  return (
    <>
      <section>
        {isLoad && (
          <div className="loader-container">
            <div className="loader"></div>
            <p className="load-msg">Please Wait...</p>
          </div>
        )}
        {notFound && (
          <div className="notfound-container">
            <FaBuildingCircleExclamation />
            <p className="notfound-msg">City not found!</p>
          </div>
        )}
        {errorMsg &&
        <div className="internet-error">
          <FaPlugCircleXmark/>
          <p className="internet-error-msg">No Connection..!</p>
        </div>
          }
        {!isLoad && !notFound && !errorMsg && (
          <article>
            <div className="image">
              <img
                src={weatherIcons[weatherResult.weather[0].icon]}
                alt="weather"
              />
            </div>
            <div className="basic">
              <p className="temp">{Math.floor(weatherResult.main.temp)}°C</p>
              <h2 className="cityname">
                {weatherResult.name}
                <span>({weatherResult.sys.country})</span>
              </h2>
              <p>{weatherResult.weather[0].description}</p>
            </div>
            <div className="lat-lon">
              <div>
                <span>Latitude</span>
                <p>{weatherResult.coord.lat}</p>
              </div>
              <div>
                <span>Longitude</span>
                <p>{weatherResult.coord.lon}</p>
              </div>
            </div>
            <div className="others">
              <div>
                <span>Wind Speed</span>
                <p>{weatherResult.wind.speed}Km/hrs</p>
              </div>
              <div>
                <span>Humidity</span>
                <p>{weatherResult.main.humidity}%</p>
              </div>
            </div>
          </article>
        )}
      </section>
    </>
  );
}

export default WeatherReport;