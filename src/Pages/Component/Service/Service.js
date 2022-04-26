import React from "react";

const Service = ({ service }) => {
  const { name, picture } = service;
  return (
    <div>
      <div className="w-[270px] mx-auto relative ">
        <div className="">
          <img src={picture} alt="" />
        </div>
        <div className=" absolute bottom-0 w-full bg-indigo-600 h-[70px] rounded-md">
          <h3 className="text-xl text-center text-white mt-4">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Service;
