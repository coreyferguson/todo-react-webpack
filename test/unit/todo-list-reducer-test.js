
'use strict';

import deepFreeze from 'deep-freeze';
import todoReducer from '../../src/todo/redux/todo-list-reducer';

import {
  ADD_TODO_PENDING, ADD_TODO_FULFILLED,
  FETCH_TODOS_PENDING, FETCH_TODOS_FULFILLED
} from '../../src/todo/redux/todo-list-actions';

describe('unit test todo-reducer', () => {

  it('return initial state', () => {
    expect(todoReducer({}, { type: 'NO_SUCH_ACTION' })).to.eql({});
    expect(todoReducer(undefined, {})).to.eql({
      isFetching: false,
      isAdding: false,
      items: []
    });
  });

  /////////////////////////////
  // add todo asynchronously //
  /////////////////////////////

  describe('add todo asynchronously', () => {

    it('add todo request', () => {
      const stateBefore = {
        isAdding: false,
        items: []
      };
      deepFreeze(stateBefore);
      const stateAfter = todoReducer(stateBefore, {
        type: ADD_TODO_PENDING,
        payload: { id: 1, text: 'text' }
      })
      expect(stateAfter).to.have.property('isAdding', true);
      expect(stateAfter).to.have.deep.property('items.length', 0);
    });

    it('add todo response', () => {
      const stateBefore = {
        isAdding: true,
        items: [{ id: 1, text: 'text' }]
      };
      deepFreeze(stateBefore);
      const stateAfter = todoReducer(stateBefore, {
        type: ADD_TODO_FULFILLED,
        payload: { id: 2, text: 'text2' }
      });
      expect(stateAfter).to.have.property('isAdding', false);
      expect(stateAfter.items.length).to.equal(2);
      expect(stateAfter.items).to.deep.include.members([
        { id: 1, text: 'text' },
        { id: 2, text: 'text2' }
      ]);
    });

  });

  ////////////////////////////////
  // fetch todos asynchronously //
  ////////////////////////////////

  describe('fetch todos asynchronously', () => {

    it('fetch todos request', () => {
      const stateBefore = {
        isFetching: false,
        items: []
      };
      deepFreeze(stateBefore);
      const stateAfter = todoReducer(stateBefore, {
        type: FETCH_TODOS_PENDING
      });
      expect(stateAfter).to.have.deep.property('isFetching', true);
    });

    it('fetch todos response', () => {
      const stateBefore = {
        isFetching: true,
        items: []
      };
      deepFreeze(stateBefore);
      const stateAfter = todoReducer(stateBefore, {
        type: FETCH_TODOS_FULFILLED,
        payload: [
          { id: 1, text: 'text' },
          { id: 2, text: 'text2' }
        ]
      });
      expect(stateAfter).to.have.deep.property('isFetching', false);
      expect(stateAfter.items[0]).to.eql({ id: 1, text: 'text' });
      expect(stateAfter.items[1]).to.eql({ id: 2, text: 'text2' });
    });

  })

});
