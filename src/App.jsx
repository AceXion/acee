import React from "react"
import SideNav from "./components/SideNav"
import Main from "./components/Main"
import WorkData from "./components/workData"
import ProjectData from "./components/ProjectData"
import Contact from "./components/Contact"
import SkillsData from "./components/SkillsData"


function App() {
  return (
    <div>
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
