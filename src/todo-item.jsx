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
        <input type='text' value={this.state.text} onChange={this.change.bind(this)} />
        <button type='button' onClick={this.handleDelete.bind(this)}>Delete</button>
      </li>
    );
  }

  change(event) {
    this.setState({text: event.target.value});
  }

  handleDelete() {
    // notify owner to delete this item
    if (this.props.onDelete != null) {
      this.props.onDelete(this.props.children.id)
    }
  }

}
