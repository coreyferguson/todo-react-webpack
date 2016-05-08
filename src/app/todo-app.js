
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLoggerMiddleware from 'redux-logger'
import createPromiseMiddleware from 'redux-promise-middleware';
import reducer from './todo-app-reducer';
import Todo from '../todo/view/todo-container.jsx';
import { fetchTodos } from '../todo/redux/todo-list-actions';

export default class TodoApp {

  constructor(elements) {
    const loggerMiddleware = createLoggerMiddleware();
    const promiseMiddleware = createPromiseMiddleware();
    const children = React.createElement(Todo);
    const store = createStore(
      reducer,
      applyMiddleware(
        loggerMiddleware, // neat middleware that logs actions
        promiseMiddleware
      )
    );
    const provider = React.createElement(Provider, { store, children });
    ReactDOM.render(provider, elements);
    store.dispatch(fetchTodos());
  }

}
