import React from 'react';
import Adress from '../../layouts/adress/Adress';
import Edit from '../../../assets/images/Edit_icon.png';
import PageLayout from '../../layouts/pageLayout/PageLayout';

export default function Trip(props) {
  const { data } = props;
  const dropoff = data.dropoff_location;
  const pickup = data.pickup_location;
  let eta = new Date(data.estimated_arrival).toLocaleTimeString();

  return (
    <PageLayout
      btnText="cancel trip"
      disabled
    >
      <div className='trip-container'>
        <div>Your Trip</div>
        {/* section 1 */}
        <div>
          <div>{eta}</div>
          <div>
            Estimated arrival at {data.dropoff_location.name}
          </div>
        </div>
        {/* section 2 */}
        <div>
          <div>
            esstimated Fare:
            {data.estimated_fare_min} - {data.estimated_fare_max}
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
