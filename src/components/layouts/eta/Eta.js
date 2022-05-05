import React from 'react'

export default function Eta(props) {
  const { time, loaction } = props;
  let eta = new Date(time).toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'});
  let [ etaTime, etaAmPm ] = eta.split(' ');

  return (
    <>
      <div>
        <span className='eta'>{etaTime}</span>
        <span className="am-pm">{etaAmPm}</span>
      </div>
      {loaction && 
        <div className='eta-loaction'>
          Estimated arrival at {loaction}
        </div>
      }
    </>
  )
}
