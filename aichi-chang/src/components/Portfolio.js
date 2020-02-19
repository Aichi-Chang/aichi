import React from 'react'
import Information from './Information'
import Contact from './Contact'
import Projects from './Projects'
import Navs from './Navs'

export default function Portfolio(props) {
  // console.log(props.location.hash)
  return (
    <div className=''>
      <div className='navs z-1'>
         <Navs {...props}/>
       </div>
      <Projects />
      <Information />
      <Contact />
    </div>
  )
}
