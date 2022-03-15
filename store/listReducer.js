import actions from "./actions"

let arr = []
for (let i = 0; i < 10; i++) {
    arr[i] = {
        id: i,
        name: "Obi belt",
        price: "19",
        itemImage: "/images/image.jpg",
        imageAlt: `Obi belt${i}`,
        quantity: 1
    }
}

const defaultState = {
    list: arr
}

const listReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.UPDATE_LIST: return {...state, list: action.payload}
        default: return state
    }
}

export default listReducer