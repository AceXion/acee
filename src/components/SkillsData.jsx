import React from 'react';
import '../assets/main.css'
import Skillsp1 from './pages/Skillsp1';
import { useState } from 'react';
import Skillsp2 from './pages/Skillsp2';
import Skillsp3 from './pages/Skillsp3';
import { Link } from 'react-scroll'

const SkillsData = () => {

const [state, stated] = useState(1)
let title = 'Front End'
const classN = "flex m-auto mt-12 px-[2rem] py-[1rem] bg-[#00D8FF] font-boldPoppins border-[#2E4F4F] border-[3px]  text-[#2C3333] rounded-xl"


    return (
        <div id='skill' className=' bg-[#2C3333]'>
            <h1 className=' text-[#00D8FF] text-center mb-20 pt-20 md:text-[4rem] text-[2rem] font-boldPoppins md:text-left md:mx-[7.7rem] u-header relative'>Skills<span className='hover:opacity-100 opacity-5 transition-all duration-200 ease-in-out' ><Link to="skill" duration={500} smooth={true}> # </Link></span></h1>
            <div className='md:container m-auto px-[1rem] flex items-center justify-center md:max-w-[60%]'>
                <div className='lg:hidden bg-[#2E4F4F] text-[#2C3333] max-w-[30rem] w-[30rem] rounded-[15px] shadow-2xl lxlfont-blackPoppins'>
                    <h1 className='text-center text-3xl text-[#00D8FF] font-boldPoppins p-[3rem]'>{title} </h1>

                    <div className=' flex  pb-10 items-center justify-center'>
                       {
                        state == 1 ? <Skillsp1 /> : state == 2 ? <Skillsp2 /> : <Skillsp3 />
                       }
                    </div>
               </div>
               <div className='lg:flex flex-col  bg-[#2E4F4F] text-[#2C3333]  w-[100vw] rounded-[15px] shadow-2xl xl:font-blackPoppins hidden'>
                    <h1 className='text-center text-3xl text-[#00D8FF] font-boldPoppins p-[3rem]'>Front End </h1>

                    <div className=' grid grid-cols-2 pb-10 m-auto xl:max-w-[100rem]'>
                        <Skillsp1 />
                        <Skillsp2 />
                        {/* <Skillsp3 /> */}
                    </div>
               </div>
            </div>
            <div className='lg:hidden flex mx-auto'>
                    {state >1 && (<button onClick={() => {
                        stated(state - 1)
            
                    }}className={classN}>BACK</button>)}

                   {state <2 &&( <button onClick={() => {
                       stated(state + 1)
                      
                    }}className={classN}>NEXT</button>)}
</div>
        </div>
    );
}

export default SkillsData;
