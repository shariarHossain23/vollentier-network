import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../logos/Group 1329.png';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () =>{
        signOut(auth)
    }
    return (
        <div className='md:flex justify-between items-center px-32 header-style'>
            <div>
                <img width={200} src={logo} alt="" />
            </div>
            <div className='md:flex gap-6'>
                <CustomLink className='font-bold' to='/'>Home</CustomLink>
                <CustomLink className='font-bold' to='/donation'>Donation</CustomLink>
                <CustomLink className='font-bold' to='/event'>Event</CustomLink>
                <CustomLink className='font-bold' to='/blogs'>Blogs</CustomLink>
                {
                    user ? <a onClick={handleSignOut} className='font-bold'>Logout</a>:<CustomLink className='font-bold' to='/login'>Login</CustomLink>
                }
                <Link className="bg-blue-600 px-4 py-2 text-white" to='/register'>Register</Link>
                <Link className="bg-gray-400 px-4 py-2 text-white" to='/admin'>Admin</Link>
            </div>
        </div>
    );
};

export default Header;