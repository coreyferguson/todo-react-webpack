
'use strict'

import React from 'react';
import TodoListContainer from './todo-list-container.jsx';
import './todo-component.scss';

export default ({onClick}) => {
  return (
    <div className='todo-component'>
      <h1>todo</h1>
      <TodoListContainer />
      <button type='button' onClick={onClick}> Add </button>
    </div>
  );
}
