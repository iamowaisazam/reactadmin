// material-ui
import { Add } from '@mui/icons-material';
import { Box, Button, Card, CardHeader, Checkbox, Container, FormControlLabel, Grid, IconButton, Link, TextField, useTheme,Typography,Divider,CardContent } from '@mui/material';
import { textAlign } from '@mui/system';
import { CreateUserAction,setFormValue } from "../../store/users/CreateUserSlice";
import { useDispatch, useSelector } from 'react-redux';

// project imports
// import MainCard from 'ui-component/cards/MainCard';

const Page = () => {

   const theme = useTheme();
   const dispatch = useDispatch();
   const {loading,errors,form} = useSelector((state) => state.CreateUserSlice);


   const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(CreateUserAction());      

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
                  name="first_name"
                  value={form.first_name}
                  onChange={(e) => {  
                     dispatch(setFormValue({field:'first_name',value:e.target.value}));
                  }}
                  color="secondary"
                  fullWidth
                  size="medium"
                  label="First Name"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.first_name}</Typography>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="last_name"
                  color="secondary"
                  value={form.last_name}
                  onChange={(e) => {  
                     dispatch(setFormValue({field:'last_name',value:e.target.value}));
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.last_name}</Typography>}
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  color="secondary"
                  value={form.email}
                  onChange={(e) => {  
                     dispatch(setFormValue({field:'email',value:e.target.value}));
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.email}</Typography>}
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  color="secondary"
                  value={form.username}
                  onChange={(e) => {  
                     dispatch(setFormValue({field:'username',value:e.target.value}));
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.username}</Typography>}
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  color="secondary"
                  value={form.phone}
                  onChange={(e) => {  
                     dispatch(setFormValue({field:'phone',value:e.target.value}));
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.phone}</Typography>}
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  fullWidth
                  label="Profession"
                  name="profession"
                  color="secondary"
                  value={form.profession}
                  onChange={(e) => {  
                     dispatch(setFormValue({field:'profession',value:e.target.value}));
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.profession}</Typography>}
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  color="secondary"
                  value={form.country}
                  onChange={(e) => {  
                     dispatch(setFormValue({field:'country',value:e.target.value}));
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.country}</Typography>}
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  color="secondary"
                  value={form.state}
                  onChange={(e) => {  
                     dispatch(setFormValue({field:'state',value:e.target.value}));
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.state}</Typography>}
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={(e) => {  
                     dispatch(setFormValue({field:'city',value:e.target.value}));
                  }}
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.city}</Typography>}
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  fullWidth
                  label="Town"
                  name="town"
                  color="secondary"
                  value={form.town}
                  onChange={(e) => {  
                     dispatch(setFormValue({field:'town',value:e.target.value}));
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.town}</Typography>}
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={form.password}
                  onChange={(e) => {  
                     dispatch(setFormValue({field:'password',value:e.target.value}));
                  }}
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.password}</Typography>}
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  color="secondary"
                  value={form.confirm_password}
                  onChange={(e) => {  
                     dispatch(setFormValue({field:'confirm_password',value:e.target.value}));
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.confirm_password}</Typography>}
              </Grid>
            </Grid>
            <Box component="div"  sx={{textAlign:'center'}} >
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >{loading ? 'Loading....' : 'Submit'}</Button>
            </Box>
          </Box>
      </Container>   
     </CardContent>
  </Card>
  )};

export default Page;
