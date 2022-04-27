import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EventPost from '../EventPost/EventPost';

const EventUser = () => {
    const [events,setEvents] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/event")
        .then(response =>{
            console.log(response.data);
            setEvents(response.data)
        })
    },[])

    const handleDelete = id =>{
        const procced = window.confirm("are you sure")
        if(procced){
            axios.delete(`http://localhost:5000/event/${id}`)
            .then(response => {
                console.log(response.data);
                if(response.data.deletedCount > 0){
                    const remianing = events.filter(event => event._id !== id)
                    setEvents(remianing)
                }
            })
        }
    }
    return (
        <div>
            <h1 className='text-xl text-center font-bold'>Event post</h1>

           <div className='grid grid-cols-2 gap-10 px-10'>
           {
                events.map(event => <EventPost key={event._id} event={event} handleDelete={handleDelete}></EventPost>)
            }
           </div>
        </div>
    );
};

export default EventUser;