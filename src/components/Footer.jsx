import { Instagram, Linkedin, Mail, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Clients", to: "/clients" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "Instagram", url: siteConfig.instagram, icon: Instagram },
  { label: "YouTube", url: siteConfig.youtube, icon: Youtube },
  { label: "Facebook", url: siteConfig.facebook, icon: Facebook },
  { label: "LinkedIn", url: siteConfig.linkedin, icon: Linkedin },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-top">
      <div>
        <div className="brand footer-brand">
          <span>RN</span>
          <b>RANJIT NAYAK</b>
        </div>
        <p>Photographer · Filmmaker · Content Creator</p>
      </div>

      <div className="footer-links" aria-label="Footer navigation">
        {footerLinks.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </div>

      <div className="socials" aria-label="Social media links">
        {socialLinks.map(({ label, url, icon: Icon }) => (
          <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon size={15} />
          </a>
        ))}
      </div>
    </div>

    <div className="footer-bottom">
      <span>© 2026 Ranjit Nayak. All rights reserved.</span>
      <span>Designed &amp; crafted with passion.</span>
    </div>
  </footer>
);

export default Footer;
