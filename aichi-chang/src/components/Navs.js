import React, {useEffect} from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function Navs(props) {
  // console.log(props.location.hash)
  
  const handleScroll = e => {
    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight / 2)
    const projectTag = document.querySelector('#sectionOne')
    const infoTag = document.querySelector('#sectionTwo')
    const contactTag = document.querySelector('#sectionThree')
    
    midViewport < props.infoData ? projectTag.style.color = '#9280df' : projectTag.style.color = '#111111'
    midViewport > props.infoData && midViewport < props.contactData ? infoTag.style.color = '#9280df' : infoTag.style.color = '#111111'
    midViewport > props.contactData ? contactTag.style.color = '#9280df' : contactTag.style.color = '#111111'

    console.log('scroll called')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])


  return (
    <div className='flex flex-column-l justify-center items-start'>
      < Link to='/portfolio#projects' id='sectionOne' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline near-black pointer navs-link tc'>
        Projects
      </ Link>
      < Link to='/portfolio#information' id='sectionTwo' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline near-black pointer navs-link tc'>
        Information
      </ Link>
      < Link to='/portfolio#contact' id='sectionThree' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline near-black pointer navs-link tc'>
        Contact
      </ Link>
    </div>

  )
}
