
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import '../assets/main.css'
import act from '../assets/react.svg'

const Main = () => {

    const name = "AceXion"
    const logo = "ACE"
    
    // links
    
    const github = ""
    const fb = "https://facebook.com"
    const tele = "telegram.com"

    return (
        <div id='home' className="">
            <div className="w-full object-cover object-left h-screen bg-[#2E4F4F] ">
                <span className=" right-0 mx-[30px] fixed mt-[2rem] w-[6rem] font-boldPoppins bg-mirror p-3 rounded-lg md:block hidden  bg-[#2C3333] text-[#00D8FF] outline z-10 "><a href="#home">{logo}</a></span>
                <div className='container m-auto flex pt-[30vh] md:px-[7rem] items-center'>
                    <div className="flex flex-col justify-center lg:items-start items-center h-full w-full  px-1">
                        <h1 className='text-black md:text-5xl lg:text-7xl text-4xl pb-5 font-boldPoppins'>Hi, I'm <span className='text-[#00D8FF]' >{name}</span></h1>
                        <h3 className='md:text-3xl text-2xl flex pt-5'>
                            I'm a
                            {/* change bellow me */}
                        <TypeAnimation
                            sequence={[
                                'Junior Developer !💩',
                                2000, 
                                'Senior Student ! 🤯', 
                                2000, 
                                'Genuine Guy !🥰',
                                2000,
                                'Pinoy !😎',
                                2000,
                                'beginner !',
                                2000
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{paddingLeft:'10px', color: '#00D8FF'}}
                        />
                        </h3>
                        <button className='md:hidden block mt-9 max-w-[25rem] text-base font-boldPoppins bg-[#00D8FF] p-2 rounded-[12px] shadow-lg btn'>Get In Touch</button>    
                        <div className=' pt-[15rem] flex justify-between md:max-w-[370px] max-w-[150px] w-full text-3xl items-center md:pt-20'>
                        <a href={tele} target={'_blank'}>
                            <i className="fab fa-telegram"></i>
                        </a>
                        <a href={fb} target={'_blank'}>
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href={github} target={'_blank'}>
                            <i className="fab fa-github"></i>
                        </a>
                        
                        <button className='text-black md:block hidden max-w-[25rem] text-base font-boldPoppins bg-[#00D8FF] p-2 rounded-[12px] border-b-4 active:border-0 active:mt-1 border-black btn'>
                           <a href="#" target={'_blank'}>Get In Touch</a>
                        </button>
                        </div>
                    </div>
                    {/* logo part */}
                    <div className="lg:block hidden lg:pl-[30px] hover:scale-125 transition-all ease-in-out duration-100">
                        <img className="h-full w-96 mr-20 animation" src={act} alt="/"/>
                    </div>
                </div>
                
            </div> 
        </div>
  )
}

export default Main
