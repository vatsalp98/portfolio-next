import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import parmaartImg from '../public/assets/projects/parmaart1.jpg';
import Head from 'next/head';

const Parmaart = () => {
    return (
        <>
          <Head>
            <title>Vatsaal | Parmaart</title>
            <meta
              name='description'
              content='Ecommerce website for a local business to help improve their online presence and move into the digital environment.'
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
          src={parmaartImg}
          alt='wedoc image'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Parmaart.store</h2>
          <h3 className='text-[#b15b5b]'>React JS / TailwindCSS / FireBase / Next JS </h3>
        </div>
      </div>

      <div className='max-w-[1240px] text-white mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className="text-bold text-[#1f1f1f] dark:text-white">Project</p>
          <h2 className="text-[#b15b5b]">Overview</h2>
          <p className='text-[#1f1f1f] dark:text-white'>
            This website was made to provide internet presence to a local business in a developing country. This website enables the ecommerce features for the store increasing the sales and the revenue of the business. This is a work in progress.
          </p>
          {/* <a
            href='https://github.com/vatsalp98/GVPPS'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 shadow-lg shadow-[#b15b5b]'>Code</button>
          </a> */}
          <a
            href='https://parmaart.store/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 shadow-lg shadow-[#b15b5b] font-bold text-[#1f1f1f] dark:text-white hover:bg-[#b15b5b] duration-100'>Demo</button>
          </a>
        </div>
        <div className='text-white col-span-4 md:col-span-1 shadow-lg shadow-[#b15b5b] rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 text-[#1f1f1f] dark:text-white'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-[#1f1f1f] dark:text-white py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1 text-[#b15b5b]' /> React
              </p>
              <p className='text-[#1f1f1f] dark:text-white py-2 flex items-center  font-semibold'>
                <RiRadioButtonFill className='pr-1 text-[#b15b5b]' /> Tailwind CSS
              </p>
              <p className='text-[#1f1f1f] dark:text-white py-2 flex items-center  font-semibold'>
                <RiRadioButtonFill className='pr-1 text-[#b15b5b]' /> Typescript
              </p>
              <p className='text-[#1f1f1f] dark:text-white py-2 flex items-center  font-semibold'>
                <RiRadioButtonFill className='pr-1 text-[#b15b5b]' /> AWS Amplify
              </p>
              <p className='text-[#1f1f1f] dark:text-white py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1 text-[#b15b5b]' /> Next JS
              </p>
              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer text-[#b15b5b] hover:font-bold duration-100'>Back</p>
        </Link>
      </div>
    </div>
    </>
    );
}

export default Parmaart;