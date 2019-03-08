import React from 'react';

const Local = () => <h2>Local</h2>
const Oversea = () => <h2>Oversea</h2>
const Secret = () => <h2>Secret</h2>

const HowAreYou = makeQNA('howareyou');
const Address = makeQNA('address');

console.log(Address);

import Good from './good';
import NotBad from './notbad'

import makeQNA from './qna';

export {HowAreYou, Address, Good, Local, Oversea, Secret, NotBad};