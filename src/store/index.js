import { combineReducers, createStore, applyMiddleware, compose  } from 'redux';
import usersReducer from '../reducers/users';
import promise from 'redux-promise'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ usersReducer: usersReducer });
//const store = createStore(rootReducer);
const store = compose(applyMiddleware(thunk)(createStore)(rootReducer));
export default store;

