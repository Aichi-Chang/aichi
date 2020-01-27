import React, { useState, useEffect } from 'react'

import { loadCSS } from 'fg-loadcss'



export default function Information() {

  useEffect(() => {
    loadCSS(
      'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'
    )
  },[])


  return (
    <div className='info relative'>

      <div className='flex flex-wrap justify-center'>
        <div className='w-40-l ma4'>
          <h2>ABOUT</h2>
          <p className='mt4'>
          I have always enjoyed creativity. Was previously a fashion designer, I am passionate about all different designs, but am also interested in more logical skills, like pattern cutting. After working in fashion for 5 years alongside with some Software Engineers, UX designers… My interest of web development started to fond. I want to have the capacity to build the product pictured in my head.
          <br/>
          <br/>
          After completed a few online courses, I decided to immerse myself more, so I enrolled in Software Engineering Immersive course at General Assembly. I enjoy learning different new languages, working on projects with others and weirdly, debugging.
          <br/>
          <br/>
          Like a dream, now I will be able to combine my creative background and the technical skills. I look forward to start a new career that allows me to grow and continue to hone my skills as a software developer.
          </p> 
        </div>

        <div className='w-40-l ma4'>
          <h2>EXPERIENCE</h2>
          <p className='mt4'>
          General Assembly (London) | Software Engineer Immersive 
          <br/>
          • 12 weeks immersive course
          <br/>
          • 4 projects done during the course (2 solo projects, and 2 team projects)
          <br/>
          • Daily stand-up, coding lab challenges during the course, homework.
          <br/>
          <br/>
          </p>

          <p className='mt4'>
          SHAO YEN (London) | Freelance Designer
          <br/>
          • Concept and art direction research
          <br/>
          • Garment construction and pattern cutting detail consulting
          <br/>
          • Creating sales sheet
          <br/>
          <br/>
          </p>

          <p className='mt4'>
          ACNE STUDIOS (Paris) | Assistant Designer
          <br/>
          • Collage development by hand and on Adobe Photoshop
          <br/>
          • Pattern cutting, draping and toile making
          <br/>
          • 3D prototype developing from hand sketch
          <br/>
          • Fabric and material research from vintage garments
          </p>

        </div>

        <div className='ml5-l pl4-l ml3-ns mt3 mb6'>
          <h2 className='pa3 mb0'>PROGRAMMING LANGUAGES</h2>

          <div className='flex flex-wrap w-60-l'>
            <div className='tc icon-text'>
              <span className='devicon-javascript-plain icon'></span>
              <p className='text'>JavaScript</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-html5-plain plain icon'></span>
              <p className='text'>HTML5</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-css3-plain icon'></span>
              <p className='text'>CSS3</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-sass-original icon'></span>
              <p className='text'>Sass</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-react-original icon'></span>
              <p className='text'>React</p>
            </div>
            <div className='tc icon-text '>
            <span className='devicon-mongodb-plain icon'></span>
              <p className='text'>MongoDB</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-nodejs-plain icon'></span>
              <p className='text'>node.JS</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-express-original icon'></span>
              <p className='text'>Express</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-babel-plain icon'></span>
              <p className='text'>Babel</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-python-plain icon'></span>
              <p className='text'>Python</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-django-plain icon'></span>
              <p className='text'>Django</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-postgresql-plain icon'></span>
              <p className='text'>Postgresql</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-git-plain icon'></span>
              <p className='text'>Git</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-github-plain icon'></span>
              <p className='text'>Github</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-visualstudio-plain icon'></span>
              <p className='text'>VisualStudio</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-heroku-plain icon'></span>
              <p className='text'>Heroku</p>
            </div>
          </div>   

        </div>

      </div>

      

    </div>
  )
}
