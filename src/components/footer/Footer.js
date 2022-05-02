import React from 'react'
import ProfileIcon from '../../assets/images/Profile_icon.png';
import VibeIcon from '../../assets/images/Vibes_icon.png'
import data from '../../assets/data/mission.json';

export default function Footer() {
  const { trip } = data;
  const time = trip.estimated_arrival;
  let eta = new Date(time)

  return (
    <div>
      <img src={ProfileIcon} alt='Profile'/>
      {trip.dropoff_location.name}
      {eta.toLocaleTimeString()}
      <img src={VibeIcon} alt='Profile'/>
    </div>
  )
}
