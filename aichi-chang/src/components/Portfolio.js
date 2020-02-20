import React, { useState, useEffect, useRef} from 'react'
import Information from './Information'
import Contact from './Contact'
import Projects from './Projects'
import Navs from './Navs'

export default function Portfolio(props) {
  // console.log(props.location.hash)

  const [infoData, setInfoData] = useState()
  const [contactData, setContactData] = useState()



  return (
    <div className=''>
      <div className='navs z-1'>
         <Navs {...props} infoData={infoData} contactData={contactData} />
       </div>
      <Projects />
      <Information updateInfoData={setInfoData}/>
      <Contact updateContactData={setContactData} />
    </div>
  )
}
