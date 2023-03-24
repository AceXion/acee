import React, {useState, useEffect} from 'react';
import Work from './work';
import '../assets/main.css'
import act from '../assets/react.svg'
import {Link} from 'react-scroll'




const Data = [
    {
        year: 2022,
        title: 'Started',
        details: 'Lorem ipsum dolor sit amet consectetur this kjsdkjnasn ishd khs diashd aishjisidh sh ish adipisicing elit. Facilis, minus.',
        duration: '1 Year'
    },
    {
        year: 2022,
        title: 'Learning',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, animi ullam! Minima esse eligendi animi perspiciatis, expedita eaque libero veniam, placeat nesciunt nemo quasi maxime sed maiores sapiente at cumque.',
        duration: '8 Months'
    },
    {
        year: 2023,
        title: 'Projects',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, minus.  adipisicing elit. Neque, animi ullam! Minima esse eligendi animi perspiciatis, expedi',
        duration: '4 Months'
    },
    {
        year: 2023,
        title: 'Home',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, minus.  adipisicing elit. Neque, animi ullam! Minima esse eligendi animi perspiciatis, expedi',
        duration: '8 Months'
    },
]

const WorkData = () => {
    const [wid, windstate] = useState([window.innerWidth])
    useEffect(()=>{
        const handle = () => { windstate([window.innerWidth])}
        window.addEventListener('resize', handle)
    },[])

    let title 
    
 if (wid <= 1030) {
    title = 'Work'
 }else {
    title = 'Experience'
 }

    return (
        <div id='work' className='bg-[#2C3333] h-full w-full pb-10'>
            <div className="container m-auto">
                <div className='md:flex md:items-center md:justify-between md:max-w-[95%] px-[1rem]'>
                    <h1 className="text-[#00D8FF] text-center mb-20 pt-20 md:text-[4rem] text-[2rem] font-boldPoppins md:text-left md:mx-[6rem] u-header">{title}<span className='hover:opacity-100 opacity-5 transition-all duration-200 ease-in-out' ><Link to="work" duration={500} smooth={true}> # </Link></span></h1>
                    <img className="h-full w-20 mr-20 animation md:block hidden" src={act} alt=""/>
                </div>
                    
                        {
                            Data.map((item, idx)=>(
                                    <Work
                                    key={idx}
                                    year={item.year} 
                                    title={item.title} 
                                    details={item.details}
                                    duration={item.duration}
                                    />
                                )
                            )
                        }
                 
            </div>
        </div>
    );
}



export default WorkData;
