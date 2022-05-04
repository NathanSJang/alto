import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Divider from '../../layouts/divider/Divider';
import SectionTitle from '../../layouts/sectionTitle/SectionTitle';

export default function Driver(props) {
  const { data } = props;

  return (
    <PageLayout
      disabled
      btnText='Contact Driver'
      navId='driver'
    >
      <div className='driver-img-container'>
        <img
          className='driver-img'
          src={data.image}
          alt='driver-photo'
        />
      </div>
      <div className='driver-disc-container'>
        <SectionTitle>Your Driver</SectionTitle>
        <div className='driver-name'>
          {data.name}
        </div>
        <Divider width='45%' mb='14px' />
        <div className='driver-bio'>
          {data.bio}
        </div>
      </div>
    </PageLayout>
  )
}
