
import React from 'react';
import gvppsImg from '../public/assets/projects/gvpps.png';
import salonPro from '../public/assets/projects/salonPro.png';
import wedoc from '../public/assets/projects/wedoc.jpg'
import ProjectItem from './ProjectItem';
import parmaartImg from '../public/assets/projects/parmaart1.jpg';
import shiftImg from '../public/assets/projects/background_shift.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full bg-[#F5F5F5] dark:bg-[#1f1f1f]'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#b15b5b] font-semibold'>
          Projects
        </p>
        <h2 className='py-4 text-[#1f1f1f] dark:text-white'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='gvpps.com'
            backgroundImg={gvppsImg}
            projectUrl='/gvpps'
            tech='React JS / Sass / Netlify'
          />
          <ProjectItem
            title='SalonPro App'
            backgroundImg={salonPro}
            projectUrl='/salonPro'
            tech='Flutter / AWS / Next JS'

          />
          <ProjectItem
            title='WeDoc'
            backgroundImg={wedoc}
            projectUrl='/wedoc'
            tech='TypeScript / React / AWS / Next JS / TailwindCSS'

          />
          <ProjectItem
            title='Parmaart Store'
            backgroundImg={parmaartImg}
            projectUrl='/parmaart'
            tech='Next JS / React / TailwindCSS / Firebase '
          />
          <ProjectItem
            title='Shift Manager'
            backgroundImg={shiftImg}
            projectUrl='/shiftmanager'
            tech='Next JS / React / TailwindCSS / Flutter / Typescript / AWS '
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
