import actions from "./actions"

const defaultState = {
    count: 0
}

const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.UPDATE_COUNT: return {...state, count: action.payload}
        default: return state
    }
}

export default countReducer