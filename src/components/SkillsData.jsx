import React from 'react';
import Skills from './Skills';
import '../assets/main.css'
// icons logo
import html from './images/icons8-html-5.svg'
import js from './images/js_logo.svg'
import react from './images/react.svg'
import css from './images/icons8-css3.svg'
// end


const SkillsData = () => {
    return (
        <div id='skill' className=' bg-[#2C3333]'>
            <h1 className='text-[#00D8FF] text-center mb-20 pt-20 md:text-[4rem] text-[2rem] font-boldPoppins md:text-left md:mx-[6rem] u-header relative'>Skills<span className='hover:opacity-100 opacity-5 transition-all duration-200 ease-in-out' ><a href="#skill"> # </a></span></h1>
            <div className='container m-auto px-[1rem] flex items-center justify-center'>
                <div className='bg-[#2E4F4F] text-black max-w-[30rem] w-[30rem] shadow-xl rounded-[15px]'>
                    <h1 className='text-center text-3xl text-[#00D8FF] font-boldPoppins p-[3rem]'>Front End </h1>
                    <div className=' flex  pb-10 items-center justify-center'>
                        <div className='mx-[3rem]'>
                    <Skills 
                    icons={html}
                    lang='HTML'
                    />
                    <Skills 
                    icons={js}
                    lang='JS'
                    />
                    </div>
                    <div className='mx-[3rem]'>
                    <Skills 
                    icons={react}
                    lang='REACT'
                    />
                    <Skills 
                    icons={css}
                    lang='CSS'
                    />
                    </div>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default SkillsData;
