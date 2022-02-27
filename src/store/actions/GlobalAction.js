import {fetch3} from '../../utils'
import { toast } from 'react-toastify';
import {Get as Get_Customers} from '../actions/CustomerAction'
import {Get as Get_Categories} from '../actions/CategoryAction'
import {Get as Get_Product} from '../actions/ProductAction'
import {Get as Get_Order} from '../actions/OrderAction'



export const AppStart = () => async (dispatch,getState) => {

    let token = localStorage.getItem('token');
    if(token){
        let response = await fetch3(`${process.env.REACT_APP_API_URL}/auth`,{},'post');
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