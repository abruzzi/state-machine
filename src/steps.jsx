// import {Address, Good, Local, Oversea, Secret, NotBad} from './all.jsx'

// console.log(Address);

const steps = [
    {
        name: 'address',
        question: 'Where do you live?',
        answers: [
          {label: 'Local', value: 'local', next: import('./all.jsx').Local},
          {label: 'Oversea', value: 'oversea', next: import('./all.jsx').Oversea},
          {label: 'I dont want to tell', value: 'sceret', next: import('./all.jsx').Secret},
        ]
      },
      {
        name: 'howareyou',
        question: 'How are you?',
        answers: [
          {label: 'Good', value: 'good', next: import('./all.jsx').Good},
          {label: 'Not bad', value: 'not-bad', next: import('./all.jsx').NotBad},
          {label: 'Address', value: 'address', next: import('./all.jsx').Address}
        ]
      }
];

export default steps;