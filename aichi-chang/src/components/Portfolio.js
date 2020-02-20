import React, { useState, useEffect, useRef} from 'react'
import Information from './Information'
import Contact from './Contact'
import Projects from './Projects'
import Navs from './Navs'

export default function Portfolio(props) {
  // console.log(props.location.hash)

  const sections =  document.querySelectorAll('section')
  const bodyTag = document.querySelector('body')


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  const handleScroll = e => {
    const topViewport = window.pageYOffset
    const midViewport = topViewport - (window.innerHeight / 2)
  
    // sections.forEach((section, index) => {
    //   const topSection = sectionRef.current.offsetTop
    //   const midSection = topSection - (section.offsetHeight / 2)
  
    //   const distance = midViewport - midSection
  
    //   if (distance > 0) {
    //     console.log('hello')
    //   }
  
    // })
  
    
  }


  return (
    <div className='' onScroll={handleScroll}>
      <div className='navs z-1'>
         <Navs {...props}/>
       </div>
      <Projects  />
      <Information />
      <Contact  />
    </div>
  )
}
