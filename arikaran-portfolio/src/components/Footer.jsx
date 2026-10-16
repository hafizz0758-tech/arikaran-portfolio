import { ArrowUpRight, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer wrap">
      <div className="footer-top">
        <div>
          <Link to="/" className="brand footer-brand"><span className="brand-mark">A.</span><span>arikaran<span className="brand-dot">.</span></span></Link>
          <p>Building thoughtful digital experiences, one project at a time.</p>
        </div>
        <div className="footer-socials">
          <a href={siteData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href={siteData.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href={`mailto:${siteData.email}`} aria-label="Email"><Mail size={17} /></a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp size={17} /></button>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Arikaran M.</span><span>Designed with curiosity <span className="brand-dot">✦</span></span><Link to="/contact">Start a conversation <ArrowUpRight size={13} /></Link></div>
    </footer>
  );
}
