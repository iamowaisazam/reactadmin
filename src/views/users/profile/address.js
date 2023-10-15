import * as React from 'react';

import { Box, Button, Card, CardHeader, Checkbox, Container, FormControlLabel, Grid, IconButton, Link, TextField, useTheme} from '@mui/material';

const Page = () => {

   const theme = useTheme();
   const handleSubmit = () => {

   }

return (     
       <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="country"
                  required
                  color="secondary"
                  fullWidth
                  label="Country"
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
                  label="State/Provience"
                  name="state"
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
                  label="City/Town"
                  name="city"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  label="Street Address"
                  name="street_address"
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
