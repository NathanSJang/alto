import React from 'react';
import AltoLogo from '../../../assets/images/Alto_logo.png';

export default function Logo() {

  return (
    <div className='logo-container'>
      <img
        src={AltoLogo}
        alt='alto_logo'
      />
    </div>
  )
};
