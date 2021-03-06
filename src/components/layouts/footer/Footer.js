import React from 'react'

export default function Footer(props) {
  const { data } = props;

  let eta = new Date(data.estimated_arrival).toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'});

  return (
    <div className='footer-container'>
      <img
        className='footer-img'
        src='../images/Profile_icon.png'
        alt='Profile'
      />
      <div className='footer-dics'>
        <div>
          {data.dropoff_location.name}
        </div>
        <div>
          ETA: {eta}
        </div>
      </div>
      <img
        className='footer-img'
        src='../images/Vibes_icon.png'
        alt='Profile'
      />
    </div>
  )
}
