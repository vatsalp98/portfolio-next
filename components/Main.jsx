import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Roles from './typing/Roles';

const roleTypes = [
  "Web Developer",
  "Mobile Developer", 
  "Back-end Developer",
  "Front-end Developer",
  "Software Developer",
];

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center dark:bg-[#1f1f1f] bg-[#F5F5F5]'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-[#1f1f1f] dark:text-white font-semibold'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-[#1f1f1f] dark:text-white'>
            Hi, I&#39;m <span className='text-[#b15b5b]'> Vatsaal</span>
          </h1>
          <Roles superpowers={roleTypes} />
          <p className='pb-4 dark:text-white text-[#1f1f1f] sm:max-w-[70%] m-auto'>
            I’m focused on building responsive web and mobile applications while
            focusing on serverless back-end technologies. I am currently developing an application to help developing countries improve their health services.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/vatsalparmar98/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='bg-white rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-blue-400'>
                <FaLinkedinIn className='h-5 w-5 duration-300 hover:text-white'/>
              </div>
            </a>
            <a
              href='https://github.com/vatsalp98'
              target='_blank'
              rel='noreferrer'
            >
              <div className='bg-white rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-green-400'>
                <FaGithub className='h-5 w-5 duration-300 hover:text-white'/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='bg-white rounded-full shadow-lg shadow-orange-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-orange-400'>
                <AiOutlineMail className='h-5 w-5 duration-300 hover:text-white'/>
              </div>
            </Link>
            <Link href='/resume'>
              <div className='bg-white rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-red-400'>
                <BsFillPersonLinesFill className='h-5 w-5 duration-300 hover:text-white'/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
