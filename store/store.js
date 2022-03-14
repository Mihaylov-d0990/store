import { createStore, combineReducers} from "redux"
import countReducer from "./countReducer"
import { composeWithDevTools } from "redux-devtools-extension"

const rootReducer = combineReducers({
    count: countReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
