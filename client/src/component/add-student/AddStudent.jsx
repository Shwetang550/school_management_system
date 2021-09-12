import React from 'react'

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

const AddStudent = () => {
    const [student, setStudent] = React.useState({
        regNo: 0,
        name: '',
        grade: '',
        section: '',
    });

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(student);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={classes.formContainer}
        >
            <TextField
                id="outlined-basic"
                label="Registration Number"
                variant="outlined"
                value={student.regNo}
                onChange={(event) => setStudent({...student, regNo: event.target.value})}
            />
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
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
                style={{backgroundColor: '#121111', color: '#fff'}}
            >Add Student</Button>
        </form>
    )
}

export default AddStudent
