
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './todo-app-reducer';
import TodoService from './todo-service';
import TodoContainer from './todo-container.jsx';

export default class TodoController {

  constructor(elements, store) {
    let todoComponent = React.createElement(TodoContainer);
    let provider = React.createElement(Provider, {
      store: createStore(reducer),
      children: todoComponent
    });
    ReactDOM.render(provider, elements);
  }

}
