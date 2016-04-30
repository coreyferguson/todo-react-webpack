
'use strict';

import TodoService from '../service/todo-service';

const todoService = new TodoService();

/////////////////
// Fetch todos //
/////////////////

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
function fetchTodosRequest() {
  return {
    type: FETCH_TODOS_REQUEST
  };
}

export const FETCH_TODOS_RESPONSE = 'FETCH_TODOS_RESPONSE';
function fetchTodosResponse(todos) {
  return {
    type: FETCH_TODOS_RESPONSE,
    todos
  };
}

export function fetchTodos() {
  return dispatch => {
    dispatch(fetchTodosRequest());
    return todoService.all().then(todos => {
      dispatch(fetchTodosResponse(todos));
      return todos;
    });
  }
}

//////////////
// Add todo //
//////////////

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
function addTodoRequest(todo) {
  return {
    type: ADD_TODO_REQUEST,
    todo
  }
}

export const ADD_TODO_RESPONSE = 'ADD_TODO_RESPONSE';
function addTodoResponse(todo) {
  return {
    type: ADD_TODO_RESPONSE,
    todo
  }
}

export function addTodo(todo) {
  return dispatch => {
    dispatch(addTodoRequest(todo));
    return todoService.add(todo).then(newTodo => {
      dispatch(addTodoResponse(newTodo));
      return newTodo;
    });
  }
}
