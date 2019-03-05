const state = {
  start: {
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
    fields: [
      {
        type: 'text',
        meta: {
          name: 'address'
        }
      },
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
    
  }
}