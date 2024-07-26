import Image from 'next/image';
import React from 'react';

const ContactCard = (props) => {
  return (
    <div className="bg-[#31363F] h-[300px] w-[300px] rounded-lg shadow-lg p-5 text-center  bg-opacity-80">
      <h1 className="text-white text-xl mb-5">Contact Us:</h1>
      <div className=" rounded-lg p-5 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-w rounded-t-lg flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold mb-2">{props.name}</h2>
        </div>
        <div className="mt-24 text-left">
          <ol>
          <li className="text-white mb-1">{props.email}</li>
          <li className="text-white">{props.mobile}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
