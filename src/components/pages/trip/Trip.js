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
          <Eta time={data.estimated_arrival}/>
          <div>
            Estimated arrival at {data.dropoff_location.name}
          </div>
        </div>
        {/* section 2 */}
        <div>
          <div>
            Esstimated Fare:
            { currencyFormat(data.estimated_fare_min / 100) } - { currencyFormat(data.estimated_fare_max / 100) }
            <img src={Info} alt='info' />
          </div>
          <div>
            Passengers:
            {data.passengers_min} - {data.passengers_max}
          </div>
          <div>
            Payment:
            {data.payment}
          </div>
        </div>
        {/* section 3 pick up */}
        <div>
          <Adress data={pickup} />
        </div>
        {/* section 4 drop off*/}
        <div>
          <Adress data={dropoff} />
        </div>
        {/* section 5 note */}
        <div>
          {data.notes}
          {/* need to add onClick */}
          <img src={Edit} alt='edit' />
        </div>
      </div>
    </PageLayout>
  )
}
