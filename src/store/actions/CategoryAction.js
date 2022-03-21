import {fetch5} from '../../utils'
import { toast } from 'react-toastify';


//
//
// Get_Categories
export  const Get = ()  => async (dispatch) =>   
{ 
    dispatch({type:'Category:update',payload:{loading:true}});
    let response = await fetch5(`${process.env.REACT_APP_API_URL}/categories`,false,'get'); 
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
export  const Add = (data)  => async (dispatch,getState) =>   
{
        dispatch({type:'Category:update',payload:{success:false}});
        let response = await fetch5(`${process.env.REACT_APP_API_URL}/categories/store`,data,'post'); 
        if(response.success){

            let data = getState().CategoryReducer.data ? getState().CategoryReducer.data : [];
            data.push(response.data.data);
            dispatch({type:'Category:update',payload:{data:data,validations:false,success:true}});
            toast.info("Category Created Success");
                
        }else{

            if(response.data.validations){
                dispatch({type:'Category:update',payload:{validations:response.data.validations}});
            }else{
                toast.error('Eror Found Category Not Created');
                dispatch({type:'Category:update',payload:{validations:false}});
            }
        }
  }




//
//
// Update_Customers
export  const Update = (id,data)  => async (dispatch,getState) =>   
{       
         dispatch({type:'Category:update',payload:{loading:true}});
        let response = await fetch5(`${process.env.REACT_APP_API_URL}/categories/update/${id}`,data,'post'); 
        if(response.success){

            let data = getState().CategoryReducer.data ? getState().CategoryReducer.data : [];
            let newdata = await  data.map(obj => { return obj.id == id ? response.data.data : obj });
            dispatch({type:'Category:update',payload:{data:newdata,validations:false,loading:false}});
            toast.info("Categories Updated Success");

        }else{

            if(response?.data?.validations){
                dispatch({type:'Category:update',payload:{validations:response.data.validations,loading:false}});
            }else{
                toast.error('Error Found Category Not Updated');
                dispatch({type:'Category:update',payload:{validations:false,loading:false}});
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
export  const Delete = (id)  => async (dispatch,getState) =>   
{       
        dispatch({type:'Category:update',payload:{loading:true}});
        let response = await fetch5(`${process.env.REACT_APP_API_URL}/categories/delete/${id}`,false,'get'); 
        if(response.success){
            
            let data = getState().CategoryReducer.data ? getState().CategoryReducer.data : [];
            let newdata = data.filter(obj => obj.id != id);
            dispatch({type:'Category:update',payload:{data:newdata,loading:false}});
            toast.info('Category Deleted Success');

        }else{
             toast.error('Error Found Category Not Dleted');
             dispatch({type:'Category:update',payload:{loading:false}});
        }
}