import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
// import {Link} from 'react-router-dom'


export default function Navs() {
  return (
    <div className='flex flex-column-ns justify-center items-start mr3'>
      < Link to='/portfolio#projects' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline gray pointer navs-link tc'>
        Projects
      </Link>
      < Link to='/portfolio#information' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline gray pointer navs-link tc'>
        Information
      </Link>
      < Link to='/portfolio#contact' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline gray pointer navs-link tc'>
        Contact
      </Link>
    </div>

  )
}

