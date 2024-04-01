import React from 'react'
import MainContainer from '../components/MainContainer'
import ContactCard from '../components/ContactCard'
import Title from '../components/Title'

export const metadata = {
  title: 'Contact Us',
  description: 'Contact us with the given contact info on this page.'
}

const page = () => {
  return (
    <MainContainer>
      <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50">
        <div className='h-[80vh] bg-opacity-70 backdrop-blur-sm flex flex-col items-center gap-10'>
          <Title>Contact Us</Title>
          <div className='w-full flex justify-center items-center px-10'>
            <ContactCard img='/images/defaultImage.jpg' name='Kavita Singh' mobile='+91 8275783031' email='ksingh@ycce.edu' />
          </div>

          <div className='w-full flex justify-center items-center px-10'>
            <ContactCard img='/images/defaultImage.jpg' name='Nikhil Mangrulkar' mobile='+91 776788776' email='nikhil.mangrulkar@ycce.edu' />
          </div>
        </div>
      </div>
    </MainContainer >
  )
}

export default page