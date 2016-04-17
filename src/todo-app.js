
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoComponent from './todo-component.jsx';
import request from 'superagent';
import Promise from 'bluebird';

export default class TodoApp {

  constructor(elements) {
    this._elements = elements;
    this.render([]);
    this.initialize();
  }

  render(todos) {
    ReactDOM.render(React.createElement(TodoComponent, {todos: todos}), this._elements);
  }

  initialize() {
    this.getTodos().then(todos => {
      this.render(todos);
    }).catch(function(err) {
      console.error('error:', err);
    });
  }

  getTodos() {
    return new Promise((resolve, reject) => {
      resolve([
        { text: "todo-1" },
        { text: "todo-2" }
      ]);
    });
  }

}
