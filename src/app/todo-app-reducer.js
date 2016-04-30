
'use strict';

import { combineReducers } from 'redux';
import todos from '../todo/reducer/todo-list-reducer';

export default combineReducers({
  todos
});
