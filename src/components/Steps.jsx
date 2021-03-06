import React from 'react';
import makeQNA, {makeSimple} from '../utils/qna';

import NotBad from './NotBad'

import qnas from '../qnas.json';

const Local = () => (<div>
  <h2>Local</h2>
  <img src="https://media.giphy.com/media/VvHjhoD5WDyVy/giphy.gif" alt=""/>
</div>)

const Oversea = () => <h2>Oversea</h2>
const Secret = () => <h2>Secret</h2>

const HowAreYou = makeQNA('howareyou');
const Address = makeQNA('address');

const Good = makeSimple('good');

const routeToCompMap = {
  local: Local,
  oversea: Oversea,
  secret: Secret,
  good: Good,
  address: Address,
  notbad: NotBad
}

const assemble = (qnas, routeToCompMap) => {
  return qnas.filter(qna => qna.type === 'switch').map(qna => {
    const answers = qna.answers.map(answer => ({
      ...answer, next: routeToCompMap[answer.route]
    }));

    return {...qna, answers}
  })
};

const steps = assemble(qnas, routeToCompMap);

export default steps;

const EnhancedHowAreYou = ({history, match}) => (<div>
  <h1>Enhanced How Are You</h1>
  <HowAreYou history={history} match={match} />
</div>)
export {EnhancedHowAreYou};