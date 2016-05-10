import React from 'react';

export function StationList(props) {
  const {stations} = props;
  return (
    <div className='station'>
      <ul className='station__list'>
        {stations.items.map(s => (
          <li key={s.recordid}>
            Station
          </li>
        ))}
      </ul>
    </div>
  );
}
