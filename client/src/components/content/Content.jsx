import React from 'react'
import "./content.css"
import Content_skills from '../content_skills/Content_skills'

const Content = () => {
  return (
    <div className='content_wrapper'>
      <div className='content_wrapper_left'>
        <h2>
          Publication on <br /> Design & Full-Stock Developer
        </h2>
        <button>MEDIUM PROFILE</button>
      </div>
      <div className='content_wrapper_right'>
<Content_skills
        heading={"Core Tools of a Startup UI & UX Designer"}
        title={ `A fast paced environment is t the core of hyper growth in any successful
            startups. As...`}
        />

<Content_skills
        heading={`Your New Favorite Habits for Being More Protective`}
        title={ `When  you're designing or writing a piece of code and then decide to leave it and come back to it later...`}
        />

<Content_skills
        heading={`Design THe YourMechanic Advice Web Experience`}
        title={ `When people first visit yourmachine they mostly fall into two groups:"I know what i need-let's book the service...`}
        />        
          
<Content_skills
        heading={"How to Get Started With JavaScript"}
        title={ `Tips and Resource That Will Kickstart your javascript Adventure...`}
        />

<Content_skills
        heading={`How to Make Multi-Layered Parallax Illustration with CSS & JavaScript`}
        title={ `i will be showing you how to create a simple multi-layered illustration with depth...`}
        />
    </div>
    </div>
  )
}

export default Content