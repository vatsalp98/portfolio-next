import Image from 'next/image';
import React from 'react';
import salonPro2 from '../public/assets/projects/salonPro2.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
  return (
    <div className='w-full bg-[#1f1f1f]'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-2'
          layout='fill'
          objectFit='cover'
          src={salonPro2}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>SalonPro App</h2>
          <h3 className='text-[#b15b5b]'> Flutter / NextJs / AWS </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-white'>
        <div className='col-span-4'>
          <p className="text-bold">Project</p>
          <h2 className="text-[#b15b5b]">Overview</h2>
          <p>
            I built this app using Dart and the Flutter framework using AWS web services 
            to extend the backend of my app to work for the web front-end as well.
            This application supports user authentication hosted on AWS Cognito, API support 
            using powerful GraphQL endpoints with the help of AWS AppSync. I have also built a 
            full image editor in the app in the Bloc Structure for better stability and performance.
            I have built a working asset download manager using the same Bloc architecture for consistency.
            This application is available on both Google Play Store and Apple Store as SalonPro.
            I was hired by saloneverywhere.com for this service so I cannot provide a link to the source code.
          </p>
          {/* <a
            href='https://github.com/vatsalp98/saloneverywhere-final'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 fill-white' disabled>Code</button>
          </a> */}
          <a
            href='https://saloneverywhere.com/salonpro'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 shadow-lg shadow-[#b15b5b]'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-lg shadow-[#b15b5b] rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Flutter
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AWS Amplify
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next Js
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Flutter Bloc
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> GraphQL
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Serverless
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer text-[#b15b5b]'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
