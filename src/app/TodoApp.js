
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
// import HelloWorld from '../helloworld/HelloWorld.jsx';
import ReduxProto from '../reduxproto/ReduxProto.jsx';

export default class TodoApp {

  constructor(elements) {
    ReactDOM.render(React.createElement(ReduxProto), elements);
  }

}
