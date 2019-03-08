import makeQNA from './qna';
import {byName} from './steps';

const Address = makeQNA(byName('address'));

export default Address;