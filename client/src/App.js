import React from 'react';

// styles
import './App.css';

// custom components
import Footer from './component/footer/Footer';
import StudentList from './component/student-list/StudentList';
import AddStudent from './component/add-student/AddStudent';

const App = () => {
    return (
        <>
        <div className='container-fluid mx-auto'>
            <div className='row app'>

                <div className='col'>
                    <h2>Student Management System</h2>
                </div>

            </div>
            
            <div className='row app_body'>
                
                <div className='col-lg-7 col-xl-7 col-xxl-7 p-2 app_body_box'>
                    <h2 className='text-center'>Students List</h2>
                    <StudentList />
                </div>

                <div className='col-lg-4 col-xl-4 col-xxl-4 p-2 app_body_box'>
                    <h2 className='text-center'>Add Student</h2>
                    <AddStudent />
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
