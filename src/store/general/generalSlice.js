import { createSlice,current,createAsyncThunk  } from '@reduxjs/toolkit'
import { createAlert} from "./Alert";

const initialState = {
  alert:{
    message:"Test",
    status:false,
    type:"success",
  },
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers:{
  
  },
  extraReducers:{
    [createAlert]:(state, action) => {
        state.alert = action.payload;
    }
  }
});


export default generalSlice.reducer