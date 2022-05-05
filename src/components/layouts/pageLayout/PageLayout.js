import React from 'react'

export default function PageLayout(props) {
  const { children, btnText, disabled, isLast, navId } = props;

  return (
    <div className={isLast ? 'layout-last' : 'layout'}>
      <div
        id={`${navId}`}
        className='layout-container'
      >
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
