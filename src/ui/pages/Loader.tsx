import { useEffect, useState } from 'react';

import logo from "../assets/lovelia-logo.webp";

export const Loader = () => {


  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(true), 400); 

    return () => clearTimeout(timer); 
  }, []);


  return (
    <div className='loading-container'>
        
    { showLoader && <div className='loading-center-container'>
      
            <div className='logo-container'>
                <img src={logo} alt="logo lovelia" className='loading-image' />
            </div>
      

        <p className='loading-glow '>Loading</p>
        
        </div>}
    </div>
  )
}
