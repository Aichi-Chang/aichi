import React from 'react'
import { Link } from 'react-router-dom'

import Navs from './Navs'


export default function Projects() {
  return (
    <div>

      <div className='bg-near-white relative flex flex-wrap'>
        
        <div className='absolute top-3 right-2-l right-1-ns flex flex-wrap justify-end items-center mr3'>
          <h2 className='nav-title dark-gray mr3-l mr3-m f6 f4-l'>
            Full Stack junior web develper based in London
          </h2>
          <h1 className='header mt0 mt3-l mt3-m'>
            Aichi Chang
          </h1>
        </div>



        <div className='project vh-100 mr4 ml4 first flex-l flex-row-l'>
          
          <div className='mr3-l bg-white w-50-l h-50'>  </div>
          
          <div className='w-40-l mb5'>
            
            <h3 className='project-title ma0-l'>
            Project 4 - Workbench
            </h3>
            
            <p className=''>
            Ijji define themselves by a focus on natural fibers, beautiful colors and interesting silhouettess. 
            Their genderless garments informed our laid-back and non-hierarchical user experience with colorful accents.
            </p>

            <div className='flex items-center pt3'>
              <Link to='' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer bg-near-white mr3'>
                View Site
              </Link>
              <Link to='' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer bg-near-white'>
                Github
              </Link>
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
          
          <div className='ml3-l bg-white w-50-l h-50'>  </div>
          
          <div className='w-40-l mb5'>
            
            <h3 className='project-title ma0-l'>
            Project 3 - The Vault
            </h3>
            
            <p className=''>
            Ijji define themselves by a focus on natural fibers, beautiful colors and interesting silhouettess. 
            Their genderless garments informed our laid-back and non-hierarchical user experience with colorful accents.
            </p>

            <div className='flex items-center pt3'>
              <Link to='' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer mr3'>
                View Site
              </Link>
              <Link to='' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer'>
                Github
              </Link>
            </div>

            <ul className='pl3 pt3'>
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
          
          <div className='mr3-l bg-white w-50-l h-50'>  </div>
          
          <div className='w-40-l'>
            
            <h3 className='project-title ma0-l'>
            Project 2 - A + L
            </h3>
            
            <p className=''>
            Ijji define themselves by a focus on natural fibers, beautiful colors and interesting silhouettess. 
            Their genderless garments informed our laid-back and non-hierarchical user experience with colorful accents.
            </p>

            <div className='flex items-center pt3'>
              <Link to='' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer mr3'>
                View Site
              </Link>
              <Link to='' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer'>
                Github
              </Link>
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
          
          <div className='ml3-l bg-white w-50-l h-50'>  </div>
          
          <div className='w-40-l'>
            
            <h3 className='project-title ma0-l'>
            Project 1 - Space Invanders
            </h3>
            
            <p className=''>
            Ijji define themselves by a focus on natural fibers, beautiful colors and interesting silhouettess. 
            Their genderless garments informed our laid-back and non-hierarchical user experience with colorful accents.
            </p>

            <div className='flex items-center pt3'>
              <Link to='' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer mr3'>
                View Site
              </Link>
              <Link to='' className='ba br2 pt1 pb1 pr4 pl4 no-underline near-black pointer'>
                Github
              </Link>
            </div>

            <ul className='pl3 pt3'>
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
