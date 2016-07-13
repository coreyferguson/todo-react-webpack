
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../helloworld/HelloWorld.jsx';

export default class TodoApp {

  constructor(elements) {
    ReactDOM.render(React.createElement(HelloWorld), elements);
  }

}
