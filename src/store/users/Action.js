import { createSlice,current,createAsyncThunk,  } from '@reduxjs/toolkit'
import { createAlert } from "../general/Alert";



// 
// 
// getUsers ____________________________
export const getUsers = createAsyncThunk(
    'getUsers',
    async (args,{rejectWithValue,dispatch}) => {

      try {
        
        const response = await fetch('https://65231901f43b1793841537f1.mockapi.io/api/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();  
        return result;
      } catch (error) {
        // dispatch(createAlert({
        //   message:"Error Found Please Contact To Admin",
        //   status:true,
        //   type:"error",
        // }));
        return rejectWithValue(error);
      }
  });


// 
// 
// editUsers ____________________________
export const editUsers = createAsyncThunk(
    'editUsers',
    async (args,{rejectWithValue}) => {
      const response = await fetch('https://65231901f43b1793841537f1.mockapi.io/api/users/'+args);
      try {
        const result = await response.json();
        
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
  });
  
  
  
  
  // 
  // 
  // createUser ____________________________
  export const createUser = createAsyncThunk(
    'createUser',
    async (args,{rejectWithValue}) => {
  
      //Validations
      let errors = {};
     
      if(!args.password){
        errors.password = "Field Is Required";
        errors.confirm_password = "Field Is Required";
      }
      if(!args.first_name){
        errors.first_name = "Field Is Required";
      }
      if(!args.last_name){
        errors.last_name = "Field Is Required";
      }
      if(!args.email){
        errors.email = "Field Is Required";
      }
      if(!args.username){
        errors.username = "Field Is Required";
      }
  
  
      if(Object.keys(errors).length > 0){
        return rejectWithValue({
          errors:errors
        });
      }
  
      const response = await fetch('https://65231901f43b1793841537f1.mockapi.io/api/users',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(args)
      });
      try {
        const result = await response.json();
        console.log('Response',result);
        return result;
      } catch (error) {
        console.log('Failed',error);
        return rejectWithValue(error);
      }
  
  });
  


  // 
  // 
  // updateUser ____________________________
  export const updateUser = createAsyncThunk(
    'updateUser',
    async (args,{rejectWithValue}) => {
  
      //Validations
      let errors = {};

      if(!args.first_name){
        errors.first_name = "Field Is Required";
      }
      if(!args.last_name){
        errors.last_name = "Field Is Required";
      }
      if(!args.email){
        errors.email = "Field Is Required";
      }
      if(!args.username){
        errors.username = "Field Is Required";
      }
  
      
      if(Object.keys(errors).length > 0){
        return rejectWithValue({
          errors:errors
        });
      }
      
      const response = await fetch('https://65231901f43b1793841537f1.mockapi.io/api/users/'+args.id,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(args)
      });
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        console.log('Failed',error);
        return rejectWithValue(error);
      }
  
  });



   // 
  // 
  // deleteUser ____________________________
  export const deleteUser = createAsyncThunk(
    'deleteUser',
    async (args,{rejectWithValue}) => {
      const response = await fetch('https://65231901f43b1793841537f1.mockapi.io/api/users/'+args.id,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(args)
      });
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        console.log('Failed',error);
        return rejectWithValue(error);
      }
  });
  
  
  
  