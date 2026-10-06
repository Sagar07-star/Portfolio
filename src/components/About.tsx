import "./styles/About.css";
import { FaFilePdf, FaDownload } from "react-icons/fa6";
import sagar from "../assets/sagar.png";
const About = () => {
  return (
    <div className="about-section" id="about">
      {/* NEW: photo on the left */}
      <div className="about-photo">
        <img src={sagar} alt="sagar.png" loading="lazy" />
      </div>

      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Information Science Engineering student skilled in Java, Python, C++, Go, and full-stack web development. Experienced in building AI/ML threat detection platforms, cloud backend services, and machine learning models. Strong foundation in core CS principles, REST APIs, and database architecture.
        </p>
        <div className="about-buttons" style={{ display: 'flex', gap: '15px', marginTop: '25px', flexWrap: 'wrap' }}>
          <a
            href="/Sagar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about-resume-btn"
            data-cursor="disable"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '30px',
              background: '#ffffff',
              color: '#0a0a0a',
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(255, 255, 255, 0.2)'
            }}
          >
            <FaFilePdf /> View Resume
          </a>
          <a
            href="/Sagar_Resume.pdf"
            download="Sagar_Resume.pdf"
            className="about-download-btn"
            data-cursor="disable"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,0.4)',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none'
            }}
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;