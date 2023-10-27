import axios from 'axios'
import * as actionTypes from './productActionTypes'
import { URLst } from '../../constants/index'
import { errorMessage, successMessage } from '../Messages/messagesAction'

export const productStart =()=>{
    return {
        type:actionTypes.PRODUCT_START,
    }
}

export const productSuccess=(data)=>{
    return {
        type:actionTypes.PRODUCTS_GET,
        data:data
    }
}

export const productFail=(error)=>{
    return {
        type:actionTypes.PRODUCT_FAIL,
        error:error
    }
}

export const productSingle=(data)=>{
    return {
        type:actionTypes.PRODUCT_GET,
        data:data
    }
}


export const productDeletSuccess = (data)=>{
    return {
        type:actionTypes.PRODUCT_DELETE,
        data:data
    }
}

export const productCreateSuccess=(data)=>{
    return {
        type:actionTypes.PRODUCT_CREATE,
        data:data
    }
}

export const productUpdateSuccess=(data)=>{
    return {
        type:actionTypes.PRODUCT_UPDATE,
        data:data
    }
}
export const getproductList=()=>{
    return (dispatch)=>{
        dispatch(productStart())
        axios({
            method:'get',
            url:URLst+'product'
        })
        .then((res)=>{
            dispatch(productSuccess(res.data))
        })
        .catch((err)=>{
            var errorData;
            console.log(err.response);
            if (err.response != null) {
              errorData = err.response.status;
            } else {
              errorData = err.message;
            }
            dispatch(productFail(errorData))
        })
    }
}

export const getSinlgeproduct= (id)=>{
    
    return (dispatch)=>{
        dispatch(productStart)
        axios({
            method:'get',
            url:URLst+'products/'+id
        })
        .then((res)=>{
            dispatch(productSingle(res.data))
        })
        .catch((err)=>{
            var errorData;
        console.log(err.response);
        if (err.response != null) {
          errorData = err.response.status;
        } else {
          errorData = err.message;
        }
        dispatch(productFail(errorData))
        })
    }
}

export const deleteproduct =(id,allproducts=[])=>{

    return (dispatch)=>{
       
        dispatch(productStart())
        axios({
            method:"delete",
            url:URLst+ id,
        })
        .then((res)=>{
           
            console.log("productS_DELETE" , res.data);
            dispatch(productDeletSuccess(allproducts.filter(e=>e.id!==id)))
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
            dispatch(productFail(error))
        })
    }
}

export const productCreate=(
  value, 
    )=>{
       console.log(value,"valuevalue")
    return (dispatch)=>{
        dispatch(productStart())
        axios({
            url:`${URLst}products`,
            method:'post',
            data:value,
            headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res)=>{
            console.log("Created Success product" , res.data);
            dispatch(productCreateSuccess(res.data))
            dispatch(successMessage("Successfully Created product!"))
        })
        .catch((err)=>{
            dispatch(productFail(err))
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