import React from 'react';
import * as S from './../App.styled';

export default function WeatherBox({ weather, lat, lng }) {
  return (
    <S.Marker position={{ lat, lng }}>
      <S.MarkerBox>
        <div>{weather?.name}</div>
        <div>{weather?.main.temp}C</div>
        <div>{weather?.weather[0].description}</div>
      </S.MarkerBox>
    </S.Marker>
  );
}
