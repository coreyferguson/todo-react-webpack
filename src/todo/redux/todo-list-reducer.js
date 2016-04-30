
'use strict';

import {
  ADD_TODO_REQUEST, ADD_TODO_RESPONSE,
  FETCH_TODOS_REQUEST, FETCH_TODOS_RESPONSE
} from './todo-list-actions';

export default (
  state = {
    isFetching: false,
    isAdding: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case FETCH_TODOS_RESPONSE:
      return Object.assign({}, state,
          { isFetching: false, items: [...action.todos] });
    case ADD_TODO_REQUEST:
      return Object.assign({}, state, { isAdding: true });
    case ADD_TODO_RESPONSE:
      return Object.assign({}, state, {
        isAdding: false,
        items: [
          ...state.items,
          action.todo
        ]
      });
    default:
      return state;
  }
}
