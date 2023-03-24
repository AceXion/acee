import React from 'react';
import Skills from '../Skills';
// icons logo
import img1 from '../images/cmd.svg'
import img2 from '../images/js_logo.svg'
import img3 from '../images/react.svg'
import img4 from '../images/icons8-css3.svg'
// end





const imgOne = ''
const imgTwo = ''
const imgThree = ''
const imgFour = ''




const Skillsp3 = () => {
    return (
        <div className=''>
             <div className='lg:mr-[3rem] m-auto grid-cols-2 grid gap-10'>
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

export default Skillsp3;
