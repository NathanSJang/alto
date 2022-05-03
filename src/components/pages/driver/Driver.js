import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';

export default function Driver(props) {
  const { data } = props;

  return (
    <PageLayout
      disabled
      btnText='Contact Driver'
    >
      <div>
        <img
          src={data.image}
          alt='driver-photo'
        />
      </div>
      Your Driver
      {data.name}
      {data.bio}
    </PageLayout>
  )
}
