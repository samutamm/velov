import React from 'react';

export function StationList(props) {
  const {stations} = props;
  return (
    <div className='station'>
      <ul className='station__list'>
        {stations.map(s => (
          <li key={s.id}>
            Station
          </li>
        ))}
      </ul>
    </div>
  );
}
