import actions from "./actions"

const defaultState = {
    items: [0, 1]
}

const navReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.ADD_NAV_ITEM: {
            let arr = state.items
            return {...state, items: [...arr, arr[arr.length -1 ] + 1]}
        }
        default: return state
    }
}

export default navReducer