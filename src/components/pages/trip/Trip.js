import React from 'react';
import Adress from '../../layouts/adress/Adress';
import PageLayout from '../../layouts/pageLayout/PageLayout';
import Eta from '../../layouts/eta/Eta';
// asset
import Edit from '../../../assets/images/Edit_icon.png';
import Info from '../../../assets/images/Info_icon.png';

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
            <div className='trip-fare'>
              { currencyFormat(data.estimated_fare_min / 100) } - { currencyFormat(data.estimated_fare_max / 100) }
              <img src={Info} alt='info' />
            </div>
          </div>
          <div className='trip-disc'>
            Passengers: <br />
            {data.passengers_min} - {data.passengers_max}
          </div>
          <div className='trip-disc'>
            Payment: <br />
            {data.payment}
          </div>
        </div>
        {/* section 3 pick up */}
        <div className='trip-pickup'>
          <Adress data={pickup} />
        </div>
        {/* section 4 drop off*/}
        <div className='trip-dropoff'>
          <Adress data={dropoff} />
        </div>
        {/* section 5 note */}
        <div className='trip-note'>
          <div>
            {data.notes}
            {/* need to add onClick */}
            <img className='trip-edit-icon' src={Edit} alt='edit' />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
