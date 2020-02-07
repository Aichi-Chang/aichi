import React from 'react'
import {NavHashLink as NavLink} from 'react-router-hash-link'


export default function Navs(props) {
  // console.log(props.location.hash)
  return (
    <div className='flex flex-column-l'>
      < NavLink to='#projects'  className={`ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline near-black pointer navs-link tc ${props.location.hash === '#projects' && 'silver'}`}>
        Projects
      </ NavLink>
      < NavLink to='#information' exact className={`ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline near-black pointer navs-link tc ${props.location.hash === '#information' && 'silver'}`}>
        Information
      </ NavLink>
      < NavLink to='#contact' exact className={`ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline near-black pointer navs-link tc ${props.location.hash === '#contact' && 'silver'}`}>
        Contact
      </ NavLink>
    </div>

  )
}
