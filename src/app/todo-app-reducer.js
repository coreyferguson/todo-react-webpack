
'use strict';

import { combineReducers } from 'redux';
import todos from '../todo/redux/todo-list-reducer';

export default combineReducers({
  todos
});
