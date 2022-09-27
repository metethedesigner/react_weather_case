import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ApiFetch } from "../utils";
import KeyChecker from "./KeyChecker";

const Home = () => {
  //Dispacth action
  const [city, setCity] = useState("İstanbul");

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const handleButton = () => {
    dispatch(ApiFetch(city));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ApiFetch(city));
  }, [dispatch]);

  //Select state
  const state = useSelector((state) => state.api);
  const { data, loading, error } = state;

  return (
    <KeyChecker>
      <div className="home-container">
        <div className="home-top">
          <p className="top-title">Built with React and Redux Toolkit</p>
          <h1 className="title">WEATHER APP</h1>
          <p className="desc">
            Find out the current weather situation around the world.
          </p>
        </div>

        <div className="home-mid">
          <input onChange={handleInput} value={city} type="text" />
          <button onClick={handleButton}>Search</button>
        </div>
        {loading ? (
          <h1 className="loading-message">Loading Please Wait</h1>
        ) : error ? (
          <h1 className="error-message">
            An error has occurred, try a different city.
          </h1>
        ) : (
          <div className="home-weather-data">
            <div className="img">
              <div className="img-circle">
                <img
                  src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>

              <h2> {data?.weather[0].main} </h2>
            </div>

            <div className="weather">
              <h1> {data?.main.temp}°C</h1>

              <h3>
                {" "}
                {data?.name}, {data?.sys?.country}{" "}
              </h3>
            </div>

            <div className="description">
              <p>
                The weather condition in {data?.name}, {data?.sys?.country} is
                described as "{data?.weather[0].main}" with a temperature of{" "}
                {data?.main.temp} °C
              </p>
            </div>
          </div>
        )}
      </div>
    </KeyChecker>
  );
};

export default Home;
