import React, { useEffect, useState } from 'react';

// axios
import axios from 'axios';

// material components
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden'
  },
    container: {
      minHeight: '50vh',
      maxHeight: '70vh',
      borderRadius: 10,

      '& .MuiTable-root': {
        borderRadius: 10,
          border: '2px solid #eee',
      },

      '& .MuiTableHead-root .MuiTableRow-root .MuiTableCell-root': {
          backgroundColor: '#111',
          color: '#fff'
      }
  },
});

const StudentList = ({addStudent}) => {
    const [studentList, setStudentList] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('http://localhost:5000/api/students')
                .then(result => setStudentList(result.data))
                .catch(err => console.log(err.message));
        };

        fetchData();

    }, [addStudent]);

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Registration Number</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Grade</TableCell>
                            <TableCell>Section</TableCell>
                        </TableRow>
                    </TableHead>
                
                    <TableBody>
                        {
                            studentList?.map(i => (
                                <TableRow key={i}>
                                    <TableCell>{i?.regNo}</TableCell>
                                    <TableCell style={{textTransform: 'capitalize'}}>{i?.name}</TableCell>
                                    <TableCell>{i?.grade}</TableCell>
                                    <TableCell>{i?.section}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default StudentList
