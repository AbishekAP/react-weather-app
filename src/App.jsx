import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import WeatherReport from "./WeatherReport";
import Footer from "./Footer";

function App() {
  const [searchValue, setSearchValue] = useState("chennai");
  const [weatherResult, setWeatherResult] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    handleGetWeather();
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    setIsLoad(true);
    setNotFound(false);
    setErrorMsg(false);
    setWeatherResult([]);
    handleGetWeather();
  }
  async function handleGetWeather() {
    const url = `${baseUrl}?q=${searchValue}&appid=${apiKey}&units=metric`;
    if (searchValue) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setNotFound(true);
          console.error("Fetch error: city not found");
        }
        const data = await response.json();
        setWeatherResult(data);
      } catch (error) {
        setErrorMsg(true);
        console.error("Fetch error:", error);
      } finally {
        setIsLoad(false);
      }
    }
  }

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      />
      <main>
        <WeatherReport
          weatherResult={weatherResult}
          isLoad={isLoad}
          notFound={notFound}
          errorMsg={errorMsg}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
