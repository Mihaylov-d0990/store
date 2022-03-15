import actions from "./actions"

const defaultState = {
    cart: []
}

const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.UPDATE_CART: return {...state, cart: action.payload}
        default: return state
    }
}

export default cartReducer