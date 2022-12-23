import Image from 'next/image';
import React from 'react';
import gvppsImg from '../public/assets/projects/gvpps.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Head from 'next/head';

const property = () => {
  return (
    <>
      <Head>
            <title>Vatsaal | G.V.P.P.S</title>
            <meta
              name='description'
              content='Website to promote a newly opened table tennis club and help them attain attraction through improved SEO performance.'
            />
            <link rel='icon' href='/fav.png' />
      </Head>
    
    <div className='w-full bg-[#F5F5F5] dark:bg-[#1f1f1f]'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={gvppsImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>gvpps.com</h2>
          <h3 className='text-[#b15b5b]'>React JS / Sass / Netlify</h3>
        </div>
      </div>

      <div className='max-w-[1240px] text-white mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className="font-semibold text-[#1f1f1f] dark:text-white">Project</p>
          <h2 className="text-[#b15b5b]">Overview</h2>
          <p className='text-[#1f1f1f] dark:text-white'>
            This app was built using React JS and is hosted on netlify. I built this website 
            to help a local bussiness get online presence as well as SEO benefits for better local discoverability.
            This website is built to be as lightweight and fast as possible.
          </p>
          <a
            href='https://github.com/vatsalp98/GVPPS'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 shadow-lg shadow-[#b15b5b] text-[#1f1f1f] dark:text-white font-semibold hover:bg-[#b15b5b] duration-200'>Code</button>
          </a>
          <a
            href='https://gvpps.com/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 shadow-lg shadow-[#b15b5b] text-[#1f1f1f] dark:text-white font-semibold hover:bg-[#b15b5b] duration-200'>Demo</button>
          </a>
        </div>
        <div className='text-white col-span-4 md:col-span-1 shadow-lg shadow-[#b15b5b] rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 text-[#1f1f1f] dark:text-white'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-[#1f1f1f] dark:text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-[#1f1f1f] dark:text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-[#1f1f1f] dark:text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-[#1f1f1f] dark:text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-[#1f1f1f] dark:text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google API
              </p>
              <p className='text-[#1f1f1f] dark:text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Zillow API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer hover:font-bold duration-100 text-md text-[#b15b5b]'>Back</p>
        </Link>
      </div>
    </div>
    </>
  );
};

export default property;
