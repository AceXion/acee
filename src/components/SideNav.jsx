import React, { useState } from 'react';
import '../assets/main.css'






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
                
                    <div onClick={handleNav} className='md:hidden fixed w-full h-screen glass flex flex-col justify-center items-center z-20 '>
                        <a onClick={handleNav} href="#home" className="w-[17rem] bg-[#00D8FF] rounded-xl text-center items-center justify-center m-4 p-3 shadow-lg transition-all ease-in-out duration-300 hover:translate-x-2 ">
                            <i className="fa-solid fa-house"></i>
                            <span className="font-bold pl-5">HOME</span>
                        </a>
                        <a onClick={handleNav} href="#work" className="w-[17rem] bg-[#00D8FF] rounded-xl text-center items-center justify-center m-4 p-3 shadow-lg transition-all ease-in-out duration-300 hover:translate-x-2 ">
                        <i class="fa fa-th-large" aria-hidden="true"></i>
                            <span className="font-bold pl-5">EXPERIENCE</span>
                        </a>
                        <a onClick={handleNav} href="#project" className="w-[17rem] bg-[#00D8FF] rounded-xl text-center items-center justify-center m-4 p-3 shadow-lg transition-all ease-in-out duration-300 hover:translate-x-2 ">
                        <i class="fa-solid fa-bars-progress"></i>  
                            <span className="font-bold pl-5">PROJECT</span>
                        </a>
                        <a onClick={handleNav} href="#skill" className="w-[17rem] bg-[#00D8FF] rounded-xl text-center items-center justify-center m-4 p-3 shadow-lg transition-all ease-in-out duration-300 hover:translate-x-2 ">
                        <i class="fa fa-database" aria-hidden="true"></i>
                            <span className="font-bold pl-5">SKILLS</span>
                        </a>
                        <a onClick={handleNav} href="#about" className="w-[17rem] bg-[#00D8FF] rounded-xl text-center items-center justify-center m-4 p-3 shadow-lg transition-all ease-in-out duration-300 hover:translate-x-2 ">
                            <i className="fa-solid fa-user"></i>
                            <span className="font-bold pl-5">ABOUT</span>
                        </a>
                        <a onClick={handleNav} href="#contact" className="w-[17rem] bg-[#00D8FF] rounded-xl text-center items-center justify-center m-4 p-3 shadow-lg transition-all ease-in-out duration-300 hover:translate-x-2 ">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                            <span className="font-bold pl-5">CONTACT</span>
                        </a>
                    </div>
                ) : ('')
            }
           
            <div className="md:flex hidden fixed top-[20vh] z-10 ml-5" >
                <div className="flex flex-col space-y-7">
                    
                        {/* bug */}
                        <a className="hidden bg-[#00D8FF] shadow-lg m-2 px-4 py-3 rounded-full hover:translate-y-4 ease-in-out transition-all duration-300 relative">                       
                        {/* <i class="fa fa-home" aria-hidden="true"></i> */}
                        </a>




                        <a href="#home" className="bg-[#00D8FF] shadow-lg m-2 px-4 py-3 rounded-full hover:translate-x-2 ease-in-out transition-all duration-300 relative">                       
                        <i class="fa fa-house" aria-hidden="true"></i>
 
                        </a>
                        <a href="#work" className="bg-[#00D8FF] shadow-lg m-2 px-4 py-3 rounded-full hover:translate-x-2 ease-in-out transition-all duration-300 relative">                       
                        <i class="fa-solid fa-bars-progress"></i>          
                        </a>
                        <a href="#project" className="bg-[#00D8FF] shadow-lg m-2 px-4 py-3 rounded-full hover:translate-x-2 ease-in-out transition-all duration-300 relative">                       
                        <i class="fa fa-th-large" aria-hidden="true"></i>
                        </a>
                        <a href="#skill" className="bg-[#00D8FF] shadow-lg m-2 px-4 py-3 rounded-full hover:translate-x-2 ease-in-out transition-all duration-300 relative">                       
                        <i class="fa fa-database" aria-hidden="true"></i>                      
                        </a>
                        <a href="#about" className="bg-[#00D8FF] shadow-lg m-2 px-4 py-3 rounded-full hover:translate-x-2 ease-in-out transition-all duration-300 relative">                       
                            <i className="fa-solid fa-user"></i>                        
                        </a>
                        <a href="#contact" className="bg-[#00D8FF] shadow-lg m-2 px-4 py-3 rounded-full hover:translate-x-2 ease-in-out transition-all duration-300 relative">                       
                            <i class="fa fa-envelope" aria-hidden="true"></i>                        
                        </a>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
