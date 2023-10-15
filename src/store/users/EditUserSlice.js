import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {createAlert  } from "../general/Alert";
import { getUsers } from './Action';

const initialState = {  
  data:{},
  form:{
    id:'',
    first_name:'',
    last_name:'',
    email:'',
    username:'',
    phone:'',
    profession:'',
    country:'',
    state:'',
    city:'',
    town:'',
    password:'',
    confirm_password:'',
  },
  loading:false,
  errors:{},
};


// *
// *
// EditUserAction
export const GetUserAction = createAsyncThunk(
    'GetUserAction',
    async (params,{rejectWithValue,dispatch,getState}) => {

        let args =  getState().EditUserSlice.form;
        const response = await fetch('https://65231901f43b1793841537f1.mockapi.io/api/users/'+args.id,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
        body:null
      });

      try {
            if (!response.ok) {
                dispatch(createAlert({
                    message:"Find User Request Failed Please Contact To Admin",
                    status:true,
                    type:"error",
                  }));
                return rejectWithValue({errors:{}});
            }
            const result = await response.json();
            return result;

      } catch (error) {
           dispatch(createAlert({
            message:"Failed To Get User Please Contact To Admin",
            status:true,
            type:"error",
          }));
          return rejectWithValue({errors:{}});
      }

  });




// *
// *
// EditUserAction
export const EditUserAction = createAsyncThunk(
    'EditUserAction',
    async (params,{rejectWithValue,dispatch,getState}) => {
        debugger
      
        let args =  getState().EditUserSlice.form;

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
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(args)
      });


      try {
            if (!response.ok) {
                dispatch(createAlert({
                    message:"Update Request Failed Please Contact To Admin",
                    status:true,
                    type:"error",
                  }));
                return rejectWithValue({errors:{}});
            }

            const result = await response.json();
            dispatch(createAlert({
                message:"Update Successfully",
                status:true,
                type:"success",
            }));

            dispatch(GetUserAction());
            return result;

      } catch (error) {
 
           dispatch(createAlert({
            message:"Update Request Failed Please Contact To Admin",
            status:true,
            type:"error",
          }));
          return rejectWithValue({errors:{}});
      }
  });




// *
// *
// GetUserListSlice
export const EditUserSlice = createSlice({
  name: 'EditUserSlice',
  initialState,
  reducers:{
    setFormValue:(state, action) => {
       let input  = action.payload;
       state.form[input.field] = input.value;
    },
  },
  extraReducers:(builder) => {
   
    builder.addCase(EditUserAction.pending, (state, action) => {
         state.loading = true;
         state.errors = {};
    });

    builder.addCase(EditUserAction.fulfilled, (state, action) => {
         state.loading = false;
         state.data = action.payload;
    });

    builder.addCase(EditUserAction.rejected, (state, action) => {
         state.loading = false;  
         state.errors = action.payload.errors;
    });





// ___________________________________________________________________
      builder.addCase(GetUserAction.pending, (state, action) => {
        state.loading = true;
        state.errors = {};
      });
  
      builder.addCase(GetUserAction.fulfilled, (state, action) => {
         
         state.loading = false;
         state.data = action.payload;
         state.form.first_name = action.payload.first_name;
         state.form.last_name = action.payload.last_name;
         state.form.email = action.payload.email;
         state.form.username  = action.payload.username;
         state.form.phone = action.payload.phone;
         state.form.profession = action.payload.profession;
         state.form.country = action.payload.country;
         state.form.state = action.payload.state;
         state.form.city = action.payload.city;
         state.form.town = action.payload.town;
         
      });
  
      builder.addCase(GetUserAction.rejected, (state, action) => {
         state.loading = false;
         state.errors = {};
      });

    

  }});


  export const {setFormValue} = EditUserSlice.actions;

export default EditUserSlice.reducer;