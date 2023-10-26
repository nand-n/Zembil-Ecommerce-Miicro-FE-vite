import * as actionTypes from './cartActionTypes'

const initialState ={
    cart_error:null,
    cart_loading:false,
    carts:[],
    cart_single:{}
}

const cartStart = (state , action )=>{
    return {
        ...state,
        cart_error:null,
        cart_loading:true,
    }
}

const cartsGetSuccess= (state,action )=>{
    return {
        ...state , 
        carts:action.data,
        cart_error:null,
        cart_loading:false
    }
}

const cartGetSuccess= (state,action )=>{
    return {
        ...state , 
        cart_single:action.data,
        cart_error:null,
        cart_loading:false
    }
}
const cartUpdateSuccess= (state,action )=>{
    return {
        ...state , 
        cart_single:action.data,
        cart_error:null,
        cart_loading:false
    }
}
const cartDeleteSuccess= (state,action )=>{
    return {
        ...state , 
        cart_single:action.data,
        cart_error:null,
        cart_loading:false
    }
}

const cartFail = (state,action)=>{
    return {
        ...state,
        cart_error:null,
        cart_loading:false
    }
}

export const cartReducer = (state = initialState , action)=>{
    switch (action.type){
        case actionTypes.CART_START:
            return cartStart(state,action)
        case actionTypes.CARTS_GET:
            return cartsGetSuccess(state,action)
        case actionTypes.CART_GET:
            return cartGetSuccess(state,action)
        case actionTypes.CART_UPDATE:
            return cartUpdateSuccess(state,action)
        case actionTypes.CART_DELETE:
            return cartDeleteSuccess(state,action)
        case actionTypes.CART_FAIL:
            return cartFail(state,action)
        default:
            return state
    }
}