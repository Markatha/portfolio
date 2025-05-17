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
        I am a skilled and dedicated{" "}
        <b style={{ color: "aliceblue" }}>Service Technician</b> with hands-on
        experience in diagnosing, repairing, and maintaining a wide range of
        mechanical and electrical systems. With a strong technical background
        and a passion for problem-solving, I take pride in delivering
        high-quality service and ensuring customer satisfaction.
      </p>
      <p>
        Over the years, I’ve worked with diverse equipment and systems across
        residential, commercial, and industrial settings—ranging from HVAC units
        and appliances to computer hardware and automotive systems. I am
        well-versed in safety protocols, troubleshooting procedures, and
        preventive maintenance strategies.
      </p>
      <p>
        In addition to my technical service work, I am also a{" "}
        <b style={{ color: "aliceblue" }}>Web Developer</b>, experienced in
        building responsive, user-friendly websites and systems. I’ve developed
        web applications for various clients, integrating both front-end and
        back-end technologies to deliver reliable digital solutions that meet
        their specific needs.
      </p>
      <p>
        I continuously stay updated with the latest technologies and tools in
        both the service and web development industries. I believe in working
        efficiently, transparently, and with integrity. Whether it’s a quick
        fix, a complex repair, or a web-based solution, I approach each job with
        professionalism and a commitment to getting it done right the first
        time.
      </p>
    </div>
  );
};

export default About;
