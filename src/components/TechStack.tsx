import React from "react";
import "./styles/TechStack.css";
import {
  FaJava,
  FaPython,
  FaGolang,
  FaJs,
  FaDatabase,
  FaHtml5,
  FaBrain,
  FaBolt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaCube,
  FaDesktop,
  FaNetworkWired
} from "react-icons/fa6";
import {
  SiCplusplus,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiFastapi,
  SiVite,
  SiTailwindcss,
  SiPostman,
  SiMongodb,
  SiMysql
} from "react-icons/si";
import { TbApi, TbBinaryTree } from "react-icons/tb";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

const techStackData: TechCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: <FaJava />, color: "#ED8B00" },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "Go", icon: <FaGolang />, color: "#00ADD8" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "SQL", icon: <FaDatabase />, color: "#00758F" },
      { name: "HTML5/CSS3", icon: <FaHtml5 />, color: "#E34F26" },
    ],
  },
  {
    title: "Machine Learning & AI",
    items: [
      { name: "NLP", icon: <FaBrain />, color: "#9f7aea" },
      { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
      { name: "Pandas", icon: <SiPandas />, color: "#38A169" },
      { name: "NumPy", icon: <SiNumpy />, color: "#4DABCF" },
      { name: "RapidFuzz", icon: <FaBolt />, color: "#9f7aea" },
    ],
  },
  {
    title: "Web & Frameworks",
    items: [
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Vite", icon: <SiVite />, color: "#646CFF" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "REST APIs", icon: <TbApi />, color: "#009688" },
    ],
  },
  {
    title: "Cloud, Tools & Databases",
    items: [
      { name: "AWS", icon: <FaAws />, color: "#FF9900" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "Linux/WSL", icon: <FaLinux />, color: "#FCC624" },
    ],
  },
  {
    title: "Core CS",
    items: [
      { name: "DSA", icon: <TbBinaryTree />, color: "#9f7aea" },
      { name: "OOP", icon: <FaCube />, color: "#9f7aea" },
      { name: "OS", icon: <FaDesktop />, color: "#9f7aea" },
      { name: "DBMS", icon: <FaDatabase />, color: "#9f7aea" },
      { name: "Computer Networks", icon: <FaNetworkWired />, color: "#9f7aea" },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="techstack-section" id="techstack">
      <h2 className="techstack-title">
        Tech <span>Stack</span>
      </h2>

      {techStackData.map((category, idx) => (
        <div key={idx} className="tech-category">
          <h3 className="tech-category-title">{category.title}</h3>
          <div className="tech-grid">
            {category.items.map((tech, itemIdx) => (
              <div
                key={itemIdx}
                className="tech-tile"
                data-cursor="disable"
                tabIndex={0}
                style={{ "--brand-color": tech.color } as React.CSSProperties}
              >
                <div className="tech-icon">{tech.icon}</div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
