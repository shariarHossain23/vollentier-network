import axios from "axios";
import React, { useState } from "react";

const Event = () => {
    const [title,setTitle] = useState("")
    const [date,setDate] = useState("")
    const [desc,setDesc] = useState("")
    const [img,setImg] = useState("")

    const eventPost =  e => {
        e.preventDefault()
        const event ={
            title:title,
            date: date,
            desc:desc,
            img:img
        }
         axios.post("http://localhost:5000/event",event)
        .then(response =>{
            console.log(response);
        })
    }

  return (
    <div>
      <div className="flex gap-6">
        <div className="w-60 h-[100vh] shadow-emerald-100">
          <h1 className="text-center font-bold">
            <span className="text-xl">+</span> Add Event
          </h1>
        </div>
        <div className="bg-[#f4f7fc] w-full">
            <div className="shadow p-10 w-3/4 mx-auto bg-white mt-44 rounded">
              <form   action="">
             <div className="flex gap-10">
              <div className="">
              <label htmlFor="title"> Event title: </label> <br />
               <input onChange={e => setTitle(e.target.value)} className="outline-none border-gray-200 border-2 mb-4"  type="text" name="title" id="" required /> <br />
               <label htmlFor="description">Description:</label> <br />
               <textarea onChange={e => setDesc(e.target.value)} className="outline-none border-2 border-gray-200"  name="description" id="" cols="30" rows="5" required></textarea>
              </div>
             <div>
             <label htmlFor="date">Date:</label>  <br />
               <input onChange={e => setDate(e.target.value)} className="outline-none border-gray-200 border-2 mb-4" type="text" name="date" id="" required/> <br /> 
               <p className="mb-2">Banner:</p>
               <label className="bg-[#e5f3ff] border-2 border-blue-300 px-4 rounded py-2" for="img">Upload photo</label> <br />
               <input onChange={e => setImg(e.target.value)} type="file" id="img" name="img" accept="image/*" required  hidden/>
             </div>
               </div>
               <div className="text-right">
               <button onClick={eventPost} className="bg-blue-400 px-4 py-2 rounded-md text-white">Submit</button>
               </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
