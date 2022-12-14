import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';

const About = () => {
  return (
    <div id='about' className='bg-[#F5F5F5] dark:bg-[#1f1f1f] w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='px-2 uppercase text-xl tracking-widest text-[#b15b5b] font-semibold'>
            About
          </p>
          <h2 className='py-4 px-2 text-[#1f1f1f] dark:text-white'>Who I Am</h2>
          <p className='py-2 px-2 text-[#1f1f1f] dark:text-white text-lg'>
            / / I am not your average developer
          </p>
          <p className='py-2 px-2 text-[#1f1f1f] dark:text-white'>
            I have always had a knack for technology and working with computers. In 2005, I started working
            with HTML and CSS to make some minor edits on a small business
            website that I was operating. What I thought was just a few small
            edits turned into a love for programming.
          </p>
          <p className='py-2 px-2 text-[#1f1f1f] dark:text-white'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I am
            now spending my time building projects with Next JS, AWS, Azure and
            learning new technologies.
          </p>
          <Link href='/#projects'>
            <p className='px-2 py-2 text-[#b15b5b] underline cursor-pointer hover:font-bold duration-100'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
