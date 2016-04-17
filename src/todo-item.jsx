'use strict';

import React from 'react';

export default class TodoItem extends React.Component {

  render() {
    return (
      <li>
        <input type='checkbox' />
        <input type='text' value={this.props.children.text} />
        <button type='button' onClick={this.delete.bind(this)}>Delete</button>
      </li>
    );
  }

  delete() {
    if (this.props.delete != null) {
      this.props.delete(this.props.children.id)
    }
  }

}
