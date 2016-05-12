import { connect } from 'react-redux';
import * as components from './components';
import { fetchStations } from './actions';

export const VelovApp = connect(
  function mapStateToProps(state) {
    return {
      stations: state.items,
      current_station: state.current_station
     };
  },
  function mapDispatchToProps(dispatch) {
    return {
      fetchStations: dispatch(fetchStations())
    };
  }
)(components.VelovApp);
