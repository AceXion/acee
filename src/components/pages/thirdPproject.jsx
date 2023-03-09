import React from 'react';
import Project from '../Project';


// this is the image area
import fof from '../images/404.webp'
// end

const ThirdPproject = () => {
    return (
        <div>
            <h1 className='text-center font-thinPoppins mb-5'>3/3</h1>
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

        </div>
    );
}

export default ThirdPproject;
