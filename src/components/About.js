import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { Sidecontext } from "../App";

const About = () => {
  const { setSideActive } = useContext(Sidecontext);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setSideActive("about");
    }
  }, [inView, setSideActive]);

  return (
    <div className="about" id="about" ref={ref}>
      <p>
        I'm a versatile tech professional with hands-on experience as a{" "}
        <b style={{ color: "aliceblue" }}>Service Engineer</b> specializing
        in laptops, printers and Sharp laser copiers. I also bring creative 
        intermediate as a photoshop editor, 
        and technical depth as a{" "} <b style={{ color: "aliceblue" }}>Full Stack Developer</b>,
        building robust web applications from front-end to back-end. My unique blend
        of hardware troubleshooting, visual design, and software development allows me to deliver
        complete, efficient solutions across both technical and creative domains.
      </p>
    </div>
  );
};

export default About;
