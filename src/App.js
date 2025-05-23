import "./css/container.css";
import "./css/sidebar.css";
import "./css/about.css";
import "./css/skills.css";
import "./css/exp.css";
import "./css/projects.css";
import { createContext, useState } from "react";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import BGD from "./components/BGD";
import Certifications from "./components/Certification";

const Sidecontext = createContext(null);

function App() {
  const [sideActive, setSideActive] = useState("about");
  return (
    <Sidecontext.Provider value={{ sideActive, setSideActive }}>
      <div className="conts">
        <BGD />
        <div className="container">
          <div className="left-side">
            <Sidebar />
          </div>
          <div className="right-side">
            <About />
            <Skill />
            <Experience />
            <Certifications />
          </div>
        </div>
      </div>
    </Sidecontext.Provider>
  );
}

export default App;

export { Sidecontext };
