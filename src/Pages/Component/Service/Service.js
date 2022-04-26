import React from 'react';

const Service = ({service}) => {
    console.log(service);
    const {name,picture} = service;
    return (
        <div className='w-[270px] mx-auto '>
           <div className=''>
           <img  src={picture} alt=""  />
           </div>
            <div className=' bg-indigo-600 h-[63px] rounded-md'>
            <h3 className='text-xl text-center text-white  rounded'>{name}</h3>
            </div>
        </div>
    );
};

export default Service;