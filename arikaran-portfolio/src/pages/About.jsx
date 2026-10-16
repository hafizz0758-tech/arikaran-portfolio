import { GraduationCap, BookOpen, Code2, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { siteData } from "../data/siteData";

export default function About() {
  return (
    <div className="page-shell">
      <section className="page-hero wrap">
        <Reveal><span className="eyebrow"><span /> A LITTLE ABOUT ME</span></Reveal>
        <Reveal delay={0.06}><h1>Learning, building,<br /><span className="gradient-text">moving forward.</span></h1></Reveal>
        <Reveal delay={0.12}><p className="page-lead">I'm Arikaran — an aspiring Java Full Stack Developer who enjoys connecting thoughtful interfaces with reliable backend logic.</p></Reveal>
      </section>
      <section className="wrap about-layout section-block">
        <Reveal className="about-main glass-panel">
          <span className="panel-index">01 / THE STORY</span>
          <h2>From curiosity<br />to <span className="gradient-text">creation.</span></h2>
          <p>I'm focused on developing practical full-stack skills and building projects that bring frontend and backend technologies together. I enjoy learning how applications work end-to-end — from a user interface to APIs and database interactions.</p>
          <p>My current toolkit includes Java, Spring Boot, React, JavaScript, HTML, CSS, and MySQL. Through personal projects, I'm continuing to improve my problem-solving, implementation, and debugging skills.</p>
          <p>I'm looking for an opportunity where I can contribute as a junior developer, learn from experienced teammates, and grow by working on real-world software.</p>
          <div className="hero-actions"><a className="button button-primary" href={siteData.resume} download="Arikaran_M_Resume.pdf"><Download size={15} /> Download resume</a><Link to="/contact" className="button button-secondary">Get in touch <ArrowRight size={15} /></Link></div>
        </Reveal>
        <div className="about-side">
          <Reveal className="info-card"><div className="info-icon"><GraduationCap size={20} /></div><span className="panel-index">EDUCATION</span><h3>B.Com Computer Applications</h3><p>Sir Issac Newton College of Arts and Science, Pappakovil, Nagapattinam</p><span className="info-meta">Graduated 2025 · CGPA 7.03 / 10</span></Reveal>
          <Reveal delay={0.08} className="info-card"><div className="info-icon"><BookOpen size={20} /></div><span className="panel-index">PROFESSIONAL TRAINING</span><h3>Java Full Stack Development</h3><p>Besant Technologies, Velachery, Chennai</p><span className="info-meta">2026</span></Reveal>
          <Reveal delay={0.16} className="info-card"><div className="info-icon"><Code2 size={20} /></div><span className="panel-index">CURRENT FOCUS</span><h3>Full-stack development</h3><p>Building frontend experiences, backend services, and database-connected applications.</p><span className="info-meta">Java · React · Spring Boot · MySQL</span></Reveal>
        </div>
      </section>
      <section className="wrap section-block"><Reveal><SectionHeading eyebrow="WHAT DRIVES ME" title="Small steps. Real" accent="progress." /></Reveal><div className="values-grid">{[["01", "Keep learning", "Build a strong foundation by practising concepts and exploring how systems work."], ["02", "Build to understand", "Turn learning into working projects, then improve them through testing and iteration."], ["03", "Work as a team", "Stay open to feedback, communicate clearly, and contribute with consistency."]].map((v, i) => <Reveal key={v[0]} delay={i * 0.07} className="value-card"><span>{v[0]}</span><h3>{v[1]}</h3><p>{v[2]}</p></Reveal>)}</div></section>
    </div>
  );
}
