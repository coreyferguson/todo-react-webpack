
'use strict';

import React from 'react';
import TodoList from './todo-list.jsx';

export default class TodoComponent extends React.Component {

  render() {
    return (
      <div>
        <h1>todo</h1>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }

}
