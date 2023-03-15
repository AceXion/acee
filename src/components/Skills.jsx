import React from 'react';
import '../assets/main.css'
const Skills = (props) => {
    return (
        <div className='text-center grid items-center justify-center lg:px-10'>
            <img className=' h-[3rem]  max-w-[10rem] px-10 ' src={props.icons} alt="" />
            <h1 className='py-10 text-[#00d9ff] space'>{props.lang}</h1>
        </div>
    );
}

export default Skills;
