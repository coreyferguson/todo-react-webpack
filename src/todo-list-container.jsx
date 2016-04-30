'use strict';

import React from 'react';
import TodoItem from './todo-item.jsx';

export default class TodoListContainer extends React.Component {

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const todos = this.context.store.getState().todos;
    const todoItems = todos.map(
      (todo, index) => <TodoItem key={index}>{todo}</TodoItem>);
    return ( <ul>{todoItems}</ul> );
  }

}

TodoListContainer.contextTypes = {
    store: React.PropTypes.object
};
