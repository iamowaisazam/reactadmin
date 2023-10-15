import { createSlice,current,createAsyncThunk,createAction  } from '@reduxjs/toolkit'



// 
// 
// createAlert ____________________________
export const createAlert = createAction('general/createAlert', (arg) => {
    return {payload:{
        message:arg.message,
        status:arg.status,
        type:arg.type,
    }};
});


  
  
