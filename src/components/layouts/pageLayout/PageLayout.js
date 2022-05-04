import React from 'react'

export default function PageLayout(props) {
  const { children, btnText, disabled, isLast } = props;

  return (
    <div className={isLast ? 'layout-last' : 'layout'}>
      <div className='layout-container'>
        {children}
      </div>
      <div className='layout-btn-container'>
        <button
          className='layout-btn'
          disabled={disabled}
        >
          {btnText}
        </button>
      </div>
    </div>
  )
}
