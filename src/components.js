import React from 'react';

function Station(props) {
  const {station} = props;
  return (
    <div>
      <span> Number: {station.number}</span>
      <span> Name: {station.name}</span>
      <span> Bikes: {station.available_bikes}/{station.available_bike_stands}</span>
    </div>
  );
}

export function StationList(props) {
  const {stations} = props;
  return (
    <div className='station'>
      <ul className='station__list'>
        {stations.map(s => (
          <li key={s.number}>
            <Station station={s} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function StationChooser(props) {
    return(
      <div>
        <p>ICI STATION CHOOSER!</p>
      </div>
    );
}

export function VelovApp(props) {
  const {current_station} = props;
  var view;
  if (current_station.length < 1) {
    view = <StationList />;
  } else {
    view = <StationChooser />
  }
  return( <div> {view} </div> );
}
