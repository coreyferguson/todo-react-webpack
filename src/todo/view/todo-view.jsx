
'use strict'

import React from 'react';
import Loading from '../../util/loading-view.jsx';
import TodoList from './todo-list-container.jsx';
import TodoAdd from './todo-add-container.jsx';
import './todo.scss';

export default ({todos}) => {
  return (
    <div className='todo-component'>
      <h1>todo</h1>
      <Loading>{ todos.isFetching || todos.isAdding }</Loading>
      <TodoList />
      <TodoAdd />
    </div>
  );
}
