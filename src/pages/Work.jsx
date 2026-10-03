import { useEffect, useMemo, useState } from "react";
import InstagramReel from "../components/InstagramReel";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { additionalReels, brandPromotionReels } from "../data/instagramReels";
import { projects } from "../data/projects";

const filters = ["ALL", "PHOTOGRAPHY", "VIDEOGRAPHY", "BRANDS", "WEDDINGS", "PORTRAITS", "EVENTS", "COMMERCIAL"];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    document.title = "Ranjit Nayak — Selected Work";
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return projects;

    return projects.filter((project) => {
      const category = project.category?.toUpperCase();
      const type = project.type?.toUpperCase();
      const filterValue = activeFilter.toUpperCase();

      return category === filterValue || type === filterValue || category === filterValue;
    });
  }, [activeFilter]);

  return (
    <main className="page-shell work-page">
      <section className="page-hero compact">
        <div className="page-hero__inner">
          <SectionTitle tag="01 / SELECTED WORK" title="SELECTED WORK" />
        </div>
      </section>

      <section className="section padded-page">
        <div className="filters" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-grid portfolio-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {(activeFilter === "ALL" || activeFilter === "BRANDS") && (
          <section className="instagram-reels-section" aria-labelledby="brand-reels-heading">
            <div className="instagram-reels-heading">
              <div className="section-tag">BRAND CAMPAIGNS / INSTAGRAM REELS</div>
              <h2 id="brand-reels-heading">Brand Promotion Films</h2>
              <p>Tap a reel to load and play it here, or open it directly on Instagram.</p>
            </div>
            <div className="instagram-reels-grid">
              {brandPromotionReels.map((reel) => (
                <InstagramReel key={reel.id} reel={reel} />
              ))}
            </div>
          </section>
        )}

        {(activeFilter === "ALL" || activeFilter === "VIDEOGRAPHY") && (
          <section className="instagram-reels-section" aria-labelledby="more-reels-heading">
            <div className="instagram-reels-heading">
              <div className="section-tag">MORE FILM WORK / INSTAGRAM REELS</div>
              <h2 id="more-reels-heading">More Videography</h2>
              <p>Tap a reel to play it here, or open it directly on Instagram.</p>
            </div>
            <div className="instagram-reels-grid">
              {additionalReels.map((reel) => (
                <InstagramReel key={reel.id} reel={reel} />
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
};

export default Work;
