
'use strict';

import React from 'react';
import TodoList from './todo-list.jsx';
import './todo-component.scss';

export default class TodoComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='todo-component'>
        <h1>todo</h1>
        <TodoList
            todos={this.props.todos}
            onDelete={this.handleDelete.bind(this)}
            ref='todoList' />
        <button type='button' onClick={this.add.bind(this)}>Add</button>
      </div>
    );
  }

  setTodos(todos) {
    this.refs.todoList.setTodos(todos);
  }

  add(event) {
    if (this.props.onAdd != null) {
      this.props.onAdd();
    }
  }

  handleDelete(id) {
    // notify owner of deletion (to trigger business logic)
    if (this.props.onDelete != null) {
      this.props.onDelete(id);
    }
  }

}
