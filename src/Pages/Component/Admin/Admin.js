import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Registerperson from '../Registerperson/Registerperson';
// import { useTable } from 'react-table';

const Admin = () => {
    const [volunteers,setVolunteers] = useState([])
     useEffect(()=>{
         fetch("http://localhost:5000/volentier")
         .then(res => res.json())
         .then(res => setVolunteers(res))
     },[])
   
    //  const tableInstance = useTable({})
     const navigate = useNavigate()
    return (
        <div className='flex gap-6'>
            <div className='w-60 h-[100vh] shadow-emerald-100'>
                <h1 onClick={()=>navigate("/eventpost")} className='text-center font-bold'><span className='text-xl'>+</span> Add Event</h1>
            </div>
            <div className='bg-[#f4f7fc] w-full'>
              {
                  volunteers.map(vollunter => <Registerperson key={vollunter._id} vollunter ={vollunter}></Registerperson>)
              }
            </div>
        </div>
    );
};

export default Admin;