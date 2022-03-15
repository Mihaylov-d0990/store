import { createStore, combineReducers} from "redux"
import countReducer from "./countReducer"
import listReducer from "./listReducer"
import { composeWithDevTools } from "redux-devtools-extension"

const rootReducer = combineReducers({
    count: countReducer,
    list: listReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
