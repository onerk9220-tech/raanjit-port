import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import { services } from "../data/services";

const Services = () => {
  useEffect(() => {
    document.title = "Ranjit Nayak — Services";
  }, []);

  return (
    <main className="page-shell services-page">
      <section className="page-hero">
        <div className="page-hero__inner">
          <SectionTitle tag="01 / SERVICES" title="SERVICES" />
        </div>
      </section>

      <section className="section services-body">
        <div className="service-list">
          {services.map((service) => (
            <article key={service.id} className="service-card detail-card">
              <span className="service-number">{service.number}</span>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-columns">
                  <div>
                    <h4>What is included</h4>
                    <ul>
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Typical deliverables</h4>
                    <ul>
                      {service.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <ArrowUpRight size={20} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
