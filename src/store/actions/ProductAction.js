import {fetch3,fetch5} from '../../utils'
import { toast } from 'react-toastify';


//
//
// Get
export  const Get = ()  => async (dispatch) =>   
{ 
    dispatch({type:'Product:update',payload:{loading:true}});

    let response = await fetch5(`${process.env.REACT_APP_API_URL}/products`,false,'get'); 
    if(response.success){
        let data = response.data.data.length ? response.data.data : false;
        dispatch({type:'Product:update',payload:{data:data}});
    }else{
        toast.error("Something Wen Wrong Failed To Load Products");
        dispatch({type:'Product:update',payload:{data:false}});
    }
    
    dispatch({type:'Product:update',payload:{loading:false}});
}




//
//
// Add
export const Add = (data)  => async (dispatch,getState) =>   
{
        dispatch({type:'Product:update',payload:{success:false,loading:true}});
        let response = await fetch5(`${process.env.REACT_APP_API_URL}/products/store`,data,'post'); 
        if(response.success){

            let data = getState().ProductReducer.data ? getState().ProductReducer.data : [];
            data.push(response.data.data);
            dispatch({type:'Product:update',payload:{data:data,validations:false,success:true,loading:false}});
            toast.info("Product Created Success");
        
        }else{

            if(response.data.validations){
                dispatch({type:'Product:update',payload:{validations:response.data.validations}});
            }else{
                  toast.error('Eror Found Product Not Created');
                  dispatch({type:'Product:update',payload:{validations:false}});
            }

            dispatch({type:'Product:update',payload:{loading:false}});
        }
  }




//
//
// Update
export const Update = (id,data)  => async (dispatch,getState) =>   
{
    dispatch({type:'Product:update',payload:{loading:true}});
    let response = await fetch5(`${process.env.REACT_APP_API_URL}/products/update/${id}`,data,'post'); 
    if(response.success){

        let data = getState().ProductReducer.data ? getState().ProductReducer.data : [];
        let newdata = await  data.map(obj => { return obj.id == id ? response.data.data : obj });
        dispatch({type:'Product:update',payload:{data:newdata,validations:false,loading:false}});
        toast.info("Product Updated Success");


    }else{
        if(response.data.validations){
                dispatch({type:'Product:update',payload:{validations:response.data.validations}});
        }else{
                toast.error('Error Found Product Updated Success');
        }
        dispatch({type:'Product:update',payload:{loading:false}});
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
export  const Delete = (id)  => async (dispatch,getState) =>   
{
    dispatch({type:'Product:update',payload:{loading:true}});
    let response = await fetch5(`${process.env.REACT_APP_API_URL}/products/delete/${id}`,false,'get'); 
    if(response.success){

            let data = getState().ProductReducer.data ? getState().ProductReducer.data : [];
            let newdata = data.filter(obj => obj.id != id);
            dispatch({type:'Product:update',payload:{data:newdata,loading:false}});
            toast.info('Product Deleted Success');

    }else{
            toast.error('Error Found Product Not Deleted');
            dispatch({type:'Product:update',payload:{loading:false}});
    }
}