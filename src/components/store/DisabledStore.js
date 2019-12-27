import { createStore, combineReducers } from 'redux';

const initialState = {};

const ACTIONS = {
    'ADD_NEW_USER': 'ADD_NEW_USER',
    'ADD_NEW_PINCODE': 'ADD_NEW_PINCODE',
    'UPDATE_USERS': 'UPDATE_USERS',
    'DELETE_USER': 'DELETE_USER'
};

const store = createStore( (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_NEW_USER: {
            return {
                users: [...state.users, {
                    login: action.login,
                    password: action.password,
                    email: action.email
                }]
            }
        }
        case ACTIONS.ADD_NEW_PINCODE: {
            return {
                pinCode: action.pinCode
            }
        }

        case ACTIONS.UPDATE_USERS: {
            return {
                users: action.users
            }
        }

        case ACTIONS.DELETE_USER: {
            return {
                users: [...state.users.filter(user => action.id !== user.id)]
            }
        }

        default: return state;
    }
});

export default store;