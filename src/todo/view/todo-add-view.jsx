
'use strict';

import React from 'react';

export default class TodoAddView extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.onAdd === undefined || this.props.onAdd === null) {
      throw new Error('`onAdd` callback must be defined');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input ref='input' type='text' disabled={this.props.disabled} />
        <button type='submit'> Add </button>
      </form>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this._shouldFocusAddTodoTextWhenEnabled = true;
    this.props.onAdd({ text: this.refs.input.value });
    this.refs.input.value = '';
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.disabled && this._shouldFocusAddTodoTextWhenEnabled) {
      this._shouldFocusAddTodoTextWhenEnabled = false;
      this.refs.input.focus();
    }
  }

}
