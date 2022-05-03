import React from 'react'

export default function Adress(props) {
  const { data } = props;

  return (
    <>
      <div>
        {data.name}
      </div>
      <div>
        {data.street_line1} {data.street_line2}
      </div>
      {data.city},&nbsp;
      {data.state}&nbsp;
      {data.zipcode}
    </>
  )
}
