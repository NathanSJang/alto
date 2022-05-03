import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';

export default function Map(props) {
  const { data, vibe } = props;
  let eta = new Date(data.estimated_arrival).toLocaleTimeString();
  return (
    <PageLayout btnText="Change Vehicle Vibe">
      <img src='../images/Map_overview.png' />
      <img src='../images/Map_icon.png' />
      Your Trip
      {eta}
      {data.dropoff_location.name}
      <div>
        Current Vibe
        {vibe.name}
      </div>
    </PageLayout>
  )
}
