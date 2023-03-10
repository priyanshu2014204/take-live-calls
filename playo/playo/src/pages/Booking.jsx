import React from 'react'
import BookingBox from '../component/BookingBox'
import Cities from '../component/Cities'
import Navbar from '../component/Navbar'

const Booking = () => {
  return (
    <div>
      <Navbar bool={true}/>
      <BookingBox/>
      <Cities/>
    </div>
  )
}

export default Booking
