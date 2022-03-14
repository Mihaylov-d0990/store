import { createStore, combineReducers} from "redux"
import countReducer from "./countReducer"
import navReducer from "./navReducer"
import { composeWithDevTools } from "redux-devtools-extension"

const rootReducer = combineReducers({
    count: countReducer,
    nav: navReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
