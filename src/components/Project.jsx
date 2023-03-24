import React from 'react';
import '../assets/main.css'

const Project = ({img, title, language, link}) => {

    return (
        <div className='relative flex border-4 rounded-3xl overflow-hidden border-[#00D8FF] card' > 
            <img src={img} className="object-cover"/>
            <div className='card-body'>
                <h3 className='md:text-2xl font-boldPoppins text-black tracking-wider'>{title}</h3>
                <p className='text-black'>{language}</p>
                <button className='pbtn bg-slate-900 text-white text-xs md:text-base md:py-1 md:px-3 rounded-lg py-[2px] px-[5px]'><a href={link} target={'_blank'}>View More</a></button>
            </div>

        </div>
    );
}



export default Project;
