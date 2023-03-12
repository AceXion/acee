import React from 'react';
import Skills from '../Skills';
// icons logo
import img1 from '../images/icons8-html-5.svg'
import img2 from '../images/js_logo.svg'
import img3 from '../images/react.svg'
import img4 from '../images/icons8-css3.svg'
// end







const imgOne = 'HTML'
const imgTwo = 'JS'
const imgThree = 'REACT'
const imgFour = 'CSS'

const Skillsp1 = () => {
    return (
        <div className=''>
             <div className='lg:mx-[1.25rem] m-auto grid-cols-2 grid gap-10'>
                    <Skills 
                    icons={img1}
                    lang={imgOne}
                    />
                    <Skills 
                    icons={img2}
                    lang={imgTwo}
                    />
                    <Skills 
                    icons={img3}
                    lang={imgThree}
                    />
                    <Skills 
                    icons={img4}
                    lang={imgFour}
                    />
                </div>
        </div>
    );
}

export default Skillsp1;
