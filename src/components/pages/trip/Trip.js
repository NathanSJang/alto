import React from 'react';
import Adress from '../../layouts/adress/Adress';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Eta from '../../layouts/eta/Eta';
import Divider from '../../layouts/divider/Divider';
import InfoBold from '../../layouts/infoBold/InfoBold';

export default function Trip(props) {
  const { data } = props;
  const dropoff = data.dropoff_location;
  const pickup = data.pickup_location;
  
  const currencyFormat = (amount) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);


  return (
    <PageLayout
      btnText="cancel trip"
      disabled
    >
      <div className='trip-container'>
        <div className='trip-title'>Your Trip</div>
        {/* section 1 */}
        <div className='trip-eta-container'>
          <Eta
            time={data.estimated_arrival}
            loaction={data.dropoff_location.name}
          />
        </div>
        {/* section 2 */}
        <div className='trip-disc-container'>
          <div className='trip-disc'>
              Esstimated Fare: <br />
              <InfoBold
                style={{ display: 'flex', alignItems: 'flex-start' }}
              >
                { currencyFormat(data.estimated_fare_min / 100) } - { currencyFormat(data.estimated_fare_max / 100) }
                <img
                  className='trip-info-icon'
                  src='../images/Info_icon.png'
                  alt='info'
                />
              </InfoBold>
          </div>
          <div className='trip-disc'>
            Passengers: <br />
            <InfoBold>
              {data.passengers_min} - {data.passengers_max}
            </InfoBold>
          </div>
          <div className='trip-disc'>
            Payment: <br />
            <InfoBold>
              {data.payment}

            </InfoBold>
          </div>
        </div>
        <div className='trip-adress-container'>
          {/* section 3 pick up */}
          <div className='trip-pickup'>
            <Adress data={pickup} />
          </div>
          <Divider width='25%' mb='16px'/>
          {/* section 4 drop off*/}
          <div className='trip-dropoff'>
            <Adress data={dropoff} />
          </div>
          {/* section 5 note */}
          <div className='trip-note'>
            {/* <div> */}
              {data.notes}
              {/* need to add onClick */}
              <img
                className='trip-edit-icon'
                src='../images/Edit_icon.png'
                alt='edit'
              />
            {/* </div> */}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
