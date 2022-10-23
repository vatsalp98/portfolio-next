import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div className='bg-[#1f1f1f] dark:bg-white'>
      <Head>
        <title>Vatsaal | Software Developer</title>
        <meta name="description" content="I’m a software developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="./fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
