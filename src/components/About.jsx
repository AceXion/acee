import React from 'react';
import { Link } from 'react-scroll'
const About = () => {
    return (
        <div id='about' className='bg-black'>
            <div className="container m-auto lg:pb-[10rem] pb-[5rem] px-[1rem]">
            <h1 className="text-[#00D8FF] text-center mb-20 pt-20 md:text-[4rem] text-[2rem] font-boldPoppins md:text-left md:mx-[6rem] u-header relative" data-aos="fade-right">
                About{" "}
                <span className="hover:opacity-100 opacity-5 transition-all duration-200 ease-in-out">
                    <Link to="about" duration={500} smooth={true}> # </Link>
                </span>
            </h1>
            </div>

        </div>
    );
}

export default About;
