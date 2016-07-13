
import React, {Component} from 'react';
import {createStore as createReduxStore} from 'redux';

export const ActionType = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

const initialState = {
  count: 0
};

export function reducer(state=initialState, action) {
  switch (action.type) {
    case ActionType.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case ActionType.DECREMENT:
      return Object.assign({}, state, {
        count: state.count -1
      });
    default:
      return state;
  }
}

export const createStore = () => {
  return createReduxStore(reducer);
}
