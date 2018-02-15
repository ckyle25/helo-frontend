import * as services from '../services/services.js'

const GET_USER = 'GET_USER' 
const GET_USER_PENDING = 'GET_USER_PENDING'
const GET_USER_FULFILLED = 'GET_USER_FULFILLED'
const GET_USER_REJECTED = 'GET_USER_REJECTED'
const LOGGED_IN = 'LOGGED_IN'
const LOGGED_IN_PENDING = 'LOGGED_IN_PENDING'
const LOGGED_IN_FULFILLED = 'LOGGED_IN_FULFILLED'
const LOGGED_IN_REJECTED = 'LOGGED_IN_REJECTED'

let initialState = {
    loading: false,
    currentUser: {}
}

export default function reducer(state=initialState,action) {
    function homeRedirect() {
        window.location = 'http://localhost:3000/'
        window.alert('Please login to access content')
    }
    switch(action.type){

        case GET_USER_PENDING:
            return Object.assign({},state,{loading: true})
        case GET_USER_FULFILLED:
            return Object.assign({},state,{loading: false, currentUser: action.payload})
        case GET_USER_REJECTED:
            return homeRedirect()
                    .then(window.alert('Please login to access content'))
        
        case LOGGED_IN_PENDING:
            return Object.assign({},state,{loading: true})
        case LOGGED_IN_FULFILLED:
            return Object.assign({},state,{loading: false})
        case LOGGED_IN_REJECTED:
            return homeRedirect()
                .then(window.alert('Please login to access content'))

        default:
            return state;
    }
}

export function getCurrentUser() {
    return {
        type: GET_USER,
        payload: services.getCurrentUser()
    }
}

export function isLoggedIn() {
    return {
        type: LOGGED_IN,
        payload: services.getCurrentUser()
    }
}