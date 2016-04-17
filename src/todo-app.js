
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
    ReactDOM.render(
      React.createElement(TodoComponent, {
        todos: todos,
        add: this.add.bind(this),
        delete: this.delete.bind(this)
      }), this._elements);
  }

  initialize() {
    this.render([]); // render empty list immediately
    // fetch todos in parallel
    this._service.all().then(todos => {
      this.render(todos);
    }).catch(err => {
      console.error('error:', err);
    });
  }

  add() {
    this._service.add().then(() => {
      return this._service.all();
    }).then(todos => {
      this.render(todos);
    }).catch(err => {
      console.error('error:', err);
    });
  }

  delete(id) {
    this._service.delete(id).then(() => {
      return this._service.all();
    }).then(todos => {
      this.render(todos);
    }).catch(err => {
      console.error('error:', err);
    })
  }

}
