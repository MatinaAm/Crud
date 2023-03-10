import * as redux from "redux";
import thunk from 'redux-thunk';
export const GET_USERS = 'getUsers';
export const REMOVE_ALL_USERS = 'removeAllUsers';
export const REMOVE_USER = 'removeUser';

const getUsers = () => {
  return [];
}

const initializeUsers = {
  users: []
}

const userReducer = (state = initializeUsers, action) => {
  switch (action.type) {
    case GET_USERS : {
        return { ...state, users: action.data};
    }
    case REMOVE_ALL_USERS : {
        return {...state, users: []};
    }
    case REMOVE_USER : {
        const userIndex = action.value;
        const userDetails = [...state.users];
        userDetails.splice(userIndex, 1);
        return {...state, users: userDetails};
    }
    default: return state;
  }
}

const store = redux.createStore(userReducer, redux.applyMiddleware(thunk));

export default store;