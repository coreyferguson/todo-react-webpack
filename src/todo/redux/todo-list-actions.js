
'use strict';

import TodoService from '../service/todo-service';

const todoService = new TodoService();

const PENDING = '_PENDING';
const FULFILLED = '_FULFILLED';

/////////////////
// Fetch todos //
/////////////////

const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_PENDING = FETCH_TODOS + PENDING;
export const FETCH_TODOS_FULFILLED = FETCH_TODOS + FULFILLED;

export function fetchTodos() {
  return {
    type: FETCH_TODOS,
    payload: todoService.all()
  };
}

//////////////
// Add todo //
//////////////

const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_PENDING = 'ADD_TODO_PENDING';
export const ADD_TODO_FULFILLED = 'ADD_TODO_FULFILLED';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todoService.add(todo)
  };
}
