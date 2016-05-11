import React from 'react';

function Station(props) {
  const {station} = props;
  return (
    <div>
      <p>{station["fields"]["name"]}</p>
      <p>, {station["fields"]["last_updat"]}</p>
    </div>
  );
}

export function StationList(props) {
  const {stations} = props;
  return (
    <div className='station'>
      <ul className='station__list'>
        {stations.items.map(s => (
          <li key={s.recordid}>
            <Station station={s} />
          </li>
        ))}
      </ul>
    </div>
  );
}
