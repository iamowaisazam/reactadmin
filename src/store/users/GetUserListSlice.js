import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {createAlert  } from "../general/Alert";

const initialState = {  
  data:[],
  rowsPerPage:10,
  page:0,
  loading:false,
  errors:{},
};


// *
// *
// GetUserListSlice
export const GetUserListAction = createAsyncThunk(
    'GetUserListAction',async (args,{rejectWithValue,dispatch}) => {
      try {

          const response = await fetch('https://65231901f43b1793841537f1.mockapi.io/api/users');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          return await response.json();  
      } catch (error) {
        dispatch(createAlert({
            message:"Error Found Please Contact To Admin",
            status:true,
            type:"error",
        }));
        return rejectWithValue(error);
      }
});




// *
// *
// GetUserListSlice
export const DeleteUserListAction = createAsyncThunk(
  'DeleteUserListAction',async (args,{rejectWithValue,dispatch}) => {
    try {

        const response = await fetch('https://65231901f43b1793841537f1.mockapi.io/api/users/'+args.id,{
          method:"Delete",
          headers:{
            "Content-Type":"application/json"
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
          dispatch(createAlert({
            message:"User Deleted Successfully",
            status:true,
            type:"success",
          }));

          dispatch(GetUserListAction());

        return await response.json();  
    } catch (error) {
      dispatch(createAlert({
          message:"Error Found Please Contact To Admin",
          status:true,
          type:"error",
      }));
      return rejectWithValue(error);
    }
});



// *
// *
// GetUserListSlice
export const GetUserListSlice = createSlice({
  name: 'GetUserListSlice',
  initialState,
  reducers:{
    setRowsPerPage:(state, action) => {
      state.rowsPerPage = action.payload;
    },
    setPage:(state, action) => {
      state.page = action.payload;
    }

  },
  extraReducers:(builder) => {
   
    builder.addCase(GetUserListAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(GetUserListAction.fulfilled, (state, action) => {
       state.loading = false;
       state.data = action.payload;
    });

    builder.addCase(GetUserListAction.rejected, (state, action) => {
       state.loading = false;
    });


  // ______________________________________________________________
  // Delete User Action
    builder.addCase(DeleteUserListAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(DeleteUserListAction.fulfilled, (state, action) => {
      //  state.loading = false;
      //  state.data = action.payload;
    });

    builder.addCase(DeleteUserListAction.rejected, (state, action) => {
       state.loading = false;
    });

  }});

  export const {setRowsPerPage,setPage} = GetUserListSlice.actions;

export default GetUserListSlice.reducer;