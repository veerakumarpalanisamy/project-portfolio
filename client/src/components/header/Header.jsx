import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className='profile'>
        <small>
          DRIBBLE/MEDIUM/TWITTER/FACEBOOK/LINKEDIN/VEERAKUMARPALANISAMY405@GMAIL.COM
        </small>
        <h2>
          Veerakumar is a Multidisipilinary <br />
          Product Designer & Full-Stock <br />
          Developer
        </h2>
      </div>
      <div className='header_wrapper'>
        <div className='header_wrapper_left'>
        <h5>About</h5>
        <small>As both designer and developer of projects that required a <br />
        laser focus on both, I unite form and function to meet both <br />
        user needs  and business goals.</small>
        <br />
        <br />
      

        <small>
          Currently improving customer experiences as Senior UX <br />
          Designer at BrightEdge.
        </small>
        </div>
        <div className='header_wrapper_center'>
          <h5>Specializing in</h5>
         <small>
         
            Research <br /> 
            Protyping&Testing <br />
            Responsive Web Design 
          
          </small>
        </div>
        <div className='header_wrapper-right'>
          <small>
          
            Mobile App Design <br />
            Full-Stock Developer
        
          </small>
          
        </div>
      </div>
    </div>
  )
}

export default Header