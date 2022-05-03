import React from 'react'
import ProfileIcon from '../../assets/images/Profile_icon.png';
import VibeIcon from '../../assets/images/Vibes_icon.png'
import data from '../../assets/data/mission.json';

export default function Footer(props) {
  const { data } = props;

  // const { trip } = data;
  let eta = new Date(data.estimated_arrival).toLocaleTimeString();
  // console.log(trip.dropoff_location.name.split(' -'))

  return (
    <div className='footer-container'>
      <img
        className='footer-img'
        src={ProfileIcon}
        alt='Profile'
      />
      <div className='footer-dics'>
        <div>
          {data.dropoff_location.name}
        </div>
        <div>
          {eta}
        </div>
      </div>
      <img
        className='footer-img'
        src={VibeIcon}
        alt='Profile'
      />
    </div>
  )
}
