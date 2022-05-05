import React from 'react';

// Components
import PageLayout from '../../layouts/pageLayout/PageLayout';
import SectionTitle from '../../layouts/sectionTitle/SectionTitle';
import InfoBold from '../../layouts/infoBold/InfoBold';

export default function Vehicle(props) {
  const { data } = props;

  return (
    <PageLayout
      disabled
      btnText='Identify Vehicle'
      navId='vehicle'
    >
      <div className='vehicle-img-container'>
        <img
          className='vehicle-img'
          src={data.image}
          alt='vehicle'
        />
      </div>
      <div className='vehicle-disc-container'>
        <SectionTitle>
        Your Vehicle
        </SectionTitle>
        <div className='vehicle-license'>
          {data.license}
        </div>
        <div className='vehicle-info-container'>
          <div className='vehicle-disc'>
            Make / Model <br />
            <InfoBold>{data.make}</InfoBold>
          </div>
          <div className='vehicle-disc'>
            Color <br />
            <InfoBold>{data.color}</InfoBold>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
