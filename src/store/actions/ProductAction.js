import {fetch3} from '../../utils'
import { toast } from 'react-toastify';


//
//
// Get
export  const Get = ()  => async (dispatch) =>   
{ 
    dispatch({type:'Product:update',payload:{loading:true}});
    let response = await fetch3(`${process.env.REACT_APP_API_URL}/products`,false,'get'); 
    if(response.success){
        let data = response.data.data.length ? response.data.data : false;
        dispatch({type:'Product:update',payload:{data:data,loading:false}});
    }else{

        toast.error("Something Wen Wrong Failed To Load Products");
        dispatch({type:'Product:update',payload:{data:false}});
    }
}




//
//
// Add
export const Add = (data)  => async (dispatch) =>   
{
        dispatch({type:'Product:update',payload:{success:false}});
        let response = await fetch3(`${process.env.REACT_APP_API_URL}/products/store`,data,'post'); 
        if(response.success){

            dispatch({type:'Product:update',payload:{validations:false,success:true}});
            toast.info("Product Created Success");
        }else{

            if(response.data.validations){
                dispatch({type:'Product:update',payload:{validations:response.data.validations}});
            }else{
                  toast.error(response.message);
                  dispatch({type:'Product:update',payload:{validations:false}});
            }
        }
  }




//
//
// Update
export const Update = (id,data)  => async (dispatch) =>   
{
    let response = await fetch3(`${process.env.REACT_APP_API_URL}/products/update/${id}`,data,'post'); 
    if(response.success){
        dispatch({type:'Product:update',payload:{validations:false}});
        toast.info("Product Updated Success");

    }else{
        if(response.data.validations){
                dispatch({type:'Product:update',payload:{validations:response.data.validations}});
        }else{
                toast.error(response.message);
                dispatch({type:'Product:update',payload:{validations:false}});
        }

    }
}





//
//
// Edit
export  const Edit = (id)  => async (dispatch,getState) =>   
{
    let data = getState().ProductReducer.data;
    if(data){

        let single = await data.find((element) => element.id == id ); 
        if(single){
            dispatch({type:'Product:update',payload:{
                single:single},
                validations:false,
            });
        }
    }
}




// 
// 
// Delete
export  const Delete = (id)  => async (dispatch) =>   
{
    let response = await fetch3(`${process.env.REACT_APP_API_URL}/products/delete/${id}`,false,'get'); 
    if(response.success){
            toast.info('Product Deleted Success');
            dispatch(Get());
    }else{
            toast.error(response.message);
            dispatch({type:'Product:update',payload:{}});
            dispatch({type:'Global:update',payload:{loading:false}});
    }
}