import React from 'react'
import { Link } from 'react-router-dom'

export default function Navs() {
  return (
    <div className='flex flex-column-l'>
      < Link to='' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline near-black pointer nav-link'>
        Projects
      </Link>
      <Link to='' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline near-black pointer nav-link'>
        Information
      </Link>
      <Link to='' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline near-black pointer nav-link'>
        Contact
      </Link>
    </div>

  )
}
