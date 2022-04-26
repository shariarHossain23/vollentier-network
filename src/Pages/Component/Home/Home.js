import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Home = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
               {
                   services.map(service => <Service key={service._id} service={service}></Service>)
               }
           </div>
        </div>
    );
};

export default Home;