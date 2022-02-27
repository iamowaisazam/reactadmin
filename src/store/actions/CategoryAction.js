import {fetch3} from '../../utils'
import { toast } from 'react-toastify';


//
//
// Get_Categories
export  const Get = ()  => async (dispatch) =>   
{ 
    dispatch({type:'Category:update',payload:{loading:true}});
    let response = await fetch3(`${process.env.REACT_APP_API_URL}/categories`,false,'get'); 
    if(response.success){
        let data = response.data.data.length ? response.data.data : false;
        dispatch({type:'Category:update',payload:{data:data,loading:false}});
    }else{

        toast.error("Something Wen Wrong Failed To Load Categories");
        dispatch({type:'Category:update',payload:{data:false}});
    }
}



//
//
// Add_Categories
export  const Add = (data)  => async (dispatch) =>   
{
        dispatch({type:'Category:update',payload:{success:false}});
        let response = await fetch3(`${process.env.REACT_APP_API_URL}/categories/store`,data,'post'); 
        if(response.success){

            dispatch({type:'Category:update',payload:{validations:false,success:true}});
            toast.info("Category Created Success");
        }else{

            if(response.data.validations){
                dispatch({type:'Category:update',payload:{validations:response.data.validations}});
            }else{
                  toast.error(response.message);
                  dispatch({type:'Category:update',payload:{validations:false}});
            }
        }
  }




//
//
// Update_Customers
export  const Update = (id,data)  => async (dispatch) =>   
{
        
        let response = await fetch3(`${process.env.REACT_APP_API_URL}/categories/update/${id}`,data,'post'); 
        if(response.success){

            dispatch({type:'Category:update',payload:{validations:false}});
            toast.info("Categories Updated Success");

        }else{

            if(response.data.validations){
                dispatch({type:'Category:update',payload:{validations:response.data.validations}});
            }else{
                  toast.error(response.message);
                  dispatch({type:'Category:update',payload:{validations:false}});
            }
        }
  }



//
//
// Edit_Categories
export  const Edit = (id)  => async (dispatch,getState) =>   
{
    let data = getState().CategoryReducer.data;
    if(data){

           let single = await data.find((element) => element.id == id ); 
           if(single){
               
                dispatch({type:'Category:update',payload:{
                    single:single,
                    validations:false,
                   }
                });
            }
    }

}



//
//
//
// Delete

export  const Delete = (id)  => async (dispatch) =>   
{
    
        let response = await fetch3(`${process.env.REACT_APP_API_URL}/categories/delete/${id}`,false,'get'); 
        if(response.success){
             toast.info('Category Deleted Success');
             dispatch(Get());
        }else{
             toast.error(response.message);
             dispatch({type:'Category:update',payload:{}});
        }

}