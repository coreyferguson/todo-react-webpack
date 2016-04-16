
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoComponent from './todo-component.jsx'

export default class TodoApp {
  constructor(elements) {
    this._component = React.createElement(TodoComponent);
    ReactDOM.render(this._component, elements);
  }
}
