// material-ui
import { Add } from '@mui/icons-material';
import { Box, Button, Card, CardHeader, Checkbox, Container, FormControlLabel, Grid, IconButton, Link, TextField, useTheme,Typography,Divider,CardContent } from '@mui/material';
import { textAlign } from '@mui/system';
import { setFormValue,EditUserAction,GetUserAction} from "../../store/users/EditUserSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';



const Page = () => {

   const theme = useTheme();
   const dispatch = useDispatch();
   let { id } = useParams();
   const {loading,errors,data,form} = useSelector((state) => state.EditUserSlice);
   

   useEffect(( ) => {

      dispatch(setFormValue({field:'id',value:id}));

      dispatch(GetUserAction());
   },[]);

return (

  <Card sx={{border:'1px solid',borderColor: theme.palette.primary[200] + 25,
  ':hover': {boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'}}}>
     <CardHeader title={<Typography variant="h3">Edit User</Typography>}/>
        <Divider />
        <CardContent >

    { loading == false ?
     <Container component="main" maxWidth="xl">
   
     <Box component="form" noValidate  sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="first_name"
                  color="secondary"
                  fullWidth
                  size="medium"
                  label="First Name"
                  variant="outlined"
                  value={form.first_name}
                  onChange={(e) => {  
                    dispatch(setFormValue({field:'first_name',value:e.target.value}));
                  }}
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
                  value={form.profession}
                  onChange={(e) => {  
                    dispatch(setFormValue({field:'profession',value:e.target.value}));
                  }}
                  color="secondary"
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
                  value={form.country}
                  onChange={(e) => {  
                    dispatch(setFormValue({field:'country',value:e.target.value}));
                  }}
                  color="secondary"
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
                  value={form.state}
                  onChange={(e) => {  
                    dispatch(setFormValue({field:'state',value:e.target.value}));
                  }}
                  color="secondary"
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
                  value={form.town}
                  onChange={(e) => {  
                    dispatch(setFormValue({field:'town',value:e.target.value}));
                  }}
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {<Typography sx={{paddingTop:'5px'}} color={'red'} >{errors.town}</Typography>}
              </Grid>
            </Grid>
            <Box component="div"  sx={{textAlign:'center'}} >
              <Button
                type="button"
                disabled={loading?true:false}
                variant="contained"
                color="secondary"
                onClick={() => dispatch(EditUserAction())}
                sx={{ mt: 3, mb: 2 }}
              >{loading ? 'Loading....' : 'Submit'}</Button>
            </Box>
          </Box>
      </Container> : 'Loading'}
     </CardContent>
  </Card>)
};

export default Page;