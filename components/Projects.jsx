
import React from 'react';
import gvppsImg from '../public/assets/projects/gvpps.png';
import salonPro from '../public/assets/projects/salonPro.png';
import wedoc from '../public/assets/projects/wedoc.jpg'
import ProjectItem from './ProjectItem';

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
          {/*
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
