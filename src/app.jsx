import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import HowAreYou from './howareyou';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <Route path='/qna' component={HowAreYou} />
        </div>
      </Router>
    )
  }
}

const app = document.querySelector('#app');

ReactDOM.render(<App />, app);