import "./styles/Landing.css";
import { FaFilePdf, FaDownload } from "react-icons/fa6";

const Landing = () => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>SAGAR</h1>
        </div>
        <div className="landing-info">
          <h3>A Passionate</h3>
          <h2 className="landing-info-h2">
            <div className="landing-h2-1">AI / ML</div>
            <div className="landing-h2-2">FULL STACK</div>
          </h2>
          <h2>
            <div className="landing-h2-info">FULL STACK</div>
            <div className="landing-h2-info-1">AI / ML</div>
          </h2>
          <div className="landing-actions" style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
            <a
              href="/Sagar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-resume-btn"
              data-cursor="disable"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "24px",
                background: "#ffffff",
                color: "#0a0a0a",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(255, 255, 255, 0.25)"
              }}
            >
              <FaFilePdf /> View Resume
            </a>
            <a
              href="/Sagar_Resume.pdf"
              download="Sagar_Resume.pdf"
              className="hero-btn hero-download-btn"
              data-cursor="disable"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none"
              }}
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;