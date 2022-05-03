import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Divider from '../../layouts/divider/Divider';

export default function Driver(props) {
  const { data } = props;

  return (
    <PageLayout
      disabled
      btnText='Contact Driver'
    >
      <div className='driver-img-container'>
        <img
          className='driver-img'
          src={data.image}
          alt='driver-photo'
        />
      </div>
      <div className='driver-disc-container'>
        <div className='driver-title'>Your Driver</div>
        <div className='driver-name'>
          {data.name}
        </div>
        <div className='driver-bio'>
          {/* <div className='divider'></div> */}
          <Divider />
          {data.bio}
        </div>
      </div>
    </PageLayout>
  )
}
