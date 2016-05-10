import fetch from 'isomorphic-fetch';

export const REQUEST_STATIONS = 'REQUEST_STATIONS';
function requestStations() {
  return {
    type: REQUEST_STATIONS
  }
}

export const RECEIVE_STATIONS = 'RECEIVE_STATIONS';
function receiveStations(json) {
  //json.data.children.map(child => child.data)
  return {
    type: RECEIVE_STATIONS,
    stations: json.records,
    receivedAt: Date.now()
  }
}

export function fetchStations() {
  return function (dispatch) {
    dispatch(requestStations());
    const url = `http://public.opendatasoft.com/api/records/1.0/search/?dataset=station-velov-grand-lyon`;
    return fetch(url)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveStations(json))
      )
  }
}
