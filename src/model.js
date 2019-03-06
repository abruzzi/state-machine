import _ from 'lodash';

const state = {
  start: {
    current: 'start',
    fields: [
      {
        type: 'radioGroup',
        meta: {
          question: 'How are you?',
          answers: [
            { label: 'Good', value: 'good', link: 'address' },
            { label: 'Not bad', value: 'mild', link: 'phone' }
          ]
        }
      }
    ]
  },
  address: {
    current: 'address',
    fields: [
      {
        type: 'radioGroup',
        meta: {
          question: 'Local number',
          answers: [
            { label: 'Yes', value: 'yes', link: 'done' },
            { label: 'No', value: 'no', link: 'done' }
          ]
        }
      }
    ]
  },
  done: {
    fields: []
  }
}

_.each(state, (value, key) => {
  _.each(value.fields, )
})

const meta = [
  {
    name: 'start',
    question: 'How are you?',
    answers: [
      { label: 'Good', value: 'good', link: 'address' },
      { label: 'Not bad', value: 'mild', link: 'phone' }
    ]
  },
  {
    name: 'phone',
    question: 'Local number',
    answers: [
      { label: 'Yes', value: 'yes', link: 'done' },
      { label: 'No', value: 'no', link: 'done' }
    ]
  },
  {
    name: 'address',
    question: 'Address?',
    answers: [
      { label: 'Local', value: 'local', link: 'done' },
      { label: 'Oversea', value: 'oversea', link: 'done' }
    ]
  },
  {
    name: 'done',
  }
];

meta.map((m) => (
  <div>
    <h2>{m.question}?</h2>
    <ul>
      {m.answers.map(a => <Link to={`${m.name}/${a.next}`}>a.label</Link>)}
    </ul>
    <Route path={} component={}></Route>
  </div>
));