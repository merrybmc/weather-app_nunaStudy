import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './App.styled.js';

function App() {
  const [weahter, setWeather] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setLat(lat);
      setLng(lng);
      getWeatherByCurrentLocation(lat, lng);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_apikey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };
  return (
    <>
      <Map center={{ lat, lng }} style={{ width: '100vw', height: '100vh' }}>
        <WeatherBox weather={weahter} lat={lat} lng={lng} />
      </Map>

      <WeatherButton />
    </>
  );
}

export default App;
