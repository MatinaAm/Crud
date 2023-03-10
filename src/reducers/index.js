import { combineReducers } from 'redux' //to put together reducers we'll use
import contactsReducer from './contactsReducer'
import userReducer  from './userReducer'


export default combineReducers({
    contacts: contactsReducer,
    user:userReducer
})