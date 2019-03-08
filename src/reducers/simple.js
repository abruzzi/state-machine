export default (state = {}, action) => {
    switch (action.type) {
     case 'SIMPLE':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }