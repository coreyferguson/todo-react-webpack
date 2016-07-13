
import { connect } from 'react-redux';
import CounterView from './CounterView.jsx';
import * as ActionCreators from './CounterActionCreators';

function mapStateToProps({counter}) {
  return { counter };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => {
      dispatch(ActionCreators.increment());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterView);
