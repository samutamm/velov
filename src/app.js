import React from 'react';
import { render } from 'react-dom';
import { StationList } from './components';

const dummyStations = [
  { id: 0},{ id: 1},{ id: 2},{ id: 3}
];

render(
  <StationList stations={dummyStations} />,
  document.getElementById('app')
);
