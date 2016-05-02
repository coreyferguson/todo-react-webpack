
'use strict';

import { connect } from 'react-redux';
import View from './todo-add-view.jsx';
import { addTodo } from '../redux/todo-list-actions';
import TodoAdd from './todo-add-container.jsx';

export default connect(
  store => {
    return {
      disabled: store.todos.isAdding
    }
  },
  dispatch => {
    return {
      onAdd: todo => {
        dispatch(addTodo(todo));
      }
    }
  }
)(View);
