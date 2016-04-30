
'use strict';

import { combineReducers } from 'redux';
import todos from './todo-list-reducer';

export default combineReducers({
  todos
});
