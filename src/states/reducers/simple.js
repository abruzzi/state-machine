const initState = {
  data: 'hello'
}

const reducer = (state = initState, action) => {
  switch (action.type) {
   case 'SIMPLE':
    return {
     data: action.payload
    }
   default:
    return state
  }
 }
export default reducer;