import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => (
  <Link className="project-card" to={`/work/${project.id}`}>
    <div className="project-card__image">
      <img src={project.heroImage} alt={project.title} loading="lazy" />
      <div className="project-card__overlay">
        <span>VIEW PROJECT</span>
        <ArrowUpRight size={16} />
      </div>
    </div>
    <div className="project-card__meta">
      <div>
        <h3>{project.title}</h3>
        <p>
          {project.category} · {project.type}
        </p>
      </div>
      <span>{project.year}</span>
    </div>
  </Link>
);

export default ProjectCard;
