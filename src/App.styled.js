import { MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

export const Marker = styled(MapMarker)``;

export const MarkerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
`;
