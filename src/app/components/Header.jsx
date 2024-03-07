import React from 'react'
import './css/Header.css';
import ycceLogo from '../ycceLogo.jpg';
import icasetLogo from '../icaset_logo.jpg'

// import '.C:/Users/SHRITI/OneDrive/Desktop/icesat/website/icaset/src/icaset_logo.jpg'
// import 'C:/Users/SHRITI/OneDrive/Desktop/icesat/website/icaset/src/ycceLogo.jpg'

const Header = () => {
  return (
    <div className='header'>
      <img src={icasetLogo} alt="icaset_Logo" className='icaset-logo' />
      <h1 className='heading'>International Conference on Application of Science, Engineering and Application</h1>
      <img src={ycceLogo} alt="ycce_Logo" className='ycce-logo' />
    </div>
  )
}

export default Header

