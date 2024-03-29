import * as React from 'react';
import { useParams  } from "react-router-dom";


import { Box, Button, Card, CardHeader, Checkbox, Container, FormControlLabel, Grid, IconButton, Link, TextField, useTheme,Typography,Divider,CardContent } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



import Account from "./account";
import ChangePassword from "./change-password";
import Address from "./address";
import { useSelector } from 'react-redux';

function CustomTabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>{children}</Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


const Page = () => {

    let { id } = useParams();
    const theme = useTheme();
    const userReducer = useSelector((state) => state.userReducer.users);
    const findUser = userReducer.find(el => el.id == id);
    const [value, setValue] = React.useState(0);
    const [profile, setProfile] = React.useState({});

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    


    React.useEffect(() => {

      console.log(findUser);

    },[]);

return (

  <Card sx={{border:'1px solid',borderColor: theme.palette.primary[200] + 25,
  ':hover': {boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'}}}>
     <CardHeader title={<Typography variant="h3">User Profile {findUser?.first_name}</Typography>}/>
        <Divider />
        <CardContent >
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Account" {...a11yProps(0)} />
                        <Tab label="Address" {...a11yProps(1)} />
                        <Tab label="Change Password" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel  value={value} index={0}>
                   <Account profile={findUser} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                   <Address profile={findUser} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                   <ChangePassword profile={findUser} />
                </CustomTabPanel>
            </Box>
     </CardContent>
  </Card>)
};

export default Page;
