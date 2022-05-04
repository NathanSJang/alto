import React from 'react'

export default function Eta(props) {
  const { time, loaction } = props
  let eta = new Date(time).toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'});
  let e = eta.split(' ');

  return (
    <>
      <div>
        <span className='eta'>{e[0]}</span>
        <span className="am-pm">{e[1]}</span>
      </div>
      <div>
      Estimated arrival at {loaction}
      </div>
    </>
  )
}
