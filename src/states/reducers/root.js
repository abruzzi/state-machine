import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import simple from './simple';

export default combineReducers({
    simple,
    form: formReducer
});