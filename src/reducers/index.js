import { combineReducers } from 'redux'
import historyReducer from './history'

const rootReducer = combineReducers({
    table: historyReducer
})

export default rootReducer;