import React from 'react';
import makeQNA from './qna';

import Address from './address';

const Good = () => <h2>Good</h2>
const NotBad = () => <h2>Not bad</h2>

const howareyou = {
  name: 'howareyou',
  question: 'How are you?',
  answers: [
    {label: 'Good', value: 'good', next: Good},
    {label: 'Not bad', value: 'not-bad', next: NotBad},
    {label: 'Address', value: 'address', next: Address}
  ]
}

const HowAreYou = makeQNA(howareyou);

export default HowAreYou;