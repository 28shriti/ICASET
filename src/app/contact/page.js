import React from 'react'
import MainContainer from '../components/MainContainer'
import ComingSoon from '../components/ComingSoon'

export const metadata = {
    title: 'Contact Us',
    description: 'Contact us with the given contact info on this page.'
}

const page = () => {
  return (
    <MainContainer>
        <ComingSoon />
    </MainContainer>
  )
}

export default page