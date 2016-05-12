import {List, Map} from 'immutable';
import {REQUEST_STATIONS, RECEIVE_STATIONS, CHOOSE_STATION} from './actions';

const init = {
  isFetching: false,
  items: [],
  current_station: ''
};

export default function(state = init, action) {
  switch(action.type) {
    case REQUEST_STATIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_STATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.stations,
        lastUpdated: action.receivedAt
      })
    case CHOOSE_STATION:
      return Object.assign({}, state, {
        current_station: action.current_station
      });
    default:
      return state;
  }
}
