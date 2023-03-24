import React from 'react';
import Project from '../Project';


// this is the image area
import fof from '../images/404.webp'
// end

const ThirdPproject = () => {
    return (
        <div>
             {/* third set */}
                <div id='third' className='grid grid-cols-2 gap-12'>

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

                <Project img={fof}
                title='empty' 
                language='none'
                link='#'/>

                </div>
            <h1 className='text-center font-thinPoppins mb-5 pt-[5rem]'>3/3</h1>


        </div>
    );
}

export default ThirdPproject;
