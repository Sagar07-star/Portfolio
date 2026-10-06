import { MdArrowOutward, MdCopyright, MdLocationOn } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sagarchaudhary.1march@gmail.com" data-cursor="disable">
                sagarchaudhary.1march@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918448833709" data-cursor="disable">
                +91-8448833709
              </a>
            </p>
            <h4>Location</h4>
            <p style={{ color: "#adacac", display: "flex", alignItems: "center", gap: "4px" }}>
              <MdLocationOn style={{ color: "var(--accentColor)" }} /> Bengaluru, India
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Sagar07-star"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/sagar-chaudhary-79113124a/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/SagarCh96974723"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter / X <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/sagarchaudhary006/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sagar</span>
            </h2>
            <h5>
              <MdCopyright /> 2024 - 2028
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
