import React, { useState } from 'react';

// styles
import './App.css';

// material icons
import SchoolIcon from '@material-ui/icons/School';

// custom components
import Footer from './component/footer/Footer';
import StudentList from './component/student-list/StudentList';
import AddStudent from './component/add-student/AddStudent';

const App = () => {
    const [addStudent, setAddStudent] = useState(0);

    const handleAddStudent = () => setAddStudent(addStudent + 1);
    return (
        <>
        <div className='container-fluid mx-auto'>
            <div className='row app'>

                <div className='col d-flex align-items-center'>
                        <SchoolIcon className="mx-3" fontSize='large' />
                        <h2>Student Management System</h2>
                </div>

            </div>
            
            <div className='row app_body'>
                
                <div className='col-lg-7 col-xl-7 col-xxl-7 p-3 app_body_box'>
                    <h2 className='text-center'>Students List</h2>
                    <StudentList addStudent={addStudent} />
                </div>

                <div className='col-lg-4 col-xl-4 col-xxl-4 p-3 app_body_box'>
                    <h2 className='text-center'>Add Student</h2>
                    <AddStudent handleAddStudent={handleAddStudent} />
                </div>
            
                <div className='mt-5 p-0 m-0'>
                    <Footer />
                </div>
            </div>
            
        </div>
        </>
    )
}

export default App
