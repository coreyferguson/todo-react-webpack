
import ActionTypes from './CounterActionTypes';

const initialState = {
  counter: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return Object.assign({}, state, {
        counter: state.counter + 1
      });
    default:
      return state;
  }
}
