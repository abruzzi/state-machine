import React from 'react';
import makeQNA from '../utils/qna';

import Good from './Good';
import NotBad from './NotBad'

import qnas from './qnas.json';

const Local = () => <h2>Local</h2>
const Oversea = () => <h2>Oversea</h2>
const Secret = () => <h2>Secret</h2>

const HowAreYou = makeQNA('howareyou');
const Address = makeQNA('address');

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

export {HowAreYou};