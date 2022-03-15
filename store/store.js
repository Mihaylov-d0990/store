import { createStore, combineReducers} from "redux"
import countReducer from "./countReducer"
import listReducer from "./listReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import cartReducer from "./cartReducer"

const rootReducer = combineReducers({
    count: countReducer,
    list: listReducer,
    cart: cartReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
