import React from 'react';
import ReactDOM from 'react-dom';

import promiseService from './index';

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

ReactDOM.render(<App />, app);