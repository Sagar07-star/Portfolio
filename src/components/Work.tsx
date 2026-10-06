import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

const projectsData = [
  {
    id: "01",
    title: "Sentinel-AI: Threat Detection & Forensics Platform",
    category: "Security AI Platform",
    date: "Oct 2026",
    bullets: [
      "Asynchronous web platform using Python and FastAPI to automate email threat analysis and digital forensics investigations.",
      "RESTful API endpoints (/api/investigations) to parse security telemetry, track incident status, and serve real-time investigation metrics.",
      "Responsive dashboard in HTML, CSS and JavaScript to visualize security threats and streamline incident response."
    ],
    tags: ["Python", "FastAPI", "REST API", "JavaScript"],
    github: "https://github.com/Sagar07-star?tab=repositories",
    image: "/images/placeholder.webp"
  },
  {
    id: "02",
    title: "Full-Stack Cloud Manager",
    category: "Cloud Backend & Systems",
    date: "Aug 2026",
    bullets: [
      "High-performance backend service in Go using worker threads for concurrent processing and MySQL for persistence.",
      "Responsive dashboard using React, Vite and Tailwind CSS to manage cloud resources."
    ],
    tags: ["Go", "MySQL", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Sagar07-star?tab=repositories",
    image: "/images/placeholder.webp"
  },
  {
    id: "03",
    title: "ML-driven Psychographic Credit Profiling",
    category: "Machine Learning & FinTech",
    date: "Nov 2024",
    bullets: [
      "ML scoring model using behavioral and transactional data (mobile money, digital wallet activity) to evaluate credit risk.",
      "Document-less profiling using community validation mechanisms (ROSCAs/SHGs) for underbanked populations."
    ],
    tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    github: "https://github.com/Sagar07-star?tab=repositories",
    image: "/images/placeholder.webp"
  }
];

const Work = () => {
  useGSAP(() => {
    if (window.innerWidth <= 1025) return;

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return;
      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return;

      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projectsData.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.date}</p>
                  </div>
                </div>
                <ul className="project-bullets" style={{ paddingLeft: "18px", margin: "12px 0", color: "#ccc", fontSize: "14px", lineHeight: "1.6" }}>
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                <div className="project-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} style={{ background: "rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", color: "#e0e0e0" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "16px" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      background: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: 500,
                      border: "1px solid rgba(255,255,255,0.2)"
                    }}
                  >
                    <FaGithub /> GitHub Repo
                  </a>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.github} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
