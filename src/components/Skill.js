import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { Sidecontext } from "../App";

const Skill = () => {
  const { setSideActive } = useContext(Sidecontext);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setSideActive("skills");
    }
  }, [inView, setSideActive]);

  return (
    <div className="skill" id="skills" ref={ref}>
      <strong>Skills & Stacks</strong>
      <div className="skills-container">
        <div className="skills-left">
          <ul>
            <li>Install & configure Computer Systems</li>
            <li>Set-up Computer Networks</li>
            <li>Maintain & repair Computer Systems & Networks</li>
            <li>Printer Set-up & repair</li>
            <li>Set-up Computer Servers</li>
            <li>Frontend Web development</li>
            <li>Backend Web development</li>
            <li>Photoshop</li>
          </ul>
        </div>
        <div className="skills-right">
          <div className="stacks">
            HTML <FaHtml5 />
          </div>
          <div className="stacks">
            CSS <FaCss3Alt />
          </div>
          <div className="stacks">
            JavaScript <IoLogoJavascript />
          </div>
          <div className="stacks">
            React.JS <FaReact />
          </div>
          <div className="stacks">
            PHP <FaPhp />
          </div>
          <div className="stacks">
            MongoDB <DiMongodb />
          </div>
          <div className="stacks">
            Firebase <IoLogoFirebase />
          </div>
          <div className="stacks">
            MySQL <SiMysql />
          </div>
          <div className="stacks">
            Laravel <FaLaravel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
