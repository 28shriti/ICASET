import React from 'react'
import MainContainer from '../components/MainContainer'
// import ComingSoon from '../components/ComingSoon'
import ContactCard from '../components/ContactCard'

export const metadata = {
  title: 'Contact Us',
  description: 'Contact us with the given contact info on this page.'
}

const page = () => {
  return (
    <MainContainer>
      <div className='h-[80vh] bg-black bg-opacity-70 backdrop-blur-sm'>
        <h3 className='text-white text-center py-10 font-extrabold text-3xl'>Contact Us!</h3>
        <div className='w-full flex justify-center items-center'>
          <ContactCard img='/images/defaultImage.jpg' name='Nikhil Mangrulkar' mobile='+91 9876543210' email='nm@ycce.in' />
        </div>
      </div>
    </MainContainer>
  )
}

export default page