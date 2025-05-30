import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { Sidecontext } from "../App";
import resume from "../files/resume.pdf";
import { FaArrowRightLong } from "react-icons/fa6";

const Experience = () => {
  const { setSideActive } = useContext(Sidecontext);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setSideActive("experience");
    }
  }, [inView, setSideActive]);

  return (
    <div className="experience" id="experience" ref={ref}>
      <strong>Experience</strong>
      <div className="exp-container">
        <div className="exp-left">
          <small>Dec 2021 - Present</small>
        </div>
        <div className="exp-right">
          <h3>Service Engineer</h3>
          <h5>PC Micron Enterprises, Sorsogon City</h5>
          <ul>
            <li>
              Installed new Sharp Copier or system unit at customer sites. This
              involved setting up xerox machines, setting up driver software for
              the peripherals and ensuring that everything is functioning
              properly.
            </li>
            <li>
              Diagnosed the issue and performed necessary repairs. This involved
              troubleshooting electrical, mechanical or software problems
            </li>
            <li>
              Responsible for managing spare parts inventory to ensure that they
              have the necessary components on hand for repairs and maintenance
            </li>
          </ul>
        </div>
      </div>
      <div className="exp-container">
        <div className="exp-left">
          <small>Sep 2020 - Dec 2021</small>
        </div>
        <div className="exp-right">
          <h3>Technical Assistant</h3>
          <h5>PC Micron Enterprises, Sorsogon City</h5>
          <ul>
            <li>
              Offered technical support to team members and customers by
              addressing inquiries troubleshooting issues and providing guidance
              on technical matters.
            </li>
            <li>
              Helped maintained computers and peripherals as needed to ensure
              reliability.
            </li>
            <li>
              Assisted in maintaining and managing computer components,
              peripherals and supplies. Kept inventory records up-to-date and
              ensure it’s properly maintained.
            </li>
          </ul>
        </div>
      </div>
      <div className="exp-container">
        <div className="exp-left">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button>
              View Resume <FaArrowRightLong />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
