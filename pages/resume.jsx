import React from 'react';
import Head from 'next/head';
import { FaGithub, FaDownload, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Vatsaal | Resume</title>
        <meta
          name='description'
          content='I’m a software developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px] bg-[#1f1f1f]'>
        <h2 className='text-center text-white'>Resume</h2>
        <div className='bg-[#b15b5b] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Vatsaal Parmar</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/vatsalparmar98/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/vatsalp98'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='resume.pdf'
              target='_blank'
              rel='noreferrer'
              download="Vatsaal_resume.pdf"
            >
              <FaDownload size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center text-white py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Software Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden text-white'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p className="px-2 text-white">
          Analytical, innovative, and motivated software development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4 text-white'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> Flutter
            <span className='px-2'>|</span> HTML<span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Shell
            <span className='px-2'>|</span> JavaScript
            <span className='px-2'>|</span> Python
            <span className='px-2'>|</span> Java
            <span className='px-2'>|</span> R
            <span className='px-2'>|</span> LaTex
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud Practitioner
            <span className='px-2'>|</span>Amplify
            <span className='px-2'>|</span>Dynamo
            <span className='px-2'>|</span>Cognito
            <span className='px-2'>|</span>AppSync
            <span className='px-2'>|</span>RDS
            <span className='px-2'>|</span>CloudFormation
            <span className='px-2'>|</span>Route53
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4 text-white'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6 text-white'>
          <p className='italic'>
            <span className='font-bold'>gvpps.com</span>
            <span className='px-2'>|</span>Vancouver, CA
          </p>
          <p className='py-1 italic'>Freelance Web Developer (2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lead developer of the website working with a designer to ensure quality 
              of the products.
            </li>
            <li>
              Worked with the business to increase SEO score on Google Search Index.
            </li>
            <li>
              Maintaining and adding features to the website as desired by the business.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6 text-white'>
          <p className='italic'>
            <span className='font-bold italic'>
              Saloneverywhere.com,
            </span>
            <span className='px-2'>|</span>Toronto, CA
          </p>
          <p className='py-1 italic'>Mobile Developer (2020 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              App designed in Bloc architecture for better performance and code readability.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Implemented a working sync mechanism for databases to enable offline usage of the app.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6 text-white'>
          <p className='italic'>
            <span className='font-bold italic'>
              ALGO Communications LTD,
            </span>
            <span className='px-2'>|</span>Vancouver, CA
          </p>
          <p className='py-1 italic'>Electrical Assembler (2021 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Assembled different PCB of radio communication devices for quality assurance phase.
            </li>
            <li>
              Tested finished products for accuracy and performance, returning the defectives one for a re-assembly.
            </li>
            <li>
              Flashing PCB with their respective firmware versions for the testing phase.
            </li>
          </ul>
        </div>
        {/* Experience */}
      </div>
    </>
  );
};

export default resume;
