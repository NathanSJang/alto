import React from 'react'

export default function Divider(props) {
  const { width, mb } = props;
  
  return (
    <div
      className='divider'
      style={{ width: `${width}`, marginBottom: `${mb}` }}
    >
    </div>
  )
}
