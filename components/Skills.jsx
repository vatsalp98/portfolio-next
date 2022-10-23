import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWS from '../public/assets/skills/aws.png';
import Flutter from '../public/assets/skills/flutter.png';
import DataBase from '../public/assets/skills/database.png';
import Python from '../public/assets/skills/python.png';

const Skills = () => {
  return (
    <div id='skills' className='bg-[#F5F5F5] dark:bg-[#1f1f1f] w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#b15b5b] font-semibold'>
          Skills
        </p>
        <h2 className='py-4 text-[#1f1f1f] dark:text-white'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-red-100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto '>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-red-100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-red-100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-red-100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-red-100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-red-100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-red-100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-red-100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-red-100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Flutter} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Flutter</h3>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-red-100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={AWS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-red-100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={DataBase} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SQL / NO SQL</h3>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-red-100'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Python} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
