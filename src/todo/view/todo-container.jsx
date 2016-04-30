
'use strict';

import React from 'react';
import { connect } from 'react-redux';
import View from './todo-view.jsx';

export default connect(
  null,
  (dispatch) => {
    return {
      onClick: () => {
        dispatch({ type: 'ADD', todo: {} });
      }
    }
  }
)(View)
