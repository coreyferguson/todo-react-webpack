
import {createStore, ActionType} from '../../src/reduxproto/ReduxProto.jsx';

describe('ReduxProtoTest', () => {

  it('dispatch executed twice', () => {
    let store = createStore();
    let spy = sinon.spy();
    store.subscribe(spy);
    store.dispatch({type: 'no_such_type'});
    store.dispatch({type: 'no_such_type'});
    expect(spy).to.be.calledTwice;
    expect(store.getState()).to.eql({
      count: 0
    });
  });

  it('state initialized to 0', () => {
    let store = createStore();
    store.dispatch({type: 'no_such_type'});
    expect(store.getState()).to.eql({
      count: 0
    });
  });

  it('increment', () => {
    let store = createStore();
    store.dispatch({type: ActionType.INCREMENT});
    expect(store.getState()).to.eql({count: 1});
  });

  it('decrement', () => {
    let store = createStore();
    store.dispatch({type: ActionType.DECREMENT});
    expect(store.getState()).to.eql({count: -1});
  });

});
