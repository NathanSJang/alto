import React from 'react'
import PageLayout from '../../layouts/pageLayout/PageLayout'

export default function Vehicle(props) {
  const { data } = props;

  return (
    <PageLayout
      disabled
      btnText='Identify Vehicle'
    >
      <img src={data.image} alt='vehicle-photo' />
      {/* section 2 */}
      Your Vehicle
      {data.license}
      {/* section 3 */}
      Make / Model
      {data.make}
      Color
      {data.color}
    
    </PageLayout>
  )
}
