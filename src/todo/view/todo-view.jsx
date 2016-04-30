
'use strict'

import React from 'react';
import TodoList from './todo-list-container.jsx';
import './todo.scss';

export default ({onClick}) => {
  return (
    <div className='todo-component'>
      <h1>todo</h1>
      <TodoList />
      <button type='button' onClick={onClick}> Add </button>
    </div>
  );
}
