import { BiLogoGmail } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>MARK CHESTER DENIEGA</h3>
        <h5>Service Technician | Web Developer</h5>
        <p>
          Reliable and detail-oriented technician with experience in system
          repairs and maintenance, also skilled in web development for creating
          functional and user-friendly websites.
        </p>
      </div>
      <div className="sidebar-links">
        <div className="btns active">
          <div className="btn-line"></div>
          <button>About</button>
        </div>
        <div className="btns">
          <div className="btn-line"></div>
          <button>Skills</button>
        </div>
        <div className="btns">
          <div className="btn-line"></div>
          <button>Experience</button>
        </div>
        <div className="btns">
          <div className="btn-line"></div>
          <button>Projects</button>
        </div>
      </div>
      <div className="sidebar-footer">
        <a href="#gmail">
          <BiLogoGmail />
        </a>
        <a href="#linkedin">
          <CiLinkedin />
        </a>
        <a href="#github">
          <FaGithub />
        </a>
        <a href="#insta">
          <FaInstagram />
        </a>
        <a href="#tiktok">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
