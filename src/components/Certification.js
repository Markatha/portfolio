import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { Sidecontext } from "../App";

function Certifications() {
  const { setSideActive } = useContext(Sidecontext);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setSideActive("certifications");
    }
  }, [inView, setSideActive]);

  return (
    <div className="certifications" id="certifications" ref={ref}>
      <strong>Certifications</strong>
      <div className="certifications-container">
        <div className="certifications-left">
          <small>April 1, 2025</small>
        </div>
        <div className="certifications-right">
          <h3>Cisco Certified Network Associate</h3>
          <h5>TESDA Sorsogon Provincial</h5>
        </div>
      </div>
      <div className="certifications-container">
        <div className="certifications-left">
          <small>April 19, 2024</small>
        </div>
        <div className="certifications-right">
          <h3>Computer Systems Servicing</h3>
          <h5>Rivan Technology Institute</h5>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
