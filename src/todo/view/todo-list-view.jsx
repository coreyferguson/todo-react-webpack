
'use strict';

import React from 'react';
import TodoItem from './todo-item-view.jsx';

export default ({items}) => {
  const todoItems = items.map(
    (todo, index) => <TodoItem key={index}>{todo.text}</TodoItem>);
  return ( <ul>{todoItems}</ul> );
};
