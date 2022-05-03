import React from 'react'
import Logo from '../logo/Logo';

export default function PageLayout(props) {
  const { children, btnText, disabled } = props;

  return (
    <div className='layout'>
      <Logo />
      {children}
      <button disabled={disabled}>
        {btnText}
      </button>
    </div>
  )
}
