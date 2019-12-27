const initialState = {
    questions:[]
};


const ACTIONS = {
    'SET_QUESTIONS': 'SET_QUESTIONS'

};


export default (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.SET_QUESTIONS:  {

            return [...state,{questions: action.questions}]
        }
        default: {return state}
    }

};