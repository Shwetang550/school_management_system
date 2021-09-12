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

// material icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';

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
    studentRow: {

        '& .MuiTableCell-root .MuiIconButton-edgeStart:hover': {
            color: 'crimson'
        },
        
        '& .MuiTableCell-root .MuiIconButton-edgeEnd:hover': {
            color: '#2196f3'
        }
  }
});

const StudentList = ({addStudent}) => {
    const [studentList, setStudentList] = useState([]);

    const classes = useStyles();

    const handleDelete = async (id) => {
        // await axios.delete('http://localhost:5000/')
    }

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
                            <TableCell align='center'>Registration Number</TableCell>
                            <TableCell align='center'>Name</TableCell>
                            <TableCell align='center'>Grade</TableCell>
                            <TableCell align='center'>Section</TableCell>
                            <TableCell align='center' />
                        </TableRow>
                    </TableHead>
                
                    <TableBody>
                        {
                            studentList?.map(i => (
                                <TableRow key={i._id} className={classes.studentRow}>
                                    <TableCell align='center'>{i?.regNo}</TableCell>
                                    <TableCell align='center' style={{textTransform: 'capitalize'}}>{i?.name}</TableCell>
                                    <TableCell align='center'>{i?.grade}</TableCell>
                                    <TableCell align='center'>{i?.section}</TableCell>
                                    <TableCell align='center'>
                                        <IconButton edge="end"><EditIcon /></IconButton>{" "}|{" "}
                                        <IconButton
                                            edge="start"
                                            onClick={() => handleDelete(i._id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
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
