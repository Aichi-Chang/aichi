import React from 'react'
import Information from './Information'
import Contact from './Contact'
import Projects from './Projects'
import Navs from './Navs'

export default function Portfolio() {
  return (
    <div>
      <div className='navs z-1'>
         <Navs />
       </div>
      <Projects />
      <Information />
      <Contact />
    </div>
  )
}
