import React from 'react'
import Twitter from '../assets/Twitter.svg'
import Facebook from '../assets/Facebook.svg'
import Instagram from '../assets/Instagram.svg'
import Linkedin from '../assets/Linkedin.svg'
import GitHub from '../assets/GitHub.svg'





function footer() {
  return (
    <section className='footer-section'>
        <div className="icon-container">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
            <img src={GitHub} alt="" />
        </div>
    </section>
  )
}

export default footer