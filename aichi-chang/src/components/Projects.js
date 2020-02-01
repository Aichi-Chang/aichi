import React from 'react'
import { Slide } from 'react-slideshow-image'

import p41 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-4-1.png'
import p42 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-4-2.png'
import p44 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-4-4.png'
import p45 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-4-5.png'
import p31 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-3-1.png'
import p32 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-3-2.png'
import p33 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-3-3.png'
import p34 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-3-4.png'
import p21 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-2-1.png'
import p22 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-2-2.png'
import p23 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-2-3.png'
import p11 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-1-1.png'
import p12 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-1-2.png'
import p13 from '/Users/phoebec/development/aichi-chang.github.io/aichi-chang/src/assets/p-1-3.png'




export default function Projects() {


const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: false
}

const slideImages = [p41, p42, p44, p45, p31, p32, p33, p34, p21, p22, p23, p11, p12, p13]

  return (
    <div id='projects'>

      <div className='bg-near-white relative flex flex-wrap'>
        
        <div className='absolute top-3 right-2-l right-1-ns flex flex-wrap justify-end items-center mr3'>
          <h2 className='nav-title dark-gray mr3-l mr3-m f6 f4-l'>
            Junior Software Engineer based in London
          </h2>
          <h1 className='name mt0 mt3-l mt3-m'>
            Aichi Chang
          </h1>
        </div>



        <div className='project vh-100 mr4 ml4 first flex-l flex-row-l'>

            <Slide {...properties} className='slide'>
                <div className='each-slide'>
                <span style={{'backgroundImage': `url(${slideImages[3]})`}}></span>
              </div>
              <div className="each-slide">
                <span style={{'backgroundImage': `url(${slideImages[2]})`}}></span>
              </div>
              <div className="each-slide">
                <span style={{'backgroundImage': `url(${slideImages[1]})`}}></span>
              </div>
              <div className="each-slide">
                <span style={{'backgroundImage': `url(${slideImages[0]})`}}></span>
              </div>
          </Slide>
          
          <div className='w-30-l mb5'>
            
            <p className='project-title ma0-l'>
            PROJECT 4 - WORKBENCH
            </p>
            
            <p className=''>
            Workbench is a schedule management app aimed at designers or students managing their on-going projects. Different users will have a clean board to themselves to start with and they will be able to add and update notes or to-do lists. The platform enables users to track their work flow online.
            </p>

            <div className='flex items-center pt3'>
              <a href='https://project-4-workbench.herokuapp.com/' target='blank' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer bg-near-white mr3 grow'>
                View Site
              </a>
              <a href='https://github.com/Aichi-Chang/project-4' target='blank' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer bg-near-white grow'>
                Github
              </a>
            </div>

            <ul className='pl3 pt3'>
              <li>React.JS</li>
              <li>Python</li>
              <li>Django</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tachyons</li>
              <li>Webpack</li>
            </ul>
            
          </div>
        </div>



        <div className='vh-100 mt6 flex-l mr4 ml4 flex-row-reverse-l'>

        <Slide {...properties} className='slide'>
                <div className='each-slide'>
                <span style={{'backgroundImage': `url(${slideImages[4]})`}}></span>
              </div>
              <div className="each-slide">
                <span style={{'backgroundImage': `url(${slideImages[5]})`}}></span>
              </div>
              <div className="each-slide">
                <span style={{'backgroundImage': `url(${slideImages[6]})`}}></span>
              </div>
              <div className="each-slide">
                <span style={{'backgroundImage': `url(${slideImages[7]})`}}></span>
              </div>
          </Slide>
        
          
          <div className='w-30-l mb5 tr'>
            
            <p className='project-title ma0-l'>
            Project 3 - The Vault
            </p>
            
            <p className=''>
            Ijji define themselves by a focus on natural fibers, beautiful colors and interesting silhouettess. 
            Their genderless garments informed our laid-back and non-hierarchical user experience with colorful accents.
            </p>

            <div className='flex items-center justify-end pt3'>
              <a href='https://project-3-the-vault.herokuapp.com/' target='blank' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer mr3 grow'>
                View Site
              </a>
              <a href='https://github.com/Aichi-Chang/The-Vault' target='blank' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer grow'>
                Github
              </a>
            </div>

            <ul className='pr3 pt3' dir="rtl">
              <li>MongoDB</li>
              <li>Express</li>
              <li>React.JS</li>
              <li>Node.JS</li>
              <li>Tachyons</li>
              <li>Bulma</li>
              <li>Mapbox</li>
              <li>Webpack</li>
            </ul>
          
          </div>
        </div>



        <div className='vh-100 mt6 mr4 ml4 flex-l flex-row-l'>
          
        <Slide {...properties} className='slide'>
                <div className='each-slide'>
                <span style={{'backgroundImage': `url(${slideImages[8]})`}}></span>
              </div>
              <div className="each-slide">
                <span style={{'backgroundImage': `url(${slideImages[9]})`}}></span>
              </div>
              <div className="each-slide">
                <span style={{'backgroundImage': `url(${slideImages[10]})`}}></span>
              </div>
          </Slide>
          
          <div className='w-30-l'>
            
            <p className='project-title ma0-l'>
            Project 2 - A + L
            </p>
            
            <p className=''>
            Ijji define themselves by a focus on natural fibers, beautiful colors and interesting silhouettess. 
            Their genderless garments informed our laid-back and non-hierarchical user experience with colorful accents.
            </p>

            <div className='flex items-center pt3'>
              <a href='https://aichi-chang.github.io/Project-2/#/' target='blank' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer mr3 grow'>
                View Site
              </a>
              <a href='https://github.com/Aichi-Chang/Project-2' target='blank' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer grow'>
                Github
              </a>
            </div>

            <ul className='pl3 pt3'>
              <li>React.JS</li>
              <li>API</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bulma</li>
              <li>Mapbox</li>
              <li>Webpack</li>
            </ul>
          
          </div>
        </div>



        

        <div className='vh-100 mt6 mb6 mr4 ml4 flex-l flex-row-reverse-l'>
          
        <Slide {...properties} className='slide'>
                <div className='each-slide'>
                <span style={{'backgroundImage': `url(${slideImages[11]})`}}></span>
              </div>
              <div className="each-slide">
                <span style={{'backgroundImage': `url(${slideImages[12]})`}}></span>
              </div>
              <div className="each-slide">
                <span style={{'backgroundImage': `url(${slideImages[13]})`}}></span>
              </div>
          </Slide>
          
          <div className='w-30-l tr'>
            
            <p className='project-title ma0-l'>
            Project 1 - Space Invanders
            </p>
            
            <p className=''>
            Ijji define themselves by a focus on natural fibers, beautiful colors and interesting silhouettess. 
            Their genderless garments informed our laid-back and non-hierarchical user experience with colorful accents.
            </p>

            <div className='flex items-center justify-end pt3'>
              <a href='https://aichi-chang.github.io/SEI-Project-1/' target='blank' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer mr3 grow'>
                View Site
              </a>
              <a href='https://github.com/Aichi-Chang/SEI-Project-1' target='blank' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer grow'>
                Github
              </a>
            </div>

            <ul className='pl3 pt3' dir="rtl">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          
          </div>
        </div>
        
        
      </div>
    </div>
  )
}
