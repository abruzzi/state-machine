import React from 'react';
import makeQNA from './qna';

const Local = () => <h2>Local</h2>
const Oversea = () => <h2>Oversea</h2>
const Secret = () => <h2>Secret</h2>

const address = {
    name: 'address',
    question: 'Where do you live?',
    answers: [
      {label: 'Local', value: 'local', next: Local},
      {label: 'Oversea', value: 'oversea', next: Oversea},
      {label: 'I dont want to tell', value: 'sceret', next: Secret},
    ]
  }
  
const Address = makeQNA(address);

export default Address; 