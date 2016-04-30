'use strict';

import React from 'react';

export default class TodoItemView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.children.text
    }
  }

  render() {
    return (
      <li>
        <input type='text' value={this.state.text} onChange={this.change.bind(this)} />
      </li>
    );
  }

  change(event) {
    this.setState({text: event.target.value});
  }

}
