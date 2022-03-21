import {fetch5} from '../../utils'
import { toast } from 'react-toastify';



//
//
// Get_Orders
export  const Get = ()  => async (dispatch) =>   
{ 
    dispatch({type:'Order:update',payload:{loading:true}});
    let response = await fetch5(`${process.env.REACT_APP_API_URL}/orders`,false,'get'); 
    if(response.success){
        
        let data = response.data.data.length ? response.data.data : false;
        dispatch({type:'Order:update',payload:{data:data,loading:false}});
    }else{

        toast.error("Something Wen Wrong Failed To Load Orders");
        dispatch({type:'Order:update',payload:{data:false}});
    }
}



// //
// //
// // Add_Customers
// export  const Add_Customers = (data)  => async (dispatch) =>   
// {
//         dispatch({type:'Customer:update',payload:{success:false}});
//         let response = await fetch3(`${process.env.REACT_APP_API_URL}/customers/store`,data,'post'); 
//         if(response.success){

//             dispatch({type:'Customer:update',payload:{validations:false,success:true}});
//             toast.info("Customer Created Success");
//         }else{

//             if(response.data.validations){
//                 dispatch({type:'Customer:update',payload:{validations:response.data.validations}});
//             }else{
//                   toast.error(response.message);
//                   dispatch({type:'Customer:update',payload:{validations:false}});
//             }
//         }
//   }


// //
// //
// // Update_Customers
// export  const Update_Customers = (id,data)  => async (dispatch) =>   
// {
//         let response = await fetch3(`${process.env.REACT_APP_API_URL}/customers/update/${id}`,data,'post'); 
//         if(response.success){

//             dispatch({type:'Customer:update',payload:{validations:false}});
//             toast.info("Customer Updated Success");

//         }else{

//             if(response.data.validations){
//                 dispatch({type:'Customer:update',payload:{validations:response.data.validations}});
//             }else{
//                   toast.error(response.message);
//                   dispatch({type:'Customer:update',payload:{validations:false}});
//             }
//         }
//   }



//
//
// Edit_Orders
export  const Edit = (id)  => async (dispatch,getState) =>   
{
   
    let data = getState().OrderReducer.data;
    if(data){
           let single = await data.find((element) => element.id == id ); 
           if(single){
               
                dispatch({type:'Order:update',payload:{
                    single:single},
                    validations:false,
                });
            }
    }

}




// export  const Delete_Customers = (id)  => async (dispatch) =>   
// {

//         let response = await fetch3(`${process.env.REACT_APP_API_URL}/customers/delete/${id}`,false,'get'); 
//         if(response.success){
//              toast.info('Customer Deleted Success');
//              dispatch(Get_Customers());
//         }else{

//              toast.error(response.message);
//              dispatch({type:'Customer:update',payload:{}});
//              dispatch({type:'Global:update',payload:{loading:false}});
//         }

    
// }
