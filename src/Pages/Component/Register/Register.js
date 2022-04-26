import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='w-[570px] mx-auto border-2'>
            <h1 className='text-2xl font-bold'>Register as a volunteer</h1>
          <div className='register-form'>
          <form action="#">
                <input type="text" name="name" id="" placeholder='Name'/><br />
                <input type="email" name="email" id="" placeholder='Email'/><br />
                <input type="number" name="number" id="" placeholder='Number'/><br />
                <input type="text" name="description" id="" placeholder='description' /><br />
                <input type="text" name="Organization" id="" placeholder='Organize books at the library.'/> <br />
                <input type="button" value="Registration" />
            </form>
          </div>
        </div>
    );
};

export default Register;