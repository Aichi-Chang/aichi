import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


export default function Navs() {
  return (
    <div className='flex flex-column-l'>
      < Link to='/portfolio#projects' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline moon-gray pointer navs-link tc'>
        Projects
      </Link>
      < Link to='/portfolio#information' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline moon-gray pointer navs-link tc'>
        Information
      </Link>
      < Link href='/portfolio#contact' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline moon-gray pointer navs-link tc'>
        Contact
      </Link>
    </div>

  )
}

