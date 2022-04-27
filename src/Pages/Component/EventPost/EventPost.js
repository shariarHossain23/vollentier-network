import React from 'react';

const EventPost = ({event,handleDelete}) => {
    const {title,desc,img,date,_id} = event;
   
   
    return (
        <div className='shadow-xl px-4 py-10'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h3>{title}</h3>
            <h3>{date}</h3>
            <p>{desc}</p>
        </div>
        <div className='text-right'>
        <button onClick={()=> handleDelete(_id)}  className='bg-gray-400 text-slate-100 px-4 py-2 rounded-lg'>delete</button>
        </div>
        </div>
    );
};

export default EventPost;