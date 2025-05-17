import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { Sidecontext } from "../App";

const Projects = () => {
  const { setSideActive } = useContext(Sidecontext);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setSideActive("projects");
    }
  }, [inView, setSideActive]);

  return (
    <div className="projects" id="projects" ref={ref}>
      <strong>Projects</strong>
      <div className="projects-container">
        <div className="projects-left">
          <small>from - to</small>
        </div>
        <div className="projects-right">
          <h3>Project 1</h3>
          <h5>Employer</h5>
          <ul>
            <li>
              details details details details details details details details
              details details details details details details details details
              details details details details details details details details
            </li>
            <li>
              details details details details details details details details
              details details details details details details details details
              details details details details details details details details
            </li>
            <li>
              details details details details details details details details
              details details details details details details details details
              details details details details details details details details
            </li>
          </ul>
        </div>
      </div>
      <div className="projects-container">
        <div className="projects-left">
          <small>from - to</small>
        </div>
        <div className="projects-right">
          <h3>Project 2</h3>
          <h5>Employer</h5>
          <ul>
            <li>
              details details details details details details details details
              details details details details details details details details
              details details details details details details details details
            </li>
            <li>
              details details details details details details details details
              details details details details details details details details
              details details details details details details details details
            </li>
            <li>
              details details details details details details details details
              details details details details details details details details
              details details details details details details details details
            </li>
          </ul>
        </div>
      </div>
      <div className="projects-container">
        <div className="projects-left">
          <small>from - to</small>
        </div>
        <div className="projects-right">
          <h3>Project 3</h3>
          <h5>Employer</h5>
          <ul>
            <li>
              details details details details details details details details
              details details details details details details details details
              details details details details details details details details
            </li>
            <li>
              details details details details details details details details
              details details details details details details details details
              details details details details details details details details
            </li>
            <li>
              details details details details details details details details
              details details details details details details details details
              details details details details details details details details
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
