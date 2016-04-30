
'use strict';

import { fetchTodos, addTodo } from '../../src/todo/redux/todo-list-actions';
import deepFreeze from 'deep-freeze';

describe('unit test todo-list-actions', () => {

  it('fetchTodos', () => {
    const spy = sinon.spy();
    const callback = fetchTodos();
    return callback(spy).then(() => {
      return expect(spy).to.have.been.calledTwice;
    });
  });

  it('addTodo', () => {
    const spy = sinon.spy();
    const callback = addTodo({text: 'text'});
    return callback(spy).then(() => {
      return [
        expect(spy).to.have.been.calledTwice
      ];
    });
  })

});
