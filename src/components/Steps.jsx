import React from 'react';
import makeQNA from '../utils/qna';

import Good from './Good';
import NotBad from './NotBad'

const Local = () => <h2>Local</h2>
const Oversea = () => <h2>Oversea</h2>
const Secret = () => <h2>Secret</h2>

export const HowAreYou = makeQNA('howareyou');
const Address = makeQNA('address');

const qnas = [
  {
    name: 'address',
    question: 'Where do you live?',
    answers: [
      {label: 'Local', value: 'local', route: 'local'},
      {label: 'Oversea', value: 'oversea', route: 'oversea'},
      {label: 'I dont want to tell', value: 'dont-tell', route: 'secret'},
    ]
  },
  {
    name: 'howareyou',
    question: 'How are you?',
    answers: [
      {label: 'Good', value: 'good', route: 'good'},
      {label: 'Not bad', value: 'not-bad', route: 'notbad'},
      {label: 'Address', value: 'address', route: 'address'}
    ]
  }
];

const routeToCompMap = {
  local: Local,
  oversea: Oversea,
  secret: Secret,
  good: Good,
  address: Address,
  notbad: NotBad
}

const assemble = (qnas, routeToCompMap) => {
  return qnas.map(qna => {
    const answers = qna.answers.map(answer => ({
      ...answer, next: routeToCompMap[answer.route]
    }));

    return {...qna, answers}
  })
};

const steps = assemble(qnas, routeToCompMap);

export default steps;