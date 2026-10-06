import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";
import { FaBars, FaXmark, FaFilePdf } from "react-icons/fa6";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a[data-href]");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        setIsMenuOpen(false);
        if (window.innerWidth > 768) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section && smoother) {
            smoother.scrollTo(section, true, "top top");
          }
        }
      });
    });

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SAGAR
        </a>

        <button
          className="hamburger-btn"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </button>

        <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <a data-href="#about" href="#about" onClick={() => setIsMenuOpen(false)}>
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work" onClick={() => setIsMenuOpen(false)}>
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#techstack" href="#techstack" onClick={() => setIsMenuOpen(false)}>
                <HoverLinks text="TECH STACK" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact" onClick={() => setIsMenuOpen(false)}>
                <HoverLinks text="CONTACT" />
              </a>
            </li>
            <li>
              <a
                href="/Sagar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="navbar-resume-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaFilePdf /> Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
