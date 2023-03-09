import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import React from 'react';
import '../assets/main.css'

const ProjectNav = () => {
    return (
        <div className='m-auto justify-center flex space-x-10 font-boldPoppins'>
           <h1 class="uppercase pt-1  my-1 rounded-md outline outline-[#00D8FF] outline-0 transition-all hover:outline-4">
             <CustomComp className='md:px-[2rem] p-2  bg-[#2C3333] text-[#00D8FF] rounded-lg' to="/">First</CustomComp> 
             </h1>
           <h1 class="uppercase pt-1 my-1 rounded-md outline outline-[#00D8FF] outline-0 transition-all hover:outline-4">
             <CustomComp className='md:px-[2rem] p-2  bg-[#2C3333] text-[#00D8FF] rounded-lg' to="/second">Second</CustomComp> 
             </h1>
           <h1 class="uppercase pt-1 my-1 rounded-md outline outline-[#00D8FF] outline-0 transition-all hover:outline-4">
             <CustomComp className='md:px-[2rem] p-2  bg-[#2C3333] text-[#00D8FF] rounded-lg' to="/third">third</CustomComp> 
             </h1>
        </div>
    );
}


function CustomComp({to, children, ...props}){
    const isResolve = useResolvedPath(to)
    const match = useMatch({path : isResolve.pathname , end:true})
    return (
        <h1 className={match ? "active" : ""}>
             <Link to={to} {...props}>{children}</Link>
        </h1>
    )
}

export default ProjectNav;
