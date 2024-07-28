import Image from 'next/image';
import React from 'react';

const ContactCard = (props) => {
  return (
    <div className="bg-[#31363F] h-[300px] w-[300px] rounded-lg shadow-lg text-center  bg-opacity-80">
      <h1 className="text-white text-xl p-2 ">Contact Us:</h1>

      <div className=" rounded-lg">
        <div className="rounded-t-lg h-[180px] flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold ">Dr. {props.name}</h2>
        </div>
        <div>
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
