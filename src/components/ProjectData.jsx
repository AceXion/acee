import React from "react";
import "../assets/main.css";
import { useState } from "react";
import FirstPproject from "./pages/firstPproject";
import SecondPproject from "./pages/secondPproject";
import ThirdPproject from "./pages/thirdPproject";

const ProjectData = () => {

  const [page, setpage] = useState(1)
  console.log(page)
  return (
    <div id="project" className="bg-[#2E4F4F] text-white ">
      <div className="container m-auto lg:pb-[10rem] pb-[11rem] px-[1rem] ">
        <h1 className="text-[#00D8FF] text-center mb-20 pt-20 md:text-[4rem] text-[2rem] font-boldPoppins md:text-left md:mx-[6rem] u-header relative">
          Project{" "}
          <span className="hover:opacity-100 opacity-5 transition-all duration-200 ease-in-out">
            <a href="#project"> # </a>
          </span>
        </h1>
        <div className=" space-y-20 max-w-[60rem] mx-auto">
          <p className="text-center lg:py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sequi aliquid possimus illo, hic alias, debitis nihil laudantium
            sunt maiores praesentium sapiente natus, provident ipsam. Voluptatem
            cupiditate at praesentium corrupti!
          </p>
          {
            page == 1 ? <FirstPproject /> : page == 2 ? <SecondPproject /> : <ThirdPproject />
          }
          <div className="flex justify-center">
            {page >1 && (<button className="bg-black text-white px-5 text-lg rounded-xl py-1 mx-2" onClick={() => {
            const nextpaga = page - 1
            setpage(nextpaga)
            }}>back</button>)}

            {page <3 && (<button className="bg-black text-white px-5 text-lg rounded-xl py-1 mx-2" onClick={() => {
            const nextpaga = page + 1
            setpage(nextpaga)
            }}>next</button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectData;
