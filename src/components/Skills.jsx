import React from 'react';

const Skills = (props) => {
    return (
        <div className='container my-[3rem]'>
            <div className='p-[1rem] flex flex-col text-3xl justify-center items-center text-center space-y-8 bg-[#0E8388] hover:shadow-xl rounded-xl'>
                <img className='max-w-[5rem] w-[5rem]' src={props.icons} alt="" />
                <h1>{props.lang}</h1>
            </div>
        </div>
    );
}

export default Skills;
