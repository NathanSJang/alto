import React from 'react'
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Divider from '../../layouts/divider/Divider';

export default function Vehicle(props) {
  const { data } = props;

  return (
    <PageLayout
      disabled
      btnText='Identify Vehicle'
    >
      <div className='vehicle-img-container'>
        <img
          className='vehicle-img'
          src={data.image} alt='vehicle-photo' />
      </div>
      {/* section 2 */}
      <div className='vehicle-disc-container'>
        <div className='vehicle-title'>
          Your Vehicle
        </div>
        <div className='vehicle-license'>
          {data.license}
        </div>
        {/* section 3 */}
        <div className='vehicle-info-container'>
          <div className='vehicle-disc'>
            Make / Model <br />
            {data.make}
          </div>
          <div className='vehicle-disc'>
            Color <br />
            {data.color}
          </div>

        </div>
      </div>
    
    </PageLayout>
  )
}
