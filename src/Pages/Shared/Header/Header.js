import React from 'react';
import logo from '../../../logos/Group 1329.png';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
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
            </div>
        </div>
    );
};

export default Header;