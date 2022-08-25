import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import gvppsImg from '../public/assets/projects/gvpps.png';
import salonPro from '../public/assets/projects/salonPro.png';
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full bg-[#1f1f1f]'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#b15b5b]'>
          Projects
        </p>
        <h2 className='py-4 text-white'>What I&apos;ve Built</h2>
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
          {/* <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
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
