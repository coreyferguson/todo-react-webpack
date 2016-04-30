
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import reducer from './todo-app-reducer';
import Todo from '../todo/view/todo-container.jsx';
import { fetchTodos } from '../todo/redux/todo-list-actions';

export default class TodoApp {

  constructor(elements) {
    const loggerMiddleware = createLogger()
    const children = React.createElement(Todo);
    const store = createStore(
      reducer,
      applyMiddleware(
        thunkMiddleware // lets us dispatch() functions
        // loggerMiddleware // neat middleware that logs actions
      )
    );
    const provider = React.createElement(Provider, { store, children });
    ReactDOM.render(provider, elements);
    store.dispatch(fetchTodos());
  }

}
