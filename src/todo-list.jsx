'use strict';

import React from 'react';
import TodoItem from './todo-item.jsx';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    }
  }

  render() {
    let todoItems = this.state.todos.map(
      todo => <TodoItem key={todo.id} onDelete={this.handleDelete.bind(this)}>{todo}</TodoItem>);
    return (
      <ul>
        {todoItems}
      </ul>
    );
  }

  setTodos(todos) {
    this.setState({todos: todos});
  }

  handleDelete(id) {
    // immediately remove todo on frontend
    let todos = this.state.todos;
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        todos.splice(index, 1);
      }
    });
    this.setTodos(todos);
    // notify owner of deletion (to trigger business logic)
    if (this.props.onDelete != null) {
      this.props.onDelete(id);
    }
  }

}
