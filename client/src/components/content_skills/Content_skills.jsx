import React from 'react'
import "./content_skills.css"

const Content_skills = ({heading, title}) => {
  return (
    <div className='Content'>
        <h4>{heading}</h4>
        <small>{title}</small>
    </div>
  )
}

export default Content_skills