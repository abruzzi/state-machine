import { Machine, interpret } from 'xstate';

const form = [
  {
    id: '1',
    type: 'question',
    name: 'type',
    meta: {
      question: 'Type?',
      options: [
        {label: 'Buy a property', value: 'buy'},
        {label: 'Refinanacing', value: 'refinanacing'}
      ]
    }
  },
  {
    id: '2',
    type: 'input',
    name: 'price',
    meta: {
      label: 'price'
    }
  }
];

const submission = {
  type: 'buy',
  price: '10000'
};

const event = Machine({
    id: 'event',
    initial: 'start',
    states: {
        start: {
            on: {
                BUY: 'buy',
                REFINANCING: 'refinancing'
            }
        },
        buy: {
            on: {
                STILL_LOOKING: 'looking',
                PURCHASE: 'purchase'
            }
        },
        looking: {
        },
        purchase: {
        },
        houseOrApartment: {
          on: {
            HOUSE: '',
            APARTMENT: ''
          }
        },
        new: {
          type: 'final'
        },
        existing: {
          type: 'final'
        }
    }
})

const promiseMachine = Machine({
  id: 'promise',
  initial: 'pending',
  states: {
    pending: {
      on: {
        RESOLVE: 'resolved',
        REJECT: 'rejected'
      }
    },
    resolved: {
      type: 'final'
    },
    rejected: {
      type: 'final'
    }
  }
});

const promiseService = interpret(promiseMachine).onTransition(state => console.log(state.value));
promiseService.start()

export default promiseService;