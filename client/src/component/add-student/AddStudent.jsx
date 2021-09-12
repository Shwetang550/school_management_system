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

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={classes.formContainer}
        >
            <TextField id="outlined-basic" label="Registration Number" variant="outlined" />
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Section</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    // onChange={handleChange}
                >
                <MenuItem value={'A'}>A</MenuItem>
                <MenuItem value={'B'}>B</MenuItem>
                <MenuItem value={'C'}>C</MenuItem>
                </Select>
            </FormControl>
            
            <TextField id="outlined-basic" label="Subjects" variant="outlined" />

            <Button
                type='submit'
                variant='contained'
                style={{backgroundColor: '#121111', color: '#fff'}}
            >Add Student</Button>
        </form>
    )
}

export default AddStudent
