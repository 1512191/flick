import tagReducer from './Tag';
import listReducer from './ListPhoto'
import { combineReducers } from 'redux'
const appReducer = combineReducers({
    tagReducer,
    listReducer
})
export default appReducer;