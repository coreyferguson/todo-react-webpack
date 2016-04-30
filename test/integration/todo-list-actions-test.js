
'use strict';

import { fetchTodos, addTodo } from '../../src/todo/redux/todo-list-actions';
import deepFreeze from 'deep-freeze';
import reducer from '../../src/todo/redux/todo-list-reducer';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

describe('integration test todo-list-actions', () => {

  let store;

  beforeEach(() => {
    store = createStore(reducer, applyMiddleware(thunkMiddleware));
  });

  it('fetchTodos', () => {
    return store.dispatch(fetchTodos()).then(todos => {
      return expect(todos.length).to.equal(0);
    });
  });

  it('addTodo', () => {
    return store.dispatch(addTodo({ text: 'text' })).then(todo => {
      return expect(todo).to.eql({ id: 1, text: 'text' });
    }).then(() => {
      return store.dispatch(addTodo({ text: 'text2' })).then(todo => {
        return expect(todo).to.eql({ id: 2, text: 'text2' });
      });
    }).then(() => {
      return store.dispatch(fetchTodos()).then(todos => {
        return expect(todos).to.eql([
          { id: 1, text: 'text' },
          { id: 2, text: 'text2' }
        ]);
      });
    });
  });

});
