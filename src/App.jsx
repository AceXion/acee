import React from "react"
import SideNav from "./components/SideNav"
import Main from "./components/Main"
import WorkData from "./components/workData"
import ProjectData from "./components/ProjectData"
import Contact from "./components/Contact"
import SkillsData from "./components/SkillsData"
import ScrollToTop from "react-scroll-to-top"
import './assets/main.css'
import Cursorapp from "./Cursorapp"
function App() {
  return (
    <div>
      <Cursorapp />
      <div>
        <ScrollToTop className="md:hidden block" smooth top={700} style={{backgroundColor:"#2C3333", boxShadow: "0rem 0rem 1rem #00D8FF" }} component={<i className="fa fa-arrow-up text-[#00D8FF] shadow-2xl" aria-hidden="true"></i>}/>
      </div>
     <SideNav />
     <Main />
     <WorkData />
     <ProjectData />
     <SkillsData />
     <Contact />
    </div>
  )
}
export default App
