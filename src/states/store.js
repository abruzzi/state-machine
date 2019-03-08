import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import root from './reducers/root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState={}) => {
 return createStore(
   root,
   initialState,
   composeEnhancers(applyMiddleware(thunk))
 );
}

export default configureStore;