
'use strict';

import React from 'react';
import TodoItem from './todo-item.jsx';

export default ({todos}) => {
  const todoItems = todos.map(
    (todo, index) => <TodoItem key={index}>{todo}</TodoItem>);
  return ( <ul>{todoItems}</ul> );
};
