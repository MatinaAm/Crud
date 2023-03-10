import { SHOW_ALL_CONTACTS, ADD_NEW, EDIT_CONTACT, SHOW_CONTACT, DELETE_CONTACT, SEARCH } from './types'

import axios from 'axios'



export const showAllContacts = () => async dispatch => {  //RETRIEVE
    
    const result = await axios.get('http://localhost:5000/contacts')

    dispatch({
        type: SHOW_ALL_CONTACTS,
        payload: result.data
    })
}

export const showContact = id => async dispatch => {  //RETRIEVE ONE
    
    const result = await axios.get(`http://localhost:5000/contacts/${id}`)


    dispatch({
        type: SHOW_CONTACT,
        payload: result.data
    })
}


export const deleteAContact = id => async dispatch => {  //DELETE
    if(typeof(id) !== 'number') throw TypeError('id is not an number')

    await axios.delete(`http://localhost:5000/contacts/${id}`)


    dispatch({
        type: DELETE_CONTACT,
        payload: id
    })
}

export const editUser = user => async dispatch => {    //UPDATE


    const result = await axios.patch(`http://localhost:5000/contacts/${user.id}`, user)


    dispatch({
        type: EDIT_CONTACT,
        payload: result.data
    })
}

export const addNew = user => async dispatch => {  //CREATE MORE
    if(typeof(user) !== 'object') throw TypeError('new user is not an object')

    const result = await axios.post('http://localhost:5000/contacts', user)

    dispatch({
        type: ADD_NEW,
        payload: result.data
    })
}






export const searchFunction= (searchTerm) => async dispatch => {  

   

    let result 

    if(searchTerm?.length > 0 ){
        result = await axios.get(`http://localhost:5000/contacts?firstName=${searchTerm}`)

    }
    else{
        result = await axios.get(`http://localhost:5000/contacts`)

    }

    dispatch({
        type: SEARCH,
        payload: result.data 
    })
}



