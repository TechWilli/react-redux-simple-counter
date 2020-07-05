import CounterReducer from './Counter';
import IsLoggedReducer from './IsLogged';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: CounterReducer,
    isLogged: IsLoggedReducer,
});

export default rootReducer;