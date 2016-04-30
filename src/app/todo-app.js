
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './todo-app-reducer';
import Todo from '../todo/view/todo-container.jsx';

export default class TodoApp {

  constructor(elements, store) {
    let todoContainer = React.createElement(Todo);
    let provider = React.createElement(Provider, {
      store: createStore(reducer),
      children: todoContainer
    });
    ReactDOM.render(provider, elements);
  }

}
