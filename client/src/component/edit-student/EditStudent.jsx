import React from 'react'

// material ui components
import { Divider, IconButton, Modal, Fade, makeStyles } from '@material-ui/core';

// material icon
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ClearIcon from '@material-ui/icons/Clear';

// custom component
import AddStudent from '../add-student/AddStudent';

// axios
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
    paper: {
        // maxHeight: '65%',
        width: '50%',
        overflow: 'scroll',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    },
    paperDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
}));

const EditStudent = ({student, open, handleClose, handleAddStudent}) => {

    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
        //   onClose={() => handleClose()}
        >
          
            <Fade in={open}>
          
                <div className={classes.paper}>
                      
                    <div className={classes.paperDiv} style={{ justifyContent: 'space-between' }}>
                        <h2 id="transition-modal-title" style={{ color: '#111' }}>Update Student</h2>
                        <span>
                            <IconButton onClick={() => handleClose()}>
                                <ClearIcon />
                            </IconButton>
                        </span>
                    </div>

                    <Divider />

                    <div className={classes.container}>
                        <AddStudent
                            id={student?._id}
                            regNo={student?.regNo}
                            name={student?.name}
                            grade={student?.grade}
                            section={student?.section}
                            update={true}
                            handleAddStudent={handleAddStudent}
                            handleClose={handleClose}
                        />
                    </div>
          
                </div>
        
            </Fade>
        
        </Modal>
  )
}

export default EditStudent
