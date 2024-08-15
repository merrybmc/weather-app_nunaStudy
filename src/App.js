import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=674a503a8ae8d29bac4b501d8f17db8c`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };
  return <></>;
}

export default App;
