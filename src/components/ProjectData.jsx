import React from 'react';
import '../assets/main.css'
import ProjectNav from './ProjectNav';
import FirstPproject from './pages/firstPproject';
import SecondPproject from './pages/secondPproject';
import ThirdPproject from './pages/thirdPproject';
import { Route, Routes } from 'react-router-dom'





const ProjectData = () => {

    return (
        <div id='project' className='bg-[#2E4F4F] text-white '>
            <div className='container m-auto lg:pb-[10rem] pb-[11rem] px-[1rem]'>
            <h1 className='text-[#00D8FF] text-center mb-20 pt-20 md:text-[4rem] text-[2rem] font-boldPoppins md:text-left md:mx-[6rem] u-header relative'>Project <span className='hover:opacity-100 opacity-5 transition-all duration-200 ease-in-out' ><a href="#project"> # </a></span></h1>
                <div className='lg:mx-[10rem] space-y-20'>
                <p className='text-center lg:py-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi aliquid possimus illo, hic alias, debitis nihil laudantium sunt maiores praesentium sapiente natus, provident ipsam. Voluptatem cupiditate at praesentium corrupti!
                </p>
                 <div>
                    <Routes>
                        <Route path="/" element={<FirstPproject/>}/>
                        <Route path="/second" element={<SecondPproject/>}/>
                        <Route path="/third" element={<ThirdPproject/>}/>
                    </Routes>
                 </div>
                <ProjectNav />
            </div>
            </div>
        </div>
    );
}

export default ProjectData;
