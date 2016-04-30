
'use strict';

import React from 'react';
import { connect } from 'react-redux';
import View from './todo-view.jsx';
import { addTodo } from '../redux/todo-list-actions';

export default connect(
  ({todos}) => {
    return {
      todos
    }
  },
  dispatch => {
    return {
      onSubmit: (text) => {
        dispatch(addTodo({text}));
      }
    }
  }
)(View)
