import React from 'react'


export default function Navs() {
  return (
    <div className='flex flex-column-l'>
      < a href='/portfolio/#projects' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline moon-gray pointer navs-link tc'>
        Projects
      </a>
      < a href='/portfolio/#information' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline moon-gray pointer navs-link tc'>
        Information
      </a>
      < a href='/portfolio/#contact' className='ba br2 pt1 pb1 pr4-l pl4-l pr3 pl3 mb2-l ml1 no-underline moon-gray pointer navs-link tc'>
        Contact
      </a>
    </div>

  )
}

