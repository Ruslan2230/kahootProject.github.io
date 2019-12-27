import {createStore} from "react-redux";

const ACTIONS = {
    'ADD_NEW_USER': 'ADD_NEW_USER',
    'ADD_NEW_PINCODE': 'ADD_NEW_PINCODE',
    'ADD_NEW_NICK_NAME': 'ADD_NEW_NICK_NAME',
    'UPDATE_USERS': 'UPDATE_USERS',
    'DELETE_USER': 'DELETE_USER'
};

export default (state = {users: []}, action) => {
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
                users: [...state.users, {
                    pinCode: action.pinCode
                }]
            }
        }

        case ACTIONS.ADD_NEW_NICK_NAME: {
            return {
                users: [...state.users, {
                    nickName: action.nickName
                }]
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
};