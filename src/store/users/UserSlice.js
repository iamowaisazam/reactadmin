import { createSlice,current,createAsyncThunk  } from '@reduxjs/toolkit'
import {  createUser,getUsers,editUsers,updateUser,deleteUser} from "./Action";
import {createAlert  } from "../general/Alert";

const initialState = {
  alert:{
    message:"Test",
    status:false,
  },
  createForm:{
    data:{
      first_name:null,
      last_name:null,
      email:null,
      username:null,
      phone:null,
      profession:null,
      country:null,
      state:null,
      city:null,
      town:null,
    },
    loading:false,
    errors:{},
    message:false,
  },
  edit:{
    data:false,
    form:{
      id:null,
      first_name:null,
      last_name:null,
      email:null,
      username:null,
      phone:null,
      profession:null,
      country:null,
      state:null,
      city:null,
      town:null,
    },
    loading:false,
    errors:{},
    message:false,
  },
  loading:false,
  singleUser:{},
  errors:{},
  users:[],
};

export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers:{
    
  },
  extraReducers:{

  // 
  // 
  //getUsers __________________________________________
    [getUsers.pending]: (state,action) => {
      state.loading = true;
      console.log('pending',action);
    },
    [getUsers.fulfilled]: (state,action) => {
      state.loading = false;
      state.users = action.payload;
      console.log('fulfilled',action);

      action.dispatch(createAlert({
        message:"User Loaded Successfully",
        status:true,
        type:"success",
      }));

      // action.dispatch(yourSecondAction())

    },
    [getUsers.rejected]: (state,action) => {
      state.loading = false;
      console.log('rejected',action);
    },


  // 
  // 
  //createUser ____________________________________________
    [createUser.pending]: (state,action) => {
       state.createForm.loading = true;
    },
    [createUser.fulfilled]: (state,action) => {

      state.createForm.loading = false;
      state.createForm.errors = {};
    },
    [createUser.rejected]: (state,action) => {
      state.createForm.loading = false;
      state.createForm.errors = action.payload.errors;
    },



  // 
  // 
  //editUser ____________________________________________
    [editUsers.pending]: (state,action) => {
      state.edit.loading = true;
   },
   [editUsers.fulfilled]: (state,action) => {

     state.edit.loading = false;
     state.edit.errors = {};     
     console.log('fulfilled',action);
     state.edit.data = action.payload;

   },
   [editUsers.rejected]: (state,action) => {
     state.edit.loading = false;
     state.edit.errors = action.payload.errors;
   },



  // 
  // 
  //updateUser ____________________________________________
    [updateUser.pending]: (state,action) => {
      state.edit.loading = true;
   },
   [updateUser.fulfilled]: (state,action) => {

     state.edit.loading = false;
     state.edit.errors = {};     
     console.log('fulfilled',action);
    //  state.singleUser = action.payload;

   },
   [updateUser.rejected]: (state,action) => {
     state.edit.loading = false;
     state.edit.errors = action.payload.errors;
   },


  // 
  // 
  //deleteUser ____________________________________________
    [deleteUser.pending]: (state,action) => {
      state.loading = true;
   },
   [deleteUser.fulfilled]: (state,action) => {
     state.loading = false;
     state.errors = {};     
     console.log('fulfilled',action);
   },
   [deleteUser.rejected]: (state,action) => {
     state.loading = false;
     state.errors = action.payload.errors;
   }
   
  }
});


export { createUser,getUsers,editUsers,updateUser,deleteUser };
export default userReducer.reducer