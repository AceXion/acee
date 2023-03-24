import React from 'react'
import Project from '../Project'

// this is the img area
import landing from '../images/landing.png'
import fof from '../images/404.webp'
// end


const FirstPproject = () => {
    return (
        <div>
                {/* third set */}
                <div id='first' className='grid grid-cols-2 gap-12'>

                <Project img={landing}
                title='Landing Page'
                language='HTML CSS JS' 
                link='https://sauce.pages.dev/'/>

                <Project img={fof}
                title='empty' 
                language='none'
                link='#'/>

                <Project img={fof}
                title='empty' 
                language='none'
                link='#'/>
                
                <Project img={fof}
                title='empty' 
                language='none'
                link='#'/>
             </div>

             <h1 className='text-center font-thinPoppins mb-5 pt-[5rem]'>1/3</h1>
        </div>
    );
}

export default FirstPproject;
