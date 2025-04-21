import React from 'react'
import './Middle.css'

const Middle = () => {
  return (
    <div className='middle'>
      <div className='c1'>
        <div className='featurebox'>
          <h3 className='fb1'>Clinic News</h3>
          <div className='line1'></div>
          <p className='fb1'>
          Stay updated with the latest news from our clinic! Here you'll find information on new services, upcoming events, special offers, and important announcements to keep your pet's care on track.
          </p>
          <p className='fb1'>
            <button className='fb1button'>Read More</button>
          </p>
        </div>
      </div>
      <div className='c2'>
        <div className='featurebox'>
          <h3 className='fb1'>Top Doctors</h3>
          <div className='line1'></div>
          <p className='fb1'>
          Meet our team of expert veterinarians, dedicated to providing the best care for your pet. Browse their profiles to learn more about their specialties and choose the right doctor for your pet's needs.
          </p>
          <p className='fb1'>
            <button className='fb1button'>Read More</button>
          </p>
        </div>
      </div>
      <div className='c3'>
        <div className='featurebox'>
          <h3 className='fb1'>24/7 Service</h3>
          <div className='line1'></div>
          <p className='fb1'>
          We’re here for you and your pet, 24/7. Whether it’s a routine check-up or an emergency, our clinic is always available to provide the care your pet needs, day or night.
          </p>
          <p className='fb1'>
            <button className='fb1button'>Read More</button>
          </p>
        </div>
      </div>
      <div className='c4'>
        <div className='featurebox'>
          <h3 className='fb1'>Opening Hours</h3>
          <div className='line1'></div>
          <p className='fb1'>
          Monday to Friday: 9:00 AM - 6:00 PM <br/>
          Saturday: 10:00 AM - 4:00 PM <br/>
          Sunday : 10.00 - 4.00 <br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Middle