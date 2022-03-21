import {fetch5} from '../../utils'
import { toast } from 'react-toastify';


//
//
// Get_Customers
export  const Get = ()  => async (dispatch) =>   
{ 
    dispatch({type:'Customer:update',payload:{loading:true}});
    let response = await fetch5(`${process.env.REACT_APP_API_URL}/customers`,false,'get'); 
    if(response.success){
        let data = response.data.data.length ? response.data.data : false;
        dispatch({type:'Customer:update',payload:{data:data,loading:false}});

    }else{

        toast.error("Something Wen Wrong Failed To Load Customers");
        dispatch({type:'Customer:update',payload:{data:false}});
    }
}



//
//
// Add_Customers
export  const Add = (data)  => async (dispatch,getState) =>   
{
        dispatch({type:'Customer:update',payload:{loading:true,success:false}});
        let response = await fetch5(`${process.env.REACT_APP_API_URL}/customers/store`,data,'post'); 
        if(response.success){

            let data = getState().CustomerReducer.data ? getState().CustomerReducer.data : [];
            data.push(response.data.data);
            
            debugger
            dispatch({type:'Customer:update',payload:{data:data,validations:false,success:true,loading:false}});
            toast.info("Customer Created Success");

        }else{

            if(response.data.validations){
                dispatch({type:'Customer:update',payload:{validations:response.data.validations,loading:false}});
            }else{
                  toast.error('Error Found Customer Not Created');
                  dispatch({type:'Customer:update',payload:{validations:false,loading:false}});
            }
        }

  }



//
//
// Update_Customers
export  const Update = (id,data)  => async (dispatch,getState) =>   
{
        dispatch({type:'Customer:update',payload:{loading:true}});
        let response = await fetch5(`${process.env.REACT_APP_API_URL}/customers/update/${id}`,data,'post'); 
        if(response.success){

            let data = getState().CustomerReducer.data ? getState().CustomerReducer.data : [];
            let newdata = await  data.map(obj => { return obj.id == id ? response.data.data : obj });
            dispatch({type:'Customer:update',payload:{data:newdata,validations:false,loading:false}});
            toast.info("Customer Updated Success");

        }else{

            if(response.data.validations){
                dispatch({type:'Customer:update',payload:{validations:response.data.validations,loading:false}});
            }else{
                  toast.error(response.message);
                  dispatch({type:'Customer:update',payload:{validations:false,loading:false}});
            }
        }
  }




//
//
// Update_Customers
export  const Edit = (id)  => async (dispatch,getState) =>   
{
   
    let data = getState().CustomerReducer.data;
    if(data){
           let single = await data.find((element) => element.id == id ); 
           if(single){
               
                dispatch({type:'Customer:update',payload:{
                    single:single},
                    validations:false,
                });
            }
    }

}




export  const Delete = (id)  => async (dispatch,getState) =>   
{
        dispatch({type:'Customer:update',payload:{loading:true}});
        let response = await fetch5(`${process.env.REACT_APP_API_URL}/customers/delete/${id}`,false,'get'); 
        if(response.success){
             
             let data = getState().CustomerReducer.data ? getState().CustomerReducer.data : [];
             let newdata = data.filter(obj => obj.id != id);
             dispatch({type:'Customer:update',payload:{data:newdata,loading:false}});
             toast.info('Customer Deleted Success');

        }else{

             toast.error(response.message);
             dispatch({type:'Customer:update',payload:{loading:false}});
        }

    
}
