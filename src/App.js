import React, { useState } from 'react';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Routes } from './components/Routes';
import    './css/mycss.module.css'
//import styles from './css/mycss.module.css'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
     <div className={darkTheme ? 'dark' : ''}> 
   

       <div className="dark:bg-blue-900 bg-blue-100 dark:text-blue-200 black min-h-screen"> 
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
     </div> 

  );
};

export default App;