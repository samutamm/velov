import fetch from 'isomorphic-fetch';
import {Apikey} from '../apikey.js';

export const REQUEST_STATIONS = 'REQUEST_STATIONS';
function requestStations() {
  return {
    type: REQUEST_STATIONS
  }
}

export const RECEIVE_STATIONS = 'RECEIVE_STATIONS';
function receiveStations(json) {
  return {
    type: RECEIVE_STATIONS,
    stations: json,
    receivedAt: Date.now()
  }
}

export function fetchStations() {
  return function (dispatch) {
    dispatch(requestStations());
    var url = `https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=`;
    url = url + Apikey();
    return fetch(url)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveStations(json))
      )
  }
}
