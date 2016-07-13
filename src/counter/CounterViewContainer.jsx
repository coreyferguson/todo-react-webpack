
import React, { Component } from 'react';
import CounterView from './CounterView.jsx';
import ActionTypes from './CounterActionTypes';

export default class CounterViewContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.onChange = this.onChange.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
  }

  componentDidMount() {
    this.props.store.subscribe(this.onChange);
  }

  onChange() {
    this.setState(this.props.store.getState());
  }

  render() {
    return (
      <CounterView
        counter={this.state.counter}
        onIncrement={this.onIncrement} />
    );
  }

  onIncrement() {
    this.props.store.dispatch({
      type: ActionTypes.INCREMENT
    });
  }

}

CounterViewContainer.propTypes = {
  store: React.PropTypes.object
}
