import { ArrowUpRight, Mail, MapPin, Phone, Send, Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "../data/siteConfig";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    document.title = "Contact Ranjit Nayak";
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const projectType = formData.get("projectType")?.toString() || "";
    const budget = formData.get("budget")?.toString() || "";
    const message = formData.get("message")?.toString().trim() || "";

    if (!name || !email || !message) {
      setStatusMessage("Please complete the required fields before preparing your message.");
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project Type: ${projectType}`,
      `Budget: ${budget}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      "New project enquiry — Ranjit Nayak"
    )}&body=${encodeURIComponent(body)}`;

    setStatusMessage("Your message has been prepared.");
  };

  return (
    <main className="page-shell contact-page">
      <section className="page-hero compact">
        <div className="page-hero__inner">
          <div className="section-tag">01 / CONTACT</div>
          <h2>HAVE A STORY TO TELL?</h2>
        </div>
      </section>

      <section className="section contact-body">
        <div className="contact-layout">
          <div className="contact-card details-card">
            <p>
              Whether you&apos;re planning a campaign, documenting a special moment, or building your
              brand, let&apos;s create something meaningful.
            </p>

            <div className="contact-details">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail size={16} /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
                <Phone size={16} /> {siteConfig.phone}
              </a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                <Send size={16} /> WhatsApp
              </a>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
                <Instagram size={16} /> Instagram
              </a>
              <span>
                <MapPin size={16} /> {siteConfig.location}
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input name="name" type="text" placeholder="Name *" required />
              <input name="email" type="email" placeholder="Email *" required />
            </div>

            <div className="form-row">
              <input name="phone" type="tel" placeholder="Phone" />
              <select name="projectType" defaultValue="">
                <option value="" disabled>
                  Project Type
                </option>
                <option>Photography</option>
                <option>Videography</option>
                <option>Wedding</option>
                <option>Brand Campaign</option>
                <option>Content Creation</option>
                <option>Other</option>
              </select>
            </div>

            <select name="budget" defaultValue="">
              <option value="" disabled>
                Budget
              </option>
              <option>Below ₹25K</option>
              <option>₹25K – ₹50K</option>
              <option>₹50K – ₹1L</option>
              <option>₹1L+</option>
            </select>

            <textarea name="message" placeholder="Tell me about your project *" required />

            <button type="submit" className="btn light submit-btn">
              PREPARE MESSAGE <ArrowUpRight size={16} />
            </button>

            {statusMessage && <p className="form-status">{statusMessage}</p>}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
