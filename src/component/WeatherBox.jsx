import React from 'react';
import * as S from './../App.styled';

export default function WeatherBox({ weather, lat, lng }) {
  return (
    <S.Marker position={{ lat, lng }}>
      <S.MarkerBox>
        <div>{weather?.address}</div>
        <div>기온 : {weather?.temp} C</div>
        <div>{weather?.description}</div>
      </S.MarkerBox>
    </S.Marker>
  );
}
