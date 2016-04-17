'use strict';

import React from 'react';
import TodoItem from './todo-item.jsx';

export default class TodoList extends React.Component {

  render() {
    let todoItems = this.props.todos.map(
      todo => <TodoItem key={todo.text}>{todo.text}</TodoItem>);
    return (
      <ul>
        {todoItems}
      </ul>
    );
  }

}
