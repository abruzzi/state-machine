import React from 'react';
import ReactDOM from 'react-dom';

import promiseService from './index';

import { Machine, interpret } from 'xstate';

const toggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
});

class Toggle extends React.Component {
  state = {
    current: toggleMachine.initialState
  };

  service = interpret(toggleMachine).onTransition(current =>
    this.setState({ current })
  );

  componentDidMount() {
    this.service.start();
  }

  componentWillUnmount() {
    this.service.stop();
  }

  render() {
    const { current } = this.state;
    const { send } = this.service;

    console.log(current.value);
    return (
      <button onClick={() => send('TOGGLE')}>
        {current.matches('inactive') ? 'Off' : 'On'}
      </button>
    );
  }
}

class App extends React.Component {
    perform = () => {
        promiseService.send('RESOLVE');
    }

    render() {
        return (<div>
            <button onClick={() => this.perform()}>Click me</button>
        </div>)
    }
}

const app = document.querySelector('#app');

ReactDOM.render(<Toggle />, app);