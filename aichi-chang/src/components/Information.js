import React from 'react'

import { DiJsBadge, DiHtml5, DiCss3Full, DiDjango, DiGithubBadge, DiHeroku, DiMongodb, DiNodejsSmall, DiPostgresql, DiPython, DiReact, DiVisualstudio, DiSass, DiGit } from "react-icons/di"



export default function Information() {
  return (
    <div className='info vh-100-l relative'>

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

        <div className='absolute-l left-3 bottom-1'>
          <h2>PROGRAMMING LANGUAGES</h2>
            <DiJsBadge />
            <DiHtml5 />
            <DiCss3Full />
            <DiDjango />
            <DiGithubBadge />
            <DiHeroku />
            <DiMongodb />
            <DiNodejsSmall />
            <DiPostgresql />
            <DiPython />
            <DiReact /> 
            <DiVisualstudio />
            <DiSass />
            <DiGit />
            Babel
            Express
        </div>

      </div>

      

    </div>
  )
}
