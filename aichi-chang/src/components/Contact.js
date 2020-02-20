import React, { useState, useEffect, useRef } from 'react'

export default function Contact() {

  const section3 = useRef()
  const [top, setTop] = useState('')
  const [height, setHeight] = useState('')

  useEffect(() => {
    setTop(section3.current.offsetTop)
    setHeight(section3.current.offsetHeight)
  },[])

  if(top && height) {
    console.log(top)
    console.log(height)
  } 

  return (
    <div className='bg-near-white' id='contact' ref={section3}>
      <div className='flex flex-column ml5-l pl4-l ml3-ns'>
        
        <p className='pa3 mt5 f3'>CONTACT</p>
        
        <p className='pa3 email ma0 f4'>email: aichi.p.chang@gmail.com</p>
        
        <div className='flex items-center flex-wrap pa3 w-10-m mb6'>
          <a href='https://github.com/Aichi-Chang' target='blank' className='ba br2 pt1 pb1 pr4 pl4 mb2 no-underline near-black pointer bg-near-white mr3-l grow'>
            Github
          </a>
          <a href='https://phoebexxx09.tumblr.com/' target='blank' className='ba br2 pt1 pb1 pr4 pl4 mb2 no-underline near-black pointer bg-near-white mr3-l grow'>
            Tumblr
          </a>
          <a href='https://www.linkedin.com/in/aichi-chang/' target='blank' className='ba br2 pt1 pb1 pr4 pl4 mb2 no-underline near-black pointer bg-near-white grow'>
            Linkedin
          </a>
        </div>

      </div>
    </div>
  )
}
