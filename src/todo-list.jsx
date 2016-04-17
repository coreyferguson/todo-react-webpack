'use strict';

import React from 'react';
import TodoItem from './todo-item.jsx';

export default class TodoList extends React.Component {

  render() {
    let todoItems = this.props.todos.map(
      todo => <TodoItem key={todo.id} delete={this.delete.bind(this)}>{todo}</TodoItem>);
    return (
      <ul>
        {todoItems}
      </ul>
    );
  }

  delete(id) {
    if (this.props.delete != null) {
      this.props.delete(id);
    }
  }

}
