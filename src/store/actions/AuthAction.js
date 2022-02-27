import {fetch3} from '../../utils'
import { toast } from 'react-toastify';

//
//
// Login_Auth
export  const Login_Auth = (data)  => async (dispatch) =>   
{
         
        dispatch({type:'Global:update',payload:{loading:true}});
        let response = await fetch3(`${process.env.REACT_APP_API_URL}/login`,data,'post'); 
        if(response.success){
            localStorage.setItem('token',response.data.token);
            dispatch({type:'Auth:update',payload:{token:response.data.token,user: response.data.user}});
            toast.info("Logged In Succes");

        }else{

              if(response.data.message){
                  toast.error(response.data.message);
              }else{
                  toast.error("Failed To Login");
              }           
            dispatch({type:'Auth:update',payload:{user:false,token:false}});
        }

        dispatch({type:'Global:update',payload:{loading:false}});
  }




//
//
// Register_Auth
export const Register_Auth = (data)  => async (dispatch) => 
{
       
      dispatch({type:'Global:update',payload:{loading:true}});
      dispatch({type:'Auth:update',payload:{validations:false,success:false}});

      let response = await fetch3(`${process.env.REACT_APP_API_URL}/register`,data,'post');
      if(response.success){
             toast.info("Register Success");
             dispatch({type:'Auth:update',payload:{validations:false,success:true}});
      }else{

            if(response.data.validations){
               dispatch({type:'Auth:update',payload:{validations:response.data.validations,success:false}});  
            }else{
               dispatch({type:'Auth:update',payload:{validations:false,success:false}});  
               toast.warning('Some Thing Went Wrong Request Failed');  
            }
      }

      dispatch({type:'Global:update',payload:{loading:false}});
}





//
//
// getAuth
export const getAuth = () => async (dispatch,getState) => 
{

      dispatch({type:'Global:update',payload:{loading:true}});
      let token = localStorage.getItem('token');
      if(token){
            let response = await fetch3(`${process.env.REACT_APP_API_URL}/auth`,{},'post');
            if(response.success){
                  dispatch({type:'Auth:update',payload:{token:token,user:response.data.user}});
            }else{
                  
                  localStorage.removeItem('token');
                  toast.info('Token Expired'); 
                  dispatch({type:'Auth:update',payload:{token:false,user:false}});
            }
      }

      dispatch({type:'Global:update',payload:{loading:false}});
}





//
//
// Logout_Auth
export const Logout_Auth = () => async (dispatch,getState) => 
{

      dispatch({type:'Global:update',payload:{loading:true}});
      let response = await fetch3(`${process.env.REACT_APP_API_URL}/logout`,{},'post');
      if(response.success){
            localStorage.removeItem('token');
            dispatch({type:'Auth:update',payload:{token:false,user:false}});
            toast.info('Logout Successfully'); 
      }else{
            if(response.networkError == undefined){
                  toast.info('Token Expired'); 
                  dispatch({type:'Auth:update',payload:{token:false,user:false}});
            }
      }
      dispatch({type:'Global:update',payload:{loading:false}});
}




//
//
// Profile_Auth
export const Profile_Auth = (data) => async (dispatch,getState) => 
{

      dispatch({type:'Global:update',payload:{loading:true}});

      let newdata = {
           name: data.name,
           email: data.email,
      };

      if(data.password != ''){
        newdata.password = data.password;
      }

      let response = await fetch3(`${process.env.REACT_APP_API_URL}/auth-update`,newdata,'post');     
      if(response.success){

            dispatch({type:'Auth:update',payload:{
                  validations: false,
            }});
            toast.info('Profile Updated Successfully'); 
            dispatch(getAuth());   

      }else{

            if(response.data.validations){
              dispatch({type:'Auth:update',payload:{validations:response.data.validations}});
            }else{
                  toast.warning(response.message); 
            }
      }

      dispatch({type:'Global:update',payload:{loading:false}});
}