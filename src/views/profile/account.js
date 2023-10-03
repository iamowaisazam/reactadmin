import * as React from 'react';

import { Box, Button,Grid,TextField, useTheme} from '@mui/material';

const Page = () => {

   const theme = useTheme();
   const handleSubmit = (e) => {

     e.preventDefault();
   
  }

  return (     
       <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="first_name"
                  required
                  color="secondary"
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="last_name"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  name="username"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} >
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} >
                <TextField
                  required
                  fullWidth
                  label="Phone"
                  name="phone"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} >
                <TextField
                  required
                  fullWidth
                  label="Profession"
                  name="profession"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} >
                <TextField
                  required
                  fullWidth
                  label="NIC (National Identity)"
                  name="nic"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
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
