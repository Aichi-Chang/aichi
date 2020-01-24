import React from 'react'
import { Link } from 'react-router-dom'

export default function Navs() {
  return (
    <div className='flex items-center justify-around mr3 ml3'>
      < Link to='' className='ba br2 pt2 pb2 pr3 pl3 no-underline near-black pointer bg-near-white'>
        Projects
      </Link>
      <Link to='' className='ba br2 pt2 pb2 pr3 pl3 no-underline near-black pointer bg-near-white'>
        Information
      </Link>
      <Link to='' className='ba br2 pt2 pb2 pr3 pl3 no-underline near-black pointer bg-near-white'>
        Contact
      </Link>
    </div>

  )
}
