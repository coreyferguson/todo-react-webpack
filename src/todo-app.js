
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

  initialize() {
    this._component = ReactDOM.render(
      React.createElement(TodoComponent, {
        todos: [],
        onAdd: this.handleAdd.bind(this),
        onDelete: this.handleDelete.bind(this)
      }), this._elements);
    // fetch todos in parallel
    this._service.all().then(todos => {
      this._component.setTodos(todos);
    }).catch(err => {
      console.error('error:', err);
    });
  }

  handleAdd() {
    this._service.add().then(() => {
      return this._service.all();
    }).then(todos => {
      this._component.setTodos(todos);
    }).catch(err => {
      console.error('error:', err);
    });
  }

  handleDelete(id) {
    this._service.delete(id).then(() => {
      return this._service.all();
    }).then(todos => {
      this._component.setTodos(todos);
    }).catch(err => {
      console.error('error:', err);
    })
  }

}
