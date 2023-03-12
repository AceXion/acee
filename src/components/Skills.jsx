import React from 'react';

const Skills = (props) => {
    return (
        <div className='container my-[3rem]'>
            <div className='p-[1rem] flex flex-col text-2xl justify-center items-center text-center space-y-8 bg-[#0E8388] hover:shadow-xl rounded-xl'>
                <img className='lg:max-w-[7.5rem] max-w-[5rem] lg:min-h-[5rem]  lg:w-[10rem] px-5' src={props.icons} alt="" />
                <h1 className='lg:px-[10rem]'>{props.lang}</h1>
            </div>
        </div>
    );
}

export default Skills;
