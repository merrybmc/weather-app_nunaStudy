import { MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

export const Marker = styled(MapMarker)``;

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const MarkerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 100px;
`;

export const SearchContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  left: 50%;
  transform: translateX(-50%);
`;

export const SearchAddressbuttonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
`;

export const addressButton = styled.button`
  background-color: white;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: bisque;
  }
`;
