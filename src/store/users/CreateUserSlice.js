import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {createAlert  } from "../general/Alert";

const initialState = {  
  form:{
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
// CreateUserAction
export const CreateUserAction = createAsyncThunk(
    'CreateUserAction',
    async (params,{rejectWithValue,dispatch,getState}) => {

        let args =  getState().CreateUserSlice.form;

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

            if (!response.ok) {
                dispatch(createAlert({
                    message:"Create User Request Failed Please Contact To Admin",
                    status:true,
                    type:"error",
                  }));
                return rejectWithValue({errors:{}});
            }

            const result = await response.json();
            dispatch(createAlert({
                message:"User Created Successfully",
                status:true,
                type:"success",
            }));
            return result;

      } catch (error) {
        console.log('Failed',error);
         
           dispatch(createAlert({
            message:"Create User Request Failed Please Contact To Admin",
            status:true,
            type:"error",
          }));
          return rejectWithValue({errors:{}});
      }
  });




// *
// *
// GetUserListSlice
export const CreateUserSlice = createSlice({
  name: 'CreateUserSlice',
  initialState,
  reducers:{
    setFormValue:(state, action) => {
       let input  = action.payload;
       state.form[input.field] = input.value;
    },
  },
  extraReducers:(builder) => {
   
    builder.addCase(CreateUserAction.pending, (state, action) => {
      state.loading = true;
      state.errors = {};
    });

    builder.addCase(CreateUserAction.fulfilled, (state, action) => {
       state.loading = false;
       state.data = action.payload;
       state.form = {
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
       }
    });


    builder.addCase(CreateUserAction.rejected, (state, action) => {
       state.loading = false;
       state.errors = action.payload.errors;
    });
    
  }});

  export const {setFormValue} = CreateUserSlice.actions;

export default CreateUserSlice.reducer;