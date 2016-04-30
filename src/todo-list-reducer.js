
'use strict';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [... state, action.todo];
    default:
      return state;
  }
}
