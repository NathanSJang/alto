import React from 'react'

export default function InfoBold(props) {
  const { children, style } = props;

  return (
    <span
      className='info-bold'
      style={ style }
    >
      {children}
    </span>
  )
}
