import * as React from 'react';

import { Box, Button, Card, CardHeader, Checkbox, Container, FormControlLabel, Grid, IconButton, Link, TextField, useTheme} from '@mui/material';

const Page = () => {

   const theme = useTheme();
   const handleSubmit = () => {

   }

return (     
       <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={4} >
                <TextField
                  required
                  fullWidth
                  label="Current Password"
                  name="old_password"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
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
