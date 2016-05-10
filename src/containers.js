import { connect } from 'react-redux';
import * as components from './components';
import { fetchStations } from './actions';

export const StationList = connect(
  function mapStateToProps(state) {
    return { stations: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      fetchStations: dispatch(fetchStations())
    };
  }
)(components.StationList);
