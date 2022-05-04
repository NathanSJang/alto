import React from 'react';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import SectionTitle from '../../layouts/sectionTitle/SectionTitle';
import Eta from '../../layouts/eta/Eta';
import Divider from '../../layouts/divider/Divider';
import InfoBold from '../../layouts/infoBold/InfoBold';

export default function Map(props) {
  const { data, vibe } = props;

  return (
    <PageLayout
      btnText="Change Vehicle Vibe"
      isLast
      navId='map'
    >
      <div style={{ position: 'relative' }}>
        <div className='map-img-container'>
          <img
            className='map-img'
            src='../images/Map_overview.png'
            alt='map'
          />
        </div>
        <div className='map-icon-container'>
          <img src='../images/Map_icon.png' />
        </div>
      </div>
      <div className='map-disc-container'>
        <SectionTitle>
          Your Trip
        </SectionTitle>
        <div className='map-eta-container'>
          <Eta
            time={data.estimated_arrival}
            loaction={data.dropoff_location.name}
          />
        </div>
        <Divider width='100%' mb='10px' />
        <div className='map-vibe'>
          Current Vibe <br />
          <InfoBold>{vibe.name}</InfoBold>
        </div>
      </div>
    </PageLayout>
  )
}
