import { ArrowUpRight, Mail } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { images } from "../data/images";

const journey = [
  { year: "2015", title: "First commissions" },
  { year: "2018", title: "Brand storytelling" },
  { year: "2021", title: "Expanded into films" },
  { year: "2024", title: "Global collaborations" },
];

const About = () => {
  useEffect(() => {
    document.title = "About Ranjit Nayak";
  }, []);

  return (
    <main className="page-shell about-page">
      <section className="page-hero">
        <div className="page-hero__inner">
          <SectionTitle tag="01 / ABOUT RANJIT" title="ABOUT RANJIT" />
          <p className="page-subtitle">Behind every frame is a story.</p>
        </div>
      </section>

      <section className="section about-body">
        <div className="about-layout">
          <div className="portrait-panel">
            <img src={images.portrait} alt="Portrait of Ranjit Nayak" loading="lazy" />
          </div>

          <div className="about-copy">
            <p>
              Ranjit Nayak is a visual storyteller working across photography, cinematography, and
              content creation. His work blends documentary honesty with editorial elegance, creating
              imagery that feels both polished and deeply human.
            </p>
            <p>
              From wedding narratives to commercial campaigns, he approaches each project with the same
              intention: to find the emotional truth at the center of the frame and translate it into a
              visual language that lasts.
            </p>

            <div className="skill-list">
              <div>
                <h3>Photography</h3>
                <p>Portraiture, weddings, events, commercial, lifestyle, and product storytelling.</p>
              </div>
              <div>
                <h3>Videography</h3>
                <p>Brand films, event coverage, wedding edits, and cinematic visual narratives.</p>
              </div>
              <div>
                <h3>Content Creation</h3>
                <p>Short-form video, campaigns, reels, and social-first storytelling.</p>
              </div>
              <div>
                <h3>Creative Direction</h3>
                <p>Concept building, visual planning, and narrative structure for memorable projects.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-row">
          <div>
            <strong>150+</strong>
            <span>Clients</span>
          </div>
          <div>
            <strong>500+</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>1000+</strong>
            <span>Stories Captured</span>
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-intro timeline-head">
          <h2>
            Creative <em>journey.</em>
          </h2>
        </div>

        <div className="timeline-grid">
          {journey.map((item) => (
            <div key={item.year} className="timeline-item">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section philosophy-section">
        <div className="philosophy-box">
          <span>CREATIVE PHILOSOPHY</span>
          <h3>
            The best imagery does not simply record a moment — it preserves the feeling behind it.
          </h3>
        </div>
      </section>

      <section className="section cta-panel">
        <div className="cta-inner">
          <div>
            <div className="section-tag">02 / LET&apos;S WORK TOGETHER</div>
            <h2>Ready to capture something meaningful?</h2>
          </div>
          <Link to="/contact" className="btn light">
            Let&apos;s Work Together <Mail size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
