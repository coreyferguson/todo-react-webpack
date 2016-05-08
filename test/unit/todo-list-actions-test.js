
'use strict';

import { fetchTodos, addTodo } from '../../src/todo/redux/todo-list-actions';
import deepFreeze from 'deep-freeze';

describe('unit test todo-list-actions', () => {

  it('fetchTodos', () => {
    let action = fetchTodos();
    expect(action.type).to.equal('FETCH_TODOS');
    return expect(action.payload).to.eventually.eql([]);
  });

  it('addTodo', () => {
    let action = addTodo({text: 'text'});
    expect(action.type).to.equal('ADD_TODO');
    return expect(action.payload).to.eventually.eql({ id: 1, text: 'text' });
  })

});
