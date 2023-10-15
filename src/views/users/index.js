import { IconButton} from "@mui/material";
import {Add} from '@mui/icons-material';

import Table from "./table";

import { useTheme } from '@mui/material/styles';

import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { useNavigate } from "react-router";
import React from "react";


const headerSX = {
  '& .MuiCardHeader-action': { mr: 0 }
};


const Page = () => { 
   
  const theme = useTheme();
  let navigate = useNavigate();
  
   return (<>
   

      <Card sx={{border:'1px solid',
          borderColor: theme.palette.primary[200] + 25,
          ':hover': {
            boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
          },}}>


        <CardHeader sx={headerSX} 
          title={<Typography variant="h3">Users List</Typography>}
          action={
            <IconButton onClick={() => {navigate("/users/create")}} aria-label="settings">
            <Add/>
            </IconButton>}
          />
         <Divider />
          <CardContent >
          <Table/>
          </CardContent>
      </Card>
 </> )
}

export default Page;
