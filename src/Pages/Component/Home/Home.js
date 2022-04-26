import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const handleSearch = event =>{
        event.preventDefault()
        const searchText = event.target.search.value
        if(searchText){
            fetch(` http://localhost:5000/service?name=${searchText}`)
            .then(res => res.json())
            .then(data => setServices(data))
        }
    }
    return (
        <div className='mt-16'>
                <div className='mb-20 text-center'>
                <h1 className=' text-center text-5xl'>I grow by helping people in need.</h1>
                <form onSubmit={handleSearch} action="">
                    <input className='w-96 mt-5 p-2 search-input' type="search" name="search" id="" placeholder='search product'/> 
                    <button className='bg-blue-600 p-2 text-white'>search</button>
                </form>
                </div>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
               {
                   services.map(service => <Service key={service._id} service={service}></Service>)
               }
           </div>
        </div>
    );
};

export default Home;