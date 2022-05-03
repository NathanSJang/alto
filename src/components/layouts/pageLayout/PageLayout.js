import React from 'react'

export default function PageLayout(props) {
  const { children, btnText, disabled } = props;

  return (
    <div className='layout'>
      {children}
      <button disabled={disabled}>
        {btnText}
      </button>
    </div>
  )
}
