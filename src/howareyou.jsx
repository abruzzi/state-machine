import makeQNA from './qna';
import { byName } from './steps';

const HowAreYou = makeQNA(byName('howareyou'));

export default HowAreYou;