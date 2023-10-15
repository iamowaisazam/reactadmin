import * as React from 'react';
import { Box, Button,Grid,TextField, Typography, useTheme} from '@mui/material';
import { useDispatch } from 'react-redux';
import {} from "../../../store/users/UserSlice";
import { useParams } from 'react-router';

const Page = (Props) => {

   const theme = useTheme();
   const dispatch = useDispatch();
   let { id } = useParams();



   //_________
   //_________
   //Define States
   const [loader,setLoader] = React.useState(false);
   const [errors,setErrors] = React.useState({
        message:'',
        first_name:'',
        last_name:'',
        username:'',
        email:'',
        phone:'',
        nic:'',
        profession:'',
   });
   const [state,setState] = React.useState({
        id:null,
        first_name:'',
        last_name:'',
        username:'',
        email:'',
        phone:'',
        nic:'',
        profession:'',
   });



   //_________
   //_________
   //useEffect
   React.useEffect(() => {
    console.log('Component Load..');

    loadData();

    

   },[]);

   //_________
   //_________
   //LoadProfileData
   const loadData = async () => {

          setLoader(true);

            let getData = Props.profile;
            console.log(Props);
            if(!getData){
              alert('Data Not Found');
            }

            setState({...state,
                id:id,
                first_name:getData.first_name,
                last_name:getData.last_name,
                username:getData.username,
                email:getData.email,
                phone:getData.phone,
                nic:getData.nic,
                profession:getData.profession,
            });


          setTimeout(() => {
            setLoader(false);
          }, 3000);
   }


   //_________
   //_________
   //  OnSubmit
   const onSubmit = async (e) => {
      
      e.preventDefault();
    
      // setLoader(true);

      // dispatch(updateProfileAccount(state));

        // setTimeout(() => {        
        //   setLoader(false);
        // }, 3000);
      
   }

  return (     
       <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
          {loader == false ? <>
          <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <TextField
                  color="secondary"
                  fullWidth
                  value={state.first_name}
                  onChange={(e) => setState({...state,...{first_name:e.target.value}})}
                  label={"First Name"}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.first_name}</Typography>}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Last Name"
                  color="secondary"
                  value={state.last_name}
                  onChange={(e) => setState({...state,...{last_name:e.target.value}})}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.last_name}</Typography>}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Username"
                  color="secondary"
                  value={state.username}
                  onChange={(e) => { 
                    setState({...state,...{username:e.target.value}})}
                   }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.username}</Typography>}
              </Grid>
              <Grid item xs={12} sm={4} >
                <TextField
                  fullWidth
                  label="Email Address"
                  value={state.email}
                  color="secondary"
                  onChange={(e) => { 
                    setState({...state,...{email:e.target.value}})}
                   }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.email}</Typography>}
              </Grid>
              <Grid item xs={12} sm={4} >
                <TextField
                  fullWidth
                  value={state.phone}
                  onChange={(e) => { 
                    setState({...state,...{phone:e.target.value}})}
                   }
                  label="Phone"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.phone}</Typography>}
              </Grid>
              <Grid item xs={12} sm={4} >
                <TextField
                  fullWidth
                  label="Profession"
                  color="secondary"
                  value={state.profession}
                  onChange={(e) => { 
                    setState({...state,...{profession:e.target.value}})}
                   }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.profession}</Typography>}
              </Grid>
              <Grid item xs={12} sm={4} >
                <TextField
                  fullWidth
                  value={state.nic}
                  onChange={(e) => { 
                    setState({...state,...{nic:e.target.value}})}}
                  label="NIC (National Identity)"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.nic}</Typography>}
              </Grid>
            
            </Grid> 
            <Box component="div"  sx={{textAlign:'center'}} >
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >Submit </Button>
            </Box> </> : 'Loading'}
    </Box>)
};

export default Page;
