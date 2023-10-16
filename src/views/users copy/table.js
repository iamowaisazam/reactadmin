import * as React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {GetUserListAction,setRowsPerPage,setPage,DeleteUserListAction} from "../../store/users/GetUserListSlice";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, IconButton, useTheme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router";

import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';

  export default function DataTable() {

    const {data,loading,errors,rowsPerPage,page} = useSelector((state) => state.GetUserListSlice);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    React.useEffect(() => {
        dispatch(GetUserListAction());
        console.log('component Call');
    },[])

    const handleChangePage = (event, newPage) => {
      dispatch(setPage(newPage));
    };

   
  return (

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {loading == true ? 'Loading' : <>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell sx={{textAlign:'center'}}  >Action</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name} {row.last_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>
                      <Stack sx={{justifyContent:'center'}} direction="row" spacing={2}>
                        <IconButton onClick={() => {navigate("/profile/"+row.id)}} aria-label="Example">
                          <PersonIcon />
                        </IconButton>
                        <IconButton onClick={() => {navigate("/users/edit/"+row.id)}}  aria-label="Example">
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => dispatch(DeleteUserListAction({id:row.id}))} aria-label="Example">
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={(e) => {
          dispatch(setRowsPerPage(+e.target.value));
          dispatch(setPage(0));
        } }
      />
      </>}
    </Paper>
  );
}