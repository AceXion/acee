import React from 'react';
import '../assets/main.css'

const Work = ({year, title, details, duration}) => {
    return (
        <div className='container m-auto text-lg pb-[5rem] relative' >
            <div className="line relative hidden md:block"></div>
            <ol className='flex flex-wrap md:flex-row relative' data-aos="fade-up">
                    <div className="list w-3 h-3 bg-[#00D8FF] absolute top-3 left-16 rounded-full"  >
                    </div>
                <li className='flex mx-5 font-boldPoppins md:mx-[6rem] relative '>
                    
                    <span className='bg-black text-[#00D8FF] p-1 px-2 rounded-lg mr-4'>{year}</span>
                    <span className='text-[#00D8FF]'>{title} <span className='font-thinPoppins pl-5'>{duration}</span></span>
                </li>
                <p className='mx-5 pb-10 md:mx-[6rem] text-[#c7e2e6]'>{details}</p>
            </ol>
        </div>
    );
}

export default Work;
