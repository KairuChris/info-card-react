import React from 'react'
import profile from '../assets/avatar.jpeg'
import mailIcon from '../assets/Mail.svg'

function info() {
  return (
    <section className='info-section'>
        <img className='avatar' src={profile} alt="avatar"/>
        <div>
        <h3>Kyle Christopher V. Guiang</h3>
        <button className="email">
            <img src={mailIcon} alt="" />Email
        </button>
        </div>
       
    </section>
  )
}

export default info