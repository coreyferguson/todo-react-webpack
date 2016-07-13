
import reducer from '../../../src/counter/CounterReducer';
import ActionTypes from '../../../src/counter/CounterActionTypes';
import freeze from 'deep-freeze';

describe('CounterReducer integration test', () => {

  it('return initial state', () => {
    const action = { type: 'no_such_action_type' };
    freeze(action);
    const state = reducer(undefined, action);
    expect(state).to.eql({ counter: 0 });
  });

  it('increment from initial state', () => {
    const action = { type: ActionTypes.INCREMENT };
    freeze(action);
    const state = reducer(undefined, action);
    expect(state).to.eql({ counter: 1 });
  });

  it('increment from given state', () => {
    const action = { type: ActionTypes.INCREMENT };
    freeze(action);
    const stateBefore = { counter: 1 };
    freeze(stateBefore);
    const stateAfter = reducer(stateBefore, action);
    expect(stateAfter).to.eql({ counter: 2 });
  });

});
