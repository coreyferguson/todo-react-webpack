
'use strict';

import React from 'react';
import TodoListContainer from './todo-list-container.jsx';
import './todo-component.scss';

export default class TodoContainer extends React.Component {

  render() {
    const store = this.context.store;
    return (
      <div className='todo-component'>
        <h1>todo</h1>
        <TodoListContainer />
        <button
            type='button'
            onClick={() => store.dispatch({ type: 'ADD', todo: {} }) }>
          Add
        </button>
      </div>
    );
  }

}

TodoContainer.contextTypes = {
    store: React.PropTypes.object
};
