import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className='bg-near-white'>
      <div className='flex flex-column ml5-l pl4-l ml3-ns'>
        
        <h2 className='pa3 mt5'>CONTACT</h2>
        
        <h3 className='pa3 email ma0'>email: aichi.p.chang@gmail.com</h3>
        
        <div className='flex items-center flex-wrap pa3 w-10-m mb6'>
          <Link to='' className='ba br2 pt1 pb1 pr4 pl4 mb2 no-underline near-black pointer bg-near-white mr3-l'>
            Github
          </Link>
          <Link to='' className='ba br2 pt1 pb1 pr4 pl4 mb2 no-underline near-black pointer bg-near-white mr3-l'>
            Tumblr
          </Link>
          <Link to='' className='ba br2 pt1 pb1 pr4 pl4 mb2 no-underline near-black pointer bg-near-white'>
            Linkedin
          </Link>
        </div>

      </div>
    </div>
  )
}
