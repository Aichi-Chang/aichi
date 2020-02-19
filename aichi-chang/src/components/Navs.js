import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function Navs(props) {
  // console.log(props.location.hash)


  return (
    <div className='flex flex-column-l justify-center items-start'>
      < Link to='/portfolio#projects'  className={`ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline near-black pointer navs-link tc ${props.location.hash === '#projects' && 'silver'}`}>
        Projects
      </ Link>
      < Link to='/portfolio#information' className={`ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline near-black pointer navs-link tc ${props.location.hash === '#information' && 'silver'}`}>
        Information
      </ Link>
      < Link to='/portfolio#contact' className={`ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline near-black pointer navs-link tc ${props.location.hash === '#contact' && 'silver'}`}>
        Contact
      </ Link>
    </div>

  )
}
