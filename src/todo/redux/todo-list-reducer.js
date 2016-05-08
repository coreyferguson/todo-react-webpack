
'use strict';

import {
  ADD_TODO_PENDING, ADD_TODO_FULFILLED,
  FETCH_TODOS_PENDING, FETCH_TODOS_FULFILLED
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
    case FETCH_TODOS_PENDING:
      return Object.assign({}, state, { isFetching: true });
    case FETCH_TODOS_FULFILLED:
      return Object.assign({}, state,
          { isFetching: false, items: [...action.payload] });
    case ADD_TODO_PENDING:
      return Object.assign({}, state, { isAdding: true });
    case ADD_TODO_FULFILLED:
      return Object.assign({}, state, {
        isAdding: false,
        items: [
          ...state.items,
          action.payload
        ]
      });
    default:
      return state;
  }
}
