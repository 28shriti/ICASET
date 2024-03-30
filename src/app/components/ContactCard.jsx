import Image from 'next/image'
import React from 'react'

const ContactCard = (props) => {
  return (
    <div className='flex justify-center items-center gap-5 bg-[#31363F] bg-opacity-80 p-5 rounded-3xl text-white hover:scale-105 transition-all duration-400'>
        <div>
            <Image src={props.img} width={100} height={100} alt='contact-img' className='rounded-[50%]' />
        </div>
        <div>
            <h3 className='font-extrabold'>{props.name}</h3>
            <p>{props.email}</p>
            <p>{props.mobile}</p>
        </div>
    </div>
  )
}

export default ContactCard