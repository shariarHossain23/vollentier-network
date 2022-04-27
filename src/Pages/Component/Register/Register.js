import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import './Register.css';

const Register = () => {

    const handleRegister = async event =>{
        event.preventDefault()
        const volunteer ={
            name:event.target.name.value,
            email:event.target.email.value,
            number:event.target.number.value,
            desc:event.target.description.value,
            organization:event.target.organization.value
        }
        await axios.post('http://localhost:5000/volentier',volunteer)
        .then(response => {
           toast.success("registration successfully")
        })
    }
    return (
        <div className='w-[570px] mx-auto border-2 p-14 mt-14'>
            <h1 className='text-2xl font-bold'>Register as a volunteer</h1>
          <div className='register-form mt-6'>
          <form onSubmit={handleRegister} action="#">
                <input type="text" name="name" id="" placeholder='Name'required/><br />
                <input type="email" name="email" id="" placeholder='Email'required/><br />
                <input type="number" name="number" id="" placeholder='Number'required/><br />
                <input type="text" name="description" id="" placeholder='description'required /><br />
                <input type="text" name="organization" id="" placeholder='Organize books at the library.'required/> <br />
                <button className='w-full bg-blue-500 text-white py-2'>Registration</button>
            </form>
          </div>
        </div>
    );
};

export default Register;