import * as services from '../services/services.js'

const GET_USER = 'GET_USER' 
const GET_USER_PENDING = 'GET_USER_PENDING'
const GET_USER_FULFILLED = 'GET_USER_FULFILLED'

let initialState = {
    loading: false,
    currentUser: ''
}

export default function reducer(state=initialState,action) {
    switch(action.type){

        case GET_USER_PENDING:
            return Object.assign({},state,{loading: true})
        case GET_USER_FULFILLED:
            return Object.assign({},state,{loading: false, dischargeData: action.payload})

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