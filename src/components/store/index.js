import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import currentUserReducer from './currentUser'
import usersReducer from './users';
import questions from './questions';

const store = createStore(combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer,
    questions: questions
})
    ,composeWithDevTools()
);

export default store;