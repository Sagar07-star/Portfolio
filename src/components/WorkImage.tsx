import { FaGithub } from "react-icons/fa6";

interface Props {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link || "https://github.com/Sagar07-star?tab=repositories"}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
        title={props.alt}
      >
        <div className="work-link" style={{ opacity: 1 }}>
          <FaGithub />
        </div>
        <img src={props.image} alt={props.alt} />
      </a>
    </div>
  );
};

export default WorkImage;
