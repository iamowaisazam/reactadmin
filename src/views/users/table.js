import * as React from 'react';

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
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Users from "../../data/users";
import { useNavigate } from "react-router";

import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';

  export default function DataTable() {

    const [tableData, settableData] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    let navigate = useNavigate();
    

    React.useEffect(() => {

      settableData(Users);

    },[])

    const handleChangePage = (event, newPage) => {
       setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
       setRowsPerPage(+event.target.value);
       setPage(0);
    };

    const handleDeleteRowsItem = (id) => {
    
        let deletedData = tableData.filter((item) => {
          if(item.id != id){
            return item;
          }else{
            return false;
          }
        });

        // console.log(deletedData);

        settableData(deletedData);
    };


  return (

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow   >
                <TableCell>ID</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell sx={{textAlign:'center'}}  >Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name} {row.last_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell   >
                      <Stack sx={{justifyContent:'center'}} direction="row" spacing={2}>
                        <IconButton onClick={() => {navigate("/profile/"+row.id)}} aria-label="Example">
                          <PersonIcon />
                        </IconButton>
                        <IconButton onClick={() => {navigate("/users/edit/"+row.id)}}  aria-label="Example">
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteRowsItem(row.id)} aria-label="Example">
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
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

  );
}