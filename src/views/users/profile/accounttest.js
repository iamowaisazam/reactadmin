import * as React from 'react';

import { Box, Button,Grid,TextField, Typography, useTheme} from '@mui/material';
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import {updateProfile} from "../../../store/users/UserSlice";
import { ErrorMessage } from 'formik';

 let cmp = 0;
const Page = (Props) => {
    
   const {profile} = Props;
   const dispatch = useDispatch();

   const theme = useTheme();
   const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:{
      first_name:profile.first_name,
      last_name:profile.last_name,
      username:profile.username,
      email:profile.email,
      phone:profile.phone,
      profession:profile.profession,
      nic:profile.nic,
    }
  });

  const onSubmit = (e) => {
      let res = e;
      res.id = profile.id;
     dispatch(updateProfile({data:e}))
  }

  cmp++;

  return (     
       <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <TextField
                  {...register("first_name",
                    { 
                      required:{
                       value:true,
                       message:"Field Is Required"
                      },
                      minLength:{
                        value:3,
                        message:'Should Be Greater Than 3 Characters'
                       },
                      maxLength:{
                        value:10,
                        message:'Should Be Less Than 10 Characters'
                       },
                    },
                  )} 
                  color="secondary"
                  fullWidth
                  label={"First Name "+cmp}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.first_name?.message}</Typography>}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Last Name"
                  color="secondary"
                  {...register("last_name",{ 
                      required:{
                       value:true,
                       message:"Field Is Required"
                      },
                      minLength:{
                        value:3,
                        message:'Should Be Greater Than 3 Characters'
                       },
                      maxLength:{
                        value:10,
                        message:'Should Be Less Than 10 Characters'
                      },
                  },)} 
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.last_name?.message}</Typography>}
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                   {...register("username", { 
                    required:{
                      value:true,
                      message:"Field Is Required"
                     },
                     minLength:{
                       value:3,
                       message:'Should Be Greater Than 3 Characters'
                      },
                     maxLength:{
                       value:30,
                       message:'Should Be Less Than 30 Characters'
                     },
                  })}
                  fullWidth
                  label="Username"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.username?.message}</Typography>}
              </Grid>
              <Grid item xs={12} sm={4} >
                <TextField
                  {...register("email", {
                    required:{
                      value:true,
                      message:"Field Is Required"
                     },
                     minLength:{
                       value:3,
                       message:'Should Be Greater Than 3 Characters'
                      },
                     maxLength:{
                       value:30,
                       message:'Should Be Less Than 30 Characters'
                     },
                  })}
                  fullWidth
                  label="Email Address"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.email?.message}</Typography>}
              </Grid>
              <Grid item xs={12} sm={4} >
                <TextField
                   {...register("phone", {
                    required:{
                      value:true,
                      message:"Field Is Required"
                     },
                     minLength:{
                       value:11,
                       message:'Should Be Greater Than 11 Characters'
                      },
                     maxLength:{
                       value:15,
                       message:'Should Be Less Than 15 Characters'
                     },
                  })}
                  fullWidth
                  label="Phone"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.phone?.message}</Typography>}
              </Grid>
              <Grid item xs={12} sm={4} >
                <TextField
                  {...register("profession", {
                    required:{
                      value:true,
                      message:"Field Is Required"
                     },
                     minLength:{
                       value:3,
                       message:'Should Be Greater Than 3 Characters'
                      },
                     maxLength:{
                       value:30,
                       message:'Should Be Less Than 30 Characters'
                     },
                  })}
                  fullWidth
                  label="Profession"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.profession?.message}</Typography>}
              </Grid>
              <Grid item xs={12} sm={4} >
                <TextField
                   {...register("nic", {
                    required:{
                      value:true,
                      message:"Field Is Required"
                     },
                     minLength:{
                       value:3,
                       message:'Should Be Greater Than 3 Characters'
                      },
                     maxLength:{
                       value:15,
                       message:'Should Be Less Than 15 Characters'
                     },
                  })}
                  fullWidth
                  label="NIC (National Identity)"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.nic?.message}</Typography>}
              </Grid>
            
            </Grid>
            <Box component="div"  sx={{textAlign:'center'}} >
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >Submit</Button>
            </Box>
    </Box>)
};

export default Page;
