import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <h2>Get in Touch</h2>
        <p>Let's talk about your idea</p>
      </div>
      <div>
        <Link to={"/Signup"}><button>Signup</button></Link>
      </div>
    </div>
  )
}

export default Footer