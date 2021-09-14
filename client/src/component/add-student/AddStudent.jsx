import React from 'react'

// axios
import axios from 'axios';

// material component
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '80%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
    formContainer: {
        margin: '2rem auto',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    
        '& .MuiTextField-root': {
            margin: '1rem auto',
            width: '80%',
            backgroundColor: '#fff'
        }
  }
}));

const AddStudent = ({
    id,
    handleAddStudent,
    name='',
    regNo=null,
    section='',
    grade='',
    update = false,
    handleClose
}) => {
    const [student, setStudent] = React.useState({
        regNo: regNo,
        name: name,
        grade: grade,
        section: section,
    });

    const classes = useStyles();

    const handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post('https://student-management-101.herokuapp.com/api/students', student)
            .then(result => console.log(result))
            .catch(err => console.log(err.message));
        
        setStudent({
            regNo: null,
            name: '',
            grade: '',
            section: '',
        });
        handleAddStudent();
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        
        await axios.put(`https://student-management-101.herokuapp.com/api/students/${id}`, {_id: id, ...student})
            .then(result => alert(result.data.name + " Updated"))
            .catch(err => console.log(err.message));
        
        setStudent({
            regNo: null,
            name: '',
            grade: '',
            section: '',
        });
        handleAddStudent();
        handleClose();
    };

    return (
        <form
            onSubmit={update ? handleUpdate : handleSubmit}
            className={classes.formContainer}
        >
            <TextField
                id="outlined-basic"
                label="Registration Number"
                variant="outlined"
                required
                value={student.regNo}
                onChange={(event) => setStudent({...student, regNo: event.target.value})}
            />
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                required
                value={student.name}
                onChange={(event) => setStudent({...student, name: event.target.value})}
            />
            <TextField
                id="outlined-basic"
                label="Grade"
                variant="outlined"
                value={student.grade}
                onChange={(event) => setStudent({...student, grade: event.target.value})}
            />
            
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Section</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={student.section}
                    onChange={(event) => setStudent({...student, section: event.target.value})}
                >
                <MenuItem value={'A'}>A</MenuItem>
                <MenuItem value={'B'}>B</MenuItem>
                <MenuItem value={'C'}>C</MenuItem>
                </Select>
            </FormControl>

            <Button
                type='submit'
                variant='contained'
                style={{backgroundColor: '#121111', color: '#fff', marginTop: '1rem'}}
            >{update ? 'Update' : 'Add'} Student</Button>
        </form>
    )
}

export default AddStudent
