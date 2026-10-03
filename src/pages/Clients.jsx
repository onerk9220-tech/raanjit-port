import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { clients } from "../data/clients";
import { testimonials } from "../data/testimonials";

const Clients = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    document.title = "Ranjit Nayak — Clients";
  }, []);

  const cycleTestimonial = (direction) => {
    setActiveTestimonial((current) => {
      const next = direction === "next" ? current + 1 : current - 1;
      return (next + testimonials.length) % testimonials.length;
    });
  };

  return (
    <main className="page-shell clients-page">
      <section className="page-hero">
        <div className="page-hero__inner">
          <SectionTitle tag="01 / CLIENTS" title="TRUSTED BY 150+ CLIENTS" />
        </div>
      </section>

      <section className="section clients-body">
        <div className="client-grid">
          {clients.map((client) => (
            <div key={client} className="client-card">
              {client}
            </div>
          ))}
        </div>

        <div className="stats-row compact-stats">
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

        <div className="testimonial-carousel">
          <div className="testimonial-tools">
            <button type="button" aria-label="Previous quote" onClick={() => cycleTestimonial("prev")}>
              <ArrowLeft size={18} />
            </button>
            <button type="button" aria-label="Next quote" onClick={() => cycleTestimonial("next")}>
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="quote-shell">
            <Quote size={44} />
            <blockquote>{testimonials[activeTestimonial].quote}</blockquote>
            <p>
              — {testimonials[activeTestimonial].name}
              <br />
              <small>{testimonials[activeTestimonial].role}</small>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;
