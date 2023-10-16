import React from 'react';
import { Alert, AlertTitle, Button, IconButton, Snackbar } from "@mui/material";
import { useSelector,useDispatch } from 'react-redux';
import { createAlert } from "store/general/Alert";
 
export default () => {

  const {message,status,type} = useSelector((state) => state.generalReducer.alert);   
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = React.useState(true);
   
    const onClose = () => {
        dispatch(createAlert({
          message:'',
          status:false
        }));
    };

    return (<>
        {/* <button onClick={() => dispatch(createAlert({
          message:'Hi ',
          status:true
        }))}  >True</button> */}
        {status ?
        <Snackbar 
          open={openAlert} 
          onClose={onClose}
          autoHideDuration={3000} 
          anchorOrigin={{vertical:"top", horizontal:'right' }}>
          <Alert
            color={type}
            variant="filled" 
            severity="success" 
            sx={{ width: '100%'}} 
            onClose={(() => 0)} >
              {/* <AlertTitle>Success</AlertTitle> */}
              {message}</Alert>

        </Snackbar> : ''
        }
    </>);
    
};