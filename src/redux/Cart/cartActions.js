import axios from 'axios'
import * as actionTypes from './cartActionTypes'
import { URLst } from '../../constants/index'
import { errorMessage, successMessage } from '../Messages/messagesAction'

export const cartStart =()=>{
    return {
        type:actionTypes.cart_START,
    }
}

export const cartSuccess=(data)=>{
    return {
        type:actionTypes.CARTS_GET,
        data:data
    }
}

export const cartFail=(error)=>{
    return {
        type:actionTypes.CART_FAIL,
        error:error
    }
}

export const cartSingle=(data)=>{
    return {
        type:actionTypes.CART_GET,
        data:data
    }
}


export const cartDeletSuccess = (data)=>{
    return {
        type:actionTypes.CART_DELETE,
        data:data
    }
}

export const cartCreateSuccess=(data)=>{
    return {
        type:actionTypes.CART_CREATE,
        data:data
    }
}

export const cartUpdateSuccess=(data)=>{
    return {
        type:actionTypes.CART_UPDATE,
        data:data
    }
}
export const getcartList=()=>{
    return (dispatch)=>{
        dispatch(cartStart())
        axios({
            method:'get',
            url:URLst+'carts'
        })
        .then((res)=>{
            dispatch(cartSuccess(res.data))
        })
        .catch((err)=>{
            var errorData;
            console.log(err.response);
            if (err.response != null) {
              errorData = err.response.status;
            } else {
              errorData = err.message;
            }
            dispatch(cartFail(errorData))
        })
    }
}

export const getSinlgecart= (id)=>{
    
    return (dispatch)=>{
        dispatch(cartStart)
        axios({
            method:'get',
            url:URLst+'carts/'+id
        })
        .then((res)=>{
            dispatch(cartSingle(res.data))
        })
        .catch((err)=>{
            var errorData;
        console.log(err.response);
        if (err.response != null) {
          errorData = err.response.status;
        } else {
          errorData = err.message;
        }
        dispatch(cartFail(errorData))
        })
    }
}

export const deletecart =(id,allcarts=[])=>{

    return (dispatch)=>{
       
        dispatch(cartStart())
        axios({
            method:"delete",
            url:URLst+ id,
        })
        .then((res)=>{
           
            console.log("cartS_DELETE" , res.data);
            dispatch(cartDeletSuccess(allcarts.filter(e=>e.id!==id)))
        })
        .catch((err)=>{
            let error;

            if(err.response){
                error = err.message +" " +  err.response.data
            }
            if(err.request){
                error=err.message + "Faild request, Try Again!"
            }
            
            dispatch(errorMessage(error))
            dispatch(cartFail(error))
        })
    }
}

export const cartCreate=(
  value, 
    )=>{
    return (dispatch)=>{
        dispatch(cartStart())
        axios({
            url:`${URLst}carts`,
            method:'post',
            data:value,
            headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res)=>{
            console.log("Created Success cart" , res.data);
            dispatch(cartCreateSuccess(res.data))
            dispatch(successMessage("Successfully Created cart!"))
        })
        .catch((err)=>{
            dispatch(cartFail(err))
            let error;

            if(err.response){
                error = err.message +" " +  err.response.data
            }
            if(err.request){
                error=err.message + "Faild request, Try Again!"
            }
            
            dispatch(errorMessage(error))
        })
       
    }
}