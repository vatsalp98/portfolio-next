import Navbar from '../components/Navbar';
import '../styles/globals.css';
import React, { useState } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';

function MyApp({ Component, pageProps }) {
  
  const [dark, setDark] = useState(true);
  
  const darkModeCallback = () => {
    setDark(!dark);
    console.log(dark);
  }
  
  return (
    <>
      <div className={dark ? 'dark' : ""}>
        <Navbar dark={dark} callBack={darkModeCallback}/>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
