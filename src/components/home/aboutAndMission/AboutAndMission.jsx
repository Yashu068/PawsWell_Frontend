import React from 'react'
import './AboutAndMission.css'
import about from '../images/dogs.jpg'

const AboutAndMission = () => {
  return (
    <div className='aboutandmission'>
      <div className='leftabout'>
        <div className='leftaboutupper'>
          <div className='aboutus'>
            <h3 className='aboutusstyle'>About Us</h3>
            <h5 className='aboutusstyle'>What we are and our history</h5>
            <p className='aboutusstyle'>Pawfect Care is a digital platform designed to simplify pet health management. From booking appointments to tracking medical records, we help pet owners care for their furry friends with ease and love.</p>
          </div>
        </div>
        <div className='leftaboutlower'>
          <div className='visionandmission'>
            <h3 className='aboutusstyle'>Vision & Mission</h3>
            <h5 id= 'vision' className='aboutusstyle'>What we are and our history</h5>
            <p className='aboutusstyle'>We aim to make quality pet care accessible and effortless. Our mission is to connect pet owners with trusted vets and provide tools that support a healthier, happier life for every pet.</p>
          </div>
        </div>
      </div>
      <div className='rightabout'>
        <img className='rightaboutimage' src={about} alt='about'></img>
      </div>
    </div>
  )
}

export default AboutAndMission