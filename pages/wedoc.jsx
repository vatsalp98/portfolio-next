import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import wedocImg from '../public/assets/projects/wedoc2.jpg';
import Head from 'next/head';

const WeDoc = () => {
    return (
        <>
          <Head>
            <title>Vatsaal | WeDoc </title>
            <meta
              name='description'
              content='Software to help health professionals to schedule their workday with improved booking system and an online portfolio with custom static links.'
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
          src={wedocImg}
          alt='wedoc image'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>WeDoc.me</h2>
          <h3 className='text-[#b15b5b]'>React TS / TailwindCSS / AWS / Next JS </h3>
        </div>
      </div>

      <div className='max-w-[1240px] text-white mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className="text-bold text-[#1f1f1f] dark:text-white">Project</p>
          <h2 className="text-[#b15b5b]">Overview</h2>
          <p className='text-[#1f1f1f] dark:text-white'>
            This app was built using React TS and is hosted on netlify. I built this application
            to help developing countries improve their medical services by enabling local population to book medical experts near them online.
            This would help simplify the working day of the medical expert making them reach a bigger amount of the population, hence keeping the future of the country safe and healthy.
            Since it is a live project, I cannot make the source code public but you are invited to visit the demo and test it out for yourself.
          </p>
          {/* <a
            href='https://github.com/vatsalp98/GVPPS'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 shadow-lg shadow-[#b15b5b]'>Code</button>
          </a> */}
          <a
            href='https://frabjous-sawine-db6f52.netlify.app/'
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

export default WeDoc;