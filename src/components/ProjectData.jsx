import React from "react";
import "../assets/main.css";
import { useState } from "react";
import FirstPproject from "./pages/firstPproject";
import SecondPproject from "./pages/secondPproject";
import ThirdPproject from "./pages/thirdPproject";
import { Link } from 'react-scroll'

const ProjectData = () => {

  const [page, setpage] = useState(1)
  const btnclassN = " flex mx-[2rem] mt-12 px-[2rem] py-[1rem] bg-[#00D8FF] font-boldPoppins border-[#0E8388] border-[3px]  text-[#2C3333] rounded-xl"
  return (
    <div id="project" className="bg-[#2E4F4F] ">
      <div className="container m-auto lg:pb-[10rem] pb-[5rem] px-[1rem] text-white ">
        <h1 className="text-[#00D8FF] text-center mb-20 pt-20 md:text-[4rem] text-[2rem] font-boldPoppins md:text-left md:mx-[6rem] u-header relative" data-aos="fade-right">
          Project{" "}
          <span className="hover:opacity-100 opacity-5 transition-all duration-200 ease-in-out">
            <Link to="project" duration={500} smooth={true}> # </Link>
          </span>
        </h1>
          <p className="text-center lg:py-10 max-w-[60rem] mx-auto mb-10 "  data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sequi aliquid possimus illo, hic alias, debitis nihil laudantium
            sunt maiores praesentium sapiente natus, provident ipsam. Voluptatem
            cupiditate at praesentium corrupti!
          </p>
        <div className="max-w-[60rem] mx-auto"  data-aos="slide-up">
          {
            page == 1 ? <FirstPproject/> : page == 2 ? <SecondPproject /> : <ThirdPproject />
          }
          <div className="flex justify-center">
            {page >1 && (<button className={btnclassN} onClick={() => {
            const nextpaga = page - 1
            setpage(nextpaga)
            }}>BACK</button>)}

            {page <3 && (<button className={btnclassN} onClick={() => {
            const nextpaga = page + 1
            setpage(nextpaga)
            }}>NEXT</button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectData;
