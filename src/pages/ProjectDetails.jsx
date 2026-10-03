import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const BackButton = ({ label = "Back", fallback = "/work" }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate(fallback);
  };

  return (
    <button type="button" className="back-button" onClick={handleBack}>
      <ArrowLeft size={16} /> {label}
    </button>
  );
};

const ProjectDetails = () => {
  const { id } = useParams();
  const projectIndex = projects.findIndex((project) => project.id === id);
  const project = projects[projectIndex];

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Ranjit Nayak`;
    } else {
      document.title = "Project Not Found";
    }
  }, [project]);

  if (!project) {
    return (
      <main className="page-shell not-found-page">
        <section className="section narrow-center">
          <div className="not-found-card">
            <p className="section-tag">404 / PROJECT</p>
            <h2>Looks like this frame doesn&apos;t exist.</h2>
            <BackButton label="Back to Work" fallback="/work" />
          </div>
        </section>
      </main>
    );
  }

  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="page-shell project-details-page">
      <div className="detail-topbar">
        <BackButton label="Back" fallback="/work" />
      </div>

      <section className="project-hero">
        <div className="project-hero__media">
          <img src={project.heroImage} alt={project.title} />
        </div>
        <div className="project-hero__overlay">
          <div className="project-header-card">
            <span className="section-tag">{project.category}</span>
            <h1>{project.title}</h1>
            <div className="project-metadata">
              <span>
                <b>Category</b>
                {project.category}
              </span>
              <span>
                <b>Year</b>
                {project.year}
              </span>
              <span>
                <b>Client</b>
                {project.client}
              </span>
              <span>
                <b>Location</b>
                {project.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section project-content">
        <div className="project-summary">
          <div>
            <div className="section-tag">PROJECT STORY</div>
            <p>{project.description}</p>
          </div>
          <div>
            <div className="section-tag">DETAILS</div>
            <ul>
              <li>
                <strong>Category:</strong> {project.category}
              </li>
              <li>
                <strong>Type:</strong> {project.type}
              </li>
              <li>
                <strong>Client:</strong> {project.client}
              </li>
              <li>
                <strong>Location:</strong> {project.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="story-block">
          <h3>Project Story</h3>
          <p>{project.story}</p>
        </div>

        <div className="gallery-grid">
          {project.gallery.map((image, index) => (
            <div key={`${project.id}-${index}`} className="gallery-item">
              <img src={image} alt={`${project.title} gallery ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {project.video && (
          <div className="video-panel">
            <div className="section-tag">VIDEO</div>
            <div className="video-frame">
              <iframe
                src={project.video}
                title={`${project.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div className="credits-panel">
          <div className="section-tag">CREDITS</div>
          <ul>
            {project.credits.map((credit) => (
              <li key={credit}>{credit}</li>
            ))}
          </ul>
        </div>

        <div className="next-project-row">
          <Link to={`/work/${previousProject.id}`} className="project-nav-link">
            <span>Previous Project</span>
            <strong>{previousProject.title}</strong>
          </Link>
          <Link to={`/work/${nextProject.id}`} className="project-nav-link">
            <span>Next Project</span>
            <strong>{nextProject.title}</strong>
          </Link>
        </div>

        <div className="contact-cta panel-cta">
          <div>
            <span className="section-tag">LET&apos;S CREATE</span>
            <h3>Have a project in mind?</h3>
            <p>Let&apos;s create something unforgettable.</p>
          </div>
          <Link to="/contact" className="btn light">
            Contact Ranjit <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
