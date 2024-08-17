import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherSearch from './component/WeatherSearch.jsx';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './App.styled.js';

function App() {
  const [weahter, setWeather] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    getCurrentLocation(true);
  }, []);

  const getCurrentLocation = (currentState, address, anotherLat, anotherLng) => {
    if (currentState) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        setLat(lat);
        setLng(lng);
        getWeatherByCurrentLocation(lat, lng);
      });
    } else {
      getWeatherByCurrentLocation(anotherLat, anotherLng, address);
    }
  };

  const getWeatherByCurrentLocation = async (lat, lon, address) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_apikey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();

    const newAddress = address ? address : data.name;

    setWeather({
      address: newAddress,
      temp: data.main.temp,
      description: data.weather[0].description,
    });
    setSearchHistory((prevHistory) => {
      if (prevHistory.some((item) => item.address === newAddress)) {
        return prevHistory;
      }
      return [...prevHistory, { address: newAddress }];
    });
  };

  const completeHandler = (data, historyAddress, index) => {
    const address = data ? data.address : historyAddress;
    const kakao = window.kakao;
    const geocoder = new kakao.maps.services.Geocoder();

    if (index !== 0) {
      geocoder.addressSearch(address, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const coords = {
            lat: result[0].y,
            lng: result[0].x,
          };

          setLat(coords.lat);
          setLng(coords.lng);
          getCurrentLocation(false, address, coords.lat, coords.lng);
        }
      });
    } else {
      getCurrentLocation(true);
    }
  };
  return (
    <S.Container>
      <WeatherSearch completeHandler={completeHandler} searchHistory={searchHistory} />
      <Map center={{ lat, lng }} style={{ width: '100vw', height: '100vh' }}>
        <WeatherBox weather={weahter} lat={lat} lng={lng} />
      </Map>
    </S.Container>
  );
}

export default App;
