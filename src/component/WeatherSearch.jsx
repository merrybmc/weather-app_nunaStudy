import React from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import * as S from '../App.styled';

export default function WeatherSearch({ completeHandler, searchHistory }) {
  console.log(searchHistory);
  return (
    <S.SearchContainer>
      <DaumPostcodeEmbed onComplete={(data) => completeHandler(data)} autoClose={false} />
      <S.SearchAddressbuttonGroup>
        {searchHistory.map((data, index) => (
          <S.addressButton onClick={() => completeHandler(null, data.address, index)}>
            {data.address}
          </S.addressButton>
        ))}
      </S.SearchAddressbuttonGroup>
    </S.SearchContainer>
  );
}
