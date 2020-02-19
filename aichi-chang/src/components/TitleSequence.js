import React from 'react'
import Nav from './Nav'





export default function TitleSequence() {

  return (
    <div className=''>
        <div className='bg-dark-gray vh-100 flex items-center justify-center'>
          <h1 className='title near-white ma0 pr3 pl3'>
            Junior Software Engineer based in London
          </h1>
          <div className='nav'>
            <Nav />
          </div>
        </div>
    </div>
  )
}
