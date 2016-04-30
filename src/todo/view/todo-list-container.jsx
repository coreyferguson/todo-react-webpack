'use strict';

import { connect } from 'react-redux';
import TodoListView from './todo-list-view.jsx';

export default connect(
  (state) => state.todos
)(TodoListView);
