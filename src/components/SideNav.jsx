import React, { useState } from 'react';
import '../assets/main.css'
import { Link } from 'react-scroll'





const SideNav = () => { 
    
    const [nav, active] = useState(false);
    const handleNav = () => {
        active(!nav);
    };
    
   
    
    
    return (
        <div>
            <i onClick={handleNav} className="fa-solid fa-bars md:hidden fixed top-4 right-4 cursor-pointer text-3xl z-[99] text-[#00D8FF]"></i>
            
           
            {
                nav ? (
                
                    <div onClick={handleNav} className='md:hidden fixed w-full h-screen glass flex flex-col justify-center items-center z-20'>
                        <Link onClick={handleNav} to="home" smooth={true} offset={0} duration={500} data-aos="slide-left" data-aos-duration="400" data-aos-delay="50" className="w-[10rem] bg-[#00D8FF] rounded-xl text-center items-center justify-between m-4 p-3 shadow-lg transition-all ease-in-out duration-300">
                                <div><i className="fa-solid fa-house"></i> </div>
                            <span className="font-bold">HOME</span>
                        </Link>
                        <Link onClick={handleNav} to="work" smooth={true} offset={0} duration={500} data-aos="slide-left" data-aos-duration="400" data-aos-delay="100" className="w-[10rem] bg-[#00D8FF] rounded-xl text-center items-center justify-between m-4 p-3 shadow-lg transition-all ease-in-out duration-300">
                            <div><i className="fa fa-th-large" aria-hidden="true"></i> </div>
                            <span className="font-bold">EXPERIENCE</span>
                        </Link>
                        <Link onClick={handleNav} to="project" smooth={true} offset={0} duration={500} data-aos="slide-left" data-aos-duration="400" data-aos-delay="200" className="w-[10rem] bg-[#00D8FF] rounded-xl text-center items-center justify-between m-4 p-3 shadow-lg transition-all ease-in-out duration-300">
                            <div><i className="fa-solid fa-bars-progress"></i> </div>  
                            <span className="font-bold">PROJECT</span>
                        </Link>
                        <Link onClick={handleNav} to="skill" smooth={true} offset={0} duration={500} data-aos="slide-left" data-aos-duration="400" data-aos-delay="300" className="w-[10rem] bg-[#00D8FF] rounded-xl text-center items-center justify-between m-4 p-3 shadow-lg transition-all ease-in-out duration-300">
                            <div><i className="fa fa-database" aria-hidden="true"></i> </div>
                            <span className="font-bold">SKILLS</span>
                        </Link>
                        <Link onClick={handleNav} to="about" smooth={true} offset={0} duration={500} data-aos="slide-left" data-aos-duration="400" data-aos-delay="400" className="w-[10rem] bg-[#00D8FF] rounded-xl text-center items-center justify-between m-4 p-3 shadow-lg transition-all ease-in-out duration-300">
                                <div><i className="fa-solid fa-user"></i> </div>
                            <span className="font-bold">ABOUT</span>
                        </Link>
                        <Link onClick={handleNav} to="contact" smooth={true} offset={0} duration={500} data-aos="slide-left" data-aos-duration="400" data-aos-delay="500" className="w-[10rem] bg-[#00D8FF] rounded-xl text-center items-center justify-between m-4 p-3 shadow-lg transition-all ease-in-out duration-300">
                            <div><i className="fa fa-envelope " aria-hidden="true"></i> </div>
                            <span className="font-bold">CONTACT</span>
                        </Link>
                    </div>
                ) : ('')
            }
           
            <div className="md:flex hidden fixed z-10 ml-5 items-center justify-center height"  data-aos="fade-right" data-aos-delay="200">
                <div className="flex space-y-7 pb-[2rem]">
                    <div className='bg-[#365b61] hovershow rounded-xl flex flex-col text-black shadow-xl py-3'>
                        {/* bug */}
                        <a className="hidden bg-[#00D8FF] shadow-lg m-2 px-4 py-3 rounded-full hover:translate-y-4 ease-in-out transition-all duration-300 relative">                       
                        {/* <i className="fa fa-home" aria-hidden="true"></i> */}
                        * </a>



                        <Link to="home" smooth={true} offset={0} duration={500} className="bg-[#00D8FF]  items-center overflow-hidden flex logoicon  shadowxlg m-2 px-4 py-3 rounded-full hover:translate-x-1 ease-in-out transition-all duration-300 relative">                       
                        <i className="fa fa-house" aria-hidden="true"></i>
                        <div className='px-[2rem]'>Home</div>                        

                        </Link>
                        <Link to="work" smooth={true} offset={0} duration={500} className="bg-[#00D8FF]  items-center overflow-hidden flex logoicon shadow-xl m-2 px-4 py-3 rounded-full hover:translate-x-1 ease-in-out transition-all duration-300 relative">                       
                        <i className="fa-solid fa-bars-progress"></i>
                        <div className='px-[2rem]'>Work</div>                        
          
                        </Link>
                        <Link to="project" smooth={true} offset={0} duration={500} className="bg-[#00D8FF]  items-center overflow-hidden flex logoicon shadow-xl m-2 px-4 py-3 rounded-full hover:translate-x-1 ease-in-out transition-all duration-300 relative">                       
                        <i className="fa fa-th-large" aria-hidden="true"></i>
                        <div className='px-[1.5rem]'>Project</div>                        

                        </Link>
                        <Link to="skill" smooth={true} offset={0} duration={500} className="bg-[#00D8FF]  items-center overflow-hidden flex logoicon shadow-xl m-2 px-4 py-3 rounded-full hover:translate-x-1 ease-in-out transition-all duration-300 relative">                       
                        <i className="fa fa-database" aria-hidden="true"></i>
                        <div className='px-[1.5rem]'>Skills</div>                        
                        </Link>
                        <Link to="about" smooth={true} offset={0} duration={500} className="bg-[#00D8FF]  items-center overflow-hidden flex logoicon shadow-xl m-2 px-4 py-3 rounded-full hover:translate-x-1 ease-in-out transition-all duration-300 relative">                       
                        <i className="fa-solid fa-user"></i>
                        <div className='px-[1.5rem]'>About</div>                        
                        </Link>
                        <Link to="contact" smooth={true} offset={0} duration={500} className="bg-[#00D8FF] items-center overflow-hidden flex  logoicon shadow-xl m-2 px-4 py-3 rounded-full hover:translate-x-1 ease-in-out transition-all duration-300 relative">                       
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                       <div className='px-[1.5rem]'>contact</div>                      
                        </Link>
                        
                  </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
