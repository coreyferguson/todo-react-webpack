
'use strict';

import React from 'react';
import TodoList from './todo-list.jsx';

export default class TodoComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>todo</h1>
        <TodoList todos={this.props.todos} delete={this.delete.bind(this)} />
        <button type='button' onClick={this.add.bind(this)}>Add</button>
      </div>
    );
  }

  add(event) {
    if (this.props.add != null) {
      this.props.add();
    }
  }

  delete(id) {
    if (this.props.delete != null) {
      this.props.delete(id);
    }
  }

}
