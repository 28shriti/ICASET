import Image from 'next/image'
import React from 'react'

const ContactCard = (props) => {
  return (
    <div className='bg-[#31363F] h-[300px] w-[300px]  rounded-lg bg-opacity-80  shadow-white'>
      <h1 className='font-black text-white p-[20px] text-[30px]'>Contact us:</h1>
      <div className='text-white mx-5 p-[5px]'>
        <h1 className='font-extrabold text-[20px]'>{props.name}</h1>
        <p>{props.email}</p>
        <p>{props.mobile}</p>
      </div>
    </div>
  )
}

export default ContactCard