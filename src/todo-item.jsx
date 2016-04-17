'use strict';

import React from 'react';

export default class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.children.text
    }
  }

  render() {
    return (
      <li>
        <input type='checkbox' />
        <input type='text' value={this.state.text} onChange={this.change.bind(this)} />
        <button type='button' onClick={this.delete.bind(this)}>Delete</button>
      </li>
    );
  }

  change(event) {
    this.setState({text: event.target.value});
  }

  delete() {
    if (this.props.delete != null) {
      this.props.delete(this.props.children.id)
    }
  }

}
