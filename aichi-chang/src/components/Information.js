import React, { useEffect } from 'react'

import { loadCSS } from 'fg-loadcss'



export default function Information() {

  useEffect(() => {
    loadCSS(
      'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'
    )
  },[])


  return (
    <div className='info relative' id='information'>

      <div className='flex flex-wrap justify-center'>
        <div className='w-40-l ma4'>
          <p className='f3'>ABOUT</p>
          <p className='mt4'>
          <br/>
          Coming from a fashion design background, I’ve always enjoyed making things. As a designer, to create good products, it does not only require creativity but also a strong problem-solving approach. I found myself enjoying a lot of the process of learning and coming up with new solutions.
          <br/>
          <br/>
          After working 5 years in the fashion industry, I would like to step out of this scope and explore more possibilities. Web development perfectly combines my design background and creativity with my logical thinking and enthusiasm for learning new skills. This is why I decided to dive into the world of software engineering. 
          <br/>
          <br/>
          I enrolled in the Software Engineering Immersive course at General Assembly. I have learned a lot in these 12 weeks, from coding skills to develop a good understanding of web development and practice working in a team. I look forward to starting a new career that allows me to grow and continue learning as a software developer.
          <br/>
          </p> 
        </div>

        <div className='w-40-l ma4'>
          <p className='f3'>EXPERIENCE</p>
          <p className='mt4'>
          <br/>  
          General Assembly | Software Engineer Immersive (London)
          <br/>
          • 12 weeks immersive bootcamp for full-stack software development
          <br/>
          • 4 projects completed during the course (solo and group projects)
          <br/>
          • Daily stand-up, coding lab challenges during the course, homework.
          <br/>
          </p>

          <p className='mt4'>
          Taipei Representative Office | Admin Assistant (London)
          </p>

          <p className='mt4'>
          SHAO YEN | Freelance Fashion Designer (London)
          </p>

          <p className='mt4'>
          ACNE STUDIOS | Assistant Fashion Designer (Paris)
          </p>

          <p className='mt4'>
          Tally Weijl | Trend Analyst and Concept Designer (Paris)
          </p>


        </div>

        <div className='ml5-l pl4-l ml3-ns mt3 mb6'>
          <p className='pa3 mb0 f3'>PROGRAMMING LANGUAGES</p>

          <div className='flex flex-wrap w-70-l'>
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
            <span className='devicon-webpack-plain icon'></span>
              <p className='text'>Webpack</p>
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
            <span className='devicon-heroku-plain icon'></span>
              <p className='text'>Heroku</p>
            </div>
            <div className='tc icon-text'>
            <span className='devicon-visualstudio-plain icon'></span>
              <p className='text'>VisualStudio</p>
            </div>

          </div>   

        </div>

      </div>

      

    </div>
  )
}
