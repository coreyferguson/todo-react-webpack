
'use strict'

import React from 'react';
import TodoList from './todo-list-container.jsx';
import './todo.scss';

export default class TodoView extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.onSubmit === undefined || this.props.onSubmit === null) {
      throw new Error('`onSubmit` callback must be defined');
    }
    this.state = {
      addTodoText: ''
    };
  }

  render() {
    return (
      <div className='todo-component'>
        <h1>todo</h1>

        <div
          style={{
            display:
              (this.props.todos.isFetching || this.props.todos.isAdding)
              ? 'inline-block'
              : 'none'
          }}
        >
          Loading...
        </div>

        <TodoList />

        <form onSubmit={this.handleAddTodoSubmit.bind(this)}>
          <input
            type='text'
            value={this.state.addTodoText}
            onChange={this.handleAddTodoText.bind(this)}
            disabled={this.props.todos.isAdding}
            ref='addTodoText'
          />
          <button type='submit'> Add </button>
        </form>

      </div>
    );
  }

  handleAddTodoText(event) {
    this.setState({addTodoText: event.target.value});
  }

  handleAddTodoSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.addTodoText);
    this.setState({
      addTodoText: ''
    });
    this._shouldFocusAddTodoTextWhenComplete = true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.todos.isAdding && this._shouldFocusAddTodoTextWhenComplete) {
      this._shouldFocusAddTodoTextWhenComplete = false;
      this.refs.addTodoText.focus();
    }
  }

}

