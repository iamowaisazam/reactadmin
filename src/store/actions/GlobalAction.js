import {fetch5} from '../../utils'
import {toast } from 'react-toastify';
import {Get as Get_Customers} from '../actions/CustomerAction'
import {Get as Get_Categories} from '../actions/CategoryAction'
import {Get as Get_Product} from '../actions/ProductAction'
import {Get as Get_Order} from '../actions/OrderAction'

export const AppStart = () => async (dispatch,getState) => {

    let token = localStorage.getItem('token');
    if(token){
        let response = await fetch5(`${process.env.REACT_APP_API_URL}/auth`,false,'post');
        if(response.success){    
                dispatch({type:"Auth:update",payload:{token:token,user:response.data.user}});  
                dispatch(Get_Customers());
                dispatch(Get_Categories());
                dispatch(Get_Product());
                dispatch(Get_Order());
                
        }else{
            toast.warning('Token Expired');
            localStorage.removeItem('token');
            dispatch({type:"Auth:update",payload:{token:false,user:false}});
        }
    }

    dispatch({type:'Global:update',payload:{start: true}});
}


export const ResetApp = () => async (dispatch,getState) => {

    dispatch({type:'Category:update',payload:{loading:false,data:false}});
    dispatch({type:'Product:update',payload:{loading:false,data:false}});
    dispatch({type:'Customer:update',payload:{loading:false,data:false}});
    dispatch({type:'Order:update',payload:{loading:false,data:false}});
    dispatch({type:'Auth:update',payload:{loading:false,user:false,token:false,validations:false,error:false,success:false}});
}

export const LoadData = () => async (dispatch,getState) => {
    
    dispatch(Get_Customers());
    dispatch(Get_Categories());
    dispatch(Get_Product());
    dispatch(Get_Order());
}