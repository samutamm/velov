import {List, Map} from 'immutable';
import {REQUEST_STATIONS, RECEIVE_STATIONS} from './actions';


export default function(state = {
  isFetching: false,
  items: []
}, action) {
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
    default:
      return state;
  }
}
