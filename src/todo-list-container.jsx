'use strict';

import { connect } from 'react-redux';
import TodoList from './todo-list.jsx';

export default connect(
  ({todos}) => { return {todos} }
)(TodoList);
