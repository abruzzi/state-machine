import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import {HowAreYou} from './all';

import configureStore from './store';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <div style={{width: 1000, margin: '0 auto'}}>
            <Route path='/qna' component={HowAreYou} />
          </div>
        </Router>
      </Provider>
    )
  }
}

const app = document.querySelector('#app');

ReactDOM.render(<App />, app);