const initialState = {
    nickName: '',
    compVisible: "w4"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'USER_CHANGE_NAME': {
            return {...state, nickName: action.nickName}
        }
        case 'ADD_NEW_ROOMID': {
            return {...state, roomID: action.roomID}
        }
        case 'ADD_COMPVISIBLE': {
            return {...state, compVisible: action.compVisible="w2"}
        }
        default : {
            return state
        }
    }
}

