
'use strict';

import counterReducer from '../../src/counter-reducer.js';

describe('counter-reducer', () => {

  it('increment and decrement by 1', () => {
    expect(counterReducer(0, { type: 'INCREMENT' })).to.equal(1);
    expect(counterReducer(1, { type: 'INCREMENT' })).to.equal(2);
    expect(counterReducer(2, { type: 'DECREMENT' })).to.equal(1);
    expect(counterReducer(1, { type: 'DECREMENT' })).to.equal(0);
  });

  it('do nothing on invalid action type', () => {
    expect(counterReducer(0, { type: 'NO_SUCH_ACTION' })).to.equal(0);
  });

  it('return initial state', () => {
    expect(counterReducer(undefined, {})).to.equal(0);
  })

});
