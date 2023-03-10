
import { SHOW_ALL_CONTACTS, ADD_NEW, EDIT_CONTACT, SHOW_CONTACT, DELETE_CONTACT, SEARCH } from '../actions/types'

const initialState = {
    contacts: [],
    contact:{}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_ALL_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }

        case SHOW_CONTACT:
            return {
                ...state,
                contact: action.payload
            }

        case ADD_NEW:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }

        case EDIT_CONTACT:
                return {
                ...state,
                contacts: state.contacts.map( user => user.id === action.payload.id ? (user = action.payload) : user )
            }

        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(user => user.id !== action.payload)
            }


            case SEARCH:
                return {
                    ...state,
                    contacts: action.payload 
                }

        default:
            return state
    }
}