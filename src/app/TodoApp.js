
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CounterViewContainer from '../counter/CounterViewContainer.jsx';
import { store } from '../counter/Store';

export default class TodoApp {

  constructor(elements) {
    const children = React.createElement(CounterViewContainer);
    const provider = React.createElement(Provider, { store, children });
    ReactDOM.render(provider, elements);
  }

}
