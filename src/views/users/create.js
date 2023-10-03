// material-ui
import { Add } from '@mui/icons-material';
import { Box, Button, Card, CardHeader, Checkbox, Container, FormControlLabel, Grid, IconButton, Link, TextField, useTheme,Typography,Divider,CardContent } from '@mui/material';
import { textAlign } from '@mui/system';

// project imports
// import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Page = () => {

  const theme = useTheme();

   const handleSubmit = () => {


   }


return (

  <Card sx={{border:'1px solid',borderColor: theme.palette.primary[200] + 25,
  ':hover': {boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'}}}>
     <CardHeader title={<Typography variant="h3">Create User</Typography>}/>
        <Divider />
        <CardContent >

   <Container component="main" maxWidth="xl">
   
     <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  color="secondary"
                  fullWidth
                  size="medium"
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
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
          </Box>
      </Container>   
     </CardContent>
  </Card>)

};

export default Page;
