import React from 'react';
import Skills from '../Skills';
// icons logo
import img1 from '../images/cmd.svg'
import img2 from '../images/github.svg'
import img3 from '../images/tailwind.svg'
import img4 from '../images/icons8-css3.svg'
// end



const imgOne = 'CMD'
const imgTwo = 'GIT'
const imgThree = 'TAILWIND'
const imgFour = ''



const Skillsp2 = () => {
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
                    {/* <Skills 
                    icons={img4}
                    lang={imgFour}
                    /> */}
                </div>
        </div>
    );
}

export default Skillsp2;
