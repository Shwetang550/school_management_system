import React from 'react';
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
      maxHeight: '70vh',
      borderRadius: 10,

      '& .MuiTable-root': {
        borderRadius: 10,
          border: '2px solid #eee'
      },

      '& .MuiTableHead-root .MuiTableRow-root .MuiTableCell-root': {
          backgroundColor: '#111',
          color: '#fff'
      }
  },
});

const StudentList = () => {

    const classes = useStyles();

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
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(i => (
                                <TableRow key={i}>
                                    <TableCell>xyz</TableCell>
                                    <TableCell>xyz</TableCell>
                                    <TableCell>xyz</TableCell>
                                    <TableCell>xyz</TableCell>
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
