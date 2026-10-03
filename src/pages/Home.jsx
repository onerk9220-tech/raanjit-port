import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { images } from "../data/images";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { siteConfig } from "../data/siteConfig";

const stats = [
  { value: "150+", label: "Clients" },
  { value: "500+", label: "Projects" },
  { value: "1000+", label: "Stories Captured" },
];

const Home = () => {
  useEffect(() => {
    document.title = "Ranjit Nayak — Photographer, Filmmaker & Content Creator";
  }, []);

  return (
    <main className="page-shell home-page">
      <section className="hero">
        <div
          className="hero-image"
          style={{
            backgroundImage:
              `linear-gradient(90deg, rgba(0,0,0,0.74), rgba(0,0,0,0.22)), url(${images.hero})`,
          }}
        />

        <div className="hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
          >
            PHOTOGRAPHER · FILMMAKER · CONTENT CREATOR
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.8 }}
          >
            Stories,
            <br />
            <i>captured</i>
            <br />
            beautifully.
          </motion.h1>

          <motion.p
            className="hero-copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            Creating cinematic visuals, powerful photographs, and memorable digital experiences for
            brands, people, and moments that matter.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/work" className="btn light">
              View My Work <ArrowDown size={16} />
            </Link>
            <Link to="/contact" className="text-link">
              Let&apos;s Work Together <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>

        <div className="hero-metrics">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
          <span className="scroll-label">SCROLL ↓</span>
        </div>
      </section>

      <section className="section intro-panel">
        <div className="section-tag">01 / ABOUT</div>
        <div className="intro-grid">
          <div>
            <h2>
              I turn moments
              <br />
              into <em>visual stories.</em>
            </h2>
          </div>
          <div>
            <p className="large-copy">
              From intimate portraits to large-scale brand campaigns, I create photographs and films
              that feel authentic, cinematic, and memorable.
            </p>
            <p className="muted">
              BASED IN ODISHA, INDIA
              <br />
              <b>Available for projects worldwide.</b>
            </p>
            <Link to="/about" className="arrow-link">
              More about Ranjit <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="about-image">
          <img src={images.about} alt="Ranjit Nayak creative portrait" loading="lazy" />
        </div>
      </section>

      <section className="section work-section">
        <div className="section-intro">
          <div>
            <div className="section-tag">02 / SELECTED WORK</div>
            <h2>
              A collection of <em>stories.</em>
            </h2>
          </div>
          <p>
            A handful of projects capturing the people, brands, rituals, and moments that deserve to be
            remembered.
          </p>
        </div>

        <div className="project-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="statement-band">
        <div className="statement-inner">
          <span>THE PHILOSOPHY</span>
          <h2>
            “The best frames don&apos;t just show a moment. <i>They make you feel it.</i>”
          </h2>
        </div>
      </section>

      <section className="section services-section">
        <div className="section-tag">03 / WHAT I DO</div>
        <div className="section-intro spaced">
          <h2>
            Built around
            <br />
            <em>your story.</em>
          </h2>
          <p>
            From the first idea to the final frame, every project gets a considered visual language.
          </p>
        </div>
        <div className="service-grid">
          {services.slice(0, 3).map((service) => (
            <div key={service.id} className="service-card compact">
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ArrowUpRight size={20} />
            </div>
          ))}
        </div>
        <div className="inline-cta">
          <Link to="/services" className="btn dark">
            View All Services <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section testimonial-panel">
        <div className="section-tag">04 / KIND WORDS</div>
        <div className="testimonial-card">
          <span className="quote-mark">“</span>
          <blockquote>{testimonials[0].quote}</blockquote>
          <p>
            — {testimonials[0].name}
            <br />
            <small>{testimonials[0].role}</small>
          </p>
        </div>
      </section>

      <section className="section final-cta-band">
        <div className="final-cta-card">
          <div>
            <div className="section-tag">05 / LET&apos;S CREATE</div>
            <h2>Have a story to tell?</h2>
          </div>
          <div className="final-cta-actions">
            <Link to="/contact" className="btn light">
              Contact Ranjit <Mail size={16} />
            </Link>
            <Link to="/clients" className="btn ghost">
              View All Clients <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
