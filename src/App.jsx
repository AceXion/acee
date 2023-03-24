import React,{useState, useEffect} from "react"
import SideNav from "./components/SideNav"
import Main from "./components/Main"
import WorkData from "./components/workData"
import ProjectData from "./components/ProjectData"
import Contact from "./components/Contact"
import SkillsData from "./components/SkillsData"
import ScrollToTop from "react-scroll-to-top"
import './assets/main.css'
import Cursorapp from "./Cursorapp"
import Loader from "./components/Loader"
import AOS from "aos"
import 'aos/dist/aos.css'
import About from "./components/about"


// aos
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

})


function App() {
  const [loading, setloading] = useState(false)

  useEffect(() =>{
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 0)
  },[])
  
  return (

    <div>
      {loading ? 
      <div>
        <Cursorapp />
        <Loader />
        </div>
        :
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
       <About />
       <Contact />
      </div>
      }
    </div>




  )
}
export default App
