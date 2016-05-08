
'use strict';

import { fetchTodos, addTodo } from '../../src/todo/redux/todo-list-actions';
import deepFreeze from 'deep-freeze';
import reducer from '../../src/todo/redux/todo-list-reducer';
import { createStore, applyMiddleware } from 'redux';
import createPromiseMiddleware from 'redux-promise-middleware';

describe('integration test todo-list-actions', () => {

  let store;

  beforeEach(() => {
    store = createStore(reducer, applyMiddleware(createPromiseMiddleware()));
  });

  it('fetchTodos', () => {
    return store.dispatch(fetchTodos()).then(response => {
      return expect(response.action.payload.length).to.equal(0);
    });
  });

  it('addTodo', () => {
    return store.dispatch(addTodo({ text: 'text' })).then(response => {
      return expect(response.action.payload).to.eql({ id: 1, text: 'text' });
    }).then(() => {
      return store.dispatch(addTodo({ text: 'text2' })).then(response => {
        return expect(response.action.payload).to.eql({ id: 2, text: 'text2' });
      });
    }).then(() => {
      return store.dispatch(fetchTodos()).then(response => {
        return expect(response.action.payload).to.eql([
          { id: 1, text: 'text' },
          { id: 2, text: 'text2' }
        ]);
      });
    });
  });

});
