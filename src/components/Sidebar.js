import { BiLogoGmail } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { Sidecontext } from "../App";

const Sidebar = () => {
  const { sideActive, setSideActive } = useContext(Sidecontext);

  const handleClick = (section) => {
    setSideActive(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const buttons = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Certifications", id: "certifications" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>MARK CHESTER DENIEGA</h3>
        <h5>Service Engineer | Full Stack Developer</h5>
        <p>
          Reliable and detail-oriented technician with experience in system
          repairs and maintenance, also skilled in web development for creating
          functional and user-friendly websites.
        </p>
      </div>
      <div className="sidebar-links">
        {buttons.map((btn) => (
          <div
            className={`btns ${sideActive === btn.id ? "active" : ""}`}
            key={btn.id}
          >
            <div className="btn-line"></div>
            <button onClick={() => handleClick(btn.id)}>{btn.label}</button>
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=deniegamark80@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <BiLogoGmail />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-chester-deniega/din"
          target="_blank"
          rel="noreferrer"
        >
          <CiLinkedin />
        </a>
        <a href="https://github.com/Markatha" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
export default Sidebar;
