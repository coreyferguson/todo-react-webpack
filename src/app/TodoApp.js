
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import CounterViewContainer from '../counter/CounterViewContainer.jsx';
import { store } from '../counter/Store';

export default class TodoApp {

  constructor(elements) {
    ReactDOM.render(React.createElement(CounterViewContainer, {store}), elements);
  }

}
