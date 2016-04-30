
'use strict';

import deepFreeze from 'deep-freeze';
import todoReducer from '../../src/todo/reducer/todo-list-reducer.js';

describe('todo-reducer', () => {

  it('return initial state', () => {
    expect(todoReducer([], { type: 'NO_SUCH_ACTION' })).to.eql([]);
    expect(todoReducer(undefined, {})).to.eql([]);
  });

  it('add todo with text', () => {
    const listBefore = [];
    deepFreeze(listBefore);
    expect(todoReducer(listBefore, { type: 'ADD', todo: { text: 'text' } })).to.eql([{text: 'text'}]);
  });

});
