
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoService from './todo-service';
import TodoComponent from './todo-component.jsx';

export default class TodoApp {

  constructor(elements) {
    this._elements = elements;
    this._service = new TodoService();
    this.initialize();
  }

  render(todos) {
    ReactDOM.render(React.createElement(TodoComponent, {todos: todos}), this._elements);
  }

  initialize() {
    this.render([]); // render empty list immediately
    // fetch todos in parallel
    this._service.all().then(todos => {
      this.render(todos);
    }).catch(function(err) {
      console.error('error:', err);
    });
  }

}
