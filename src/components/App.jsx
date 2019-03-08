import React, {Component} from 'react';
import {Provider} from 'react-redux'

import {BrowserRouter as Router, Route,} from 'react-router-dom'

import configureStore from '../states/store';

import {HowAreYou} from './Steps';

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

export default App;