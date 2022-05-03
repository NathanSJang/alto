import React from 'react'

export default function PageLayout(props) {
  const { children, btnText, disabled } = props;

  return (
    <div className='layout'>
      {children}
      <div className='layout-btn-container'>
        <button className='layout-btn' disabled={disabled}>
          {btnText}
        </button>
      </div>
    </div>
  )
}
