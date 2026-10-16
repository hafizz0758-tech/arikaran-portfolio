import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Download, Sparkles, Terminal, Code2, Layers3, Database } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ParticlesBackground from "../components/ParticlesBackground";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { siteData } from "../data/siteData";

const Hero3DScene = lazy(() => import("../components/Hero3DScene"));

function ResumeButton({ className = "button button-primary" }) {
  return <a className={className} href={siteData.resume} download="Arikaran_M_Resume.pdf" onClick={(e) => {
    if (!document.querySelector('a[href="/resume/Arikaran_M_Resume.pdf"]')) e.preventDefault();
  }}><Download size={16} /> Download resume</a>;
}

export default function Home() {
  return (
    <>
      <section className="hero section-wrap">
        <div className="hero-glow glow-a" /><div className="hero-glow glow-b" />
        <ParticlesBackground density={45} />
        <div className="hero-inner wrap">
          <div className="hero-copy">
            <motion.div className="availability-pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <span className="status-dot" /> OPEN TO OPPORTUNITIES
            </motion.div>
            <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>HELLO WORLD, I'M</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              Arikaran <span className="gradient-text">M</span>
            </motion.h1>
            <motion.div className="hero-role" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
              <span className="role-line" /> Java Full Stack Developer
            </motion.div>
            <motion.p className="hero-description" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52 }}>
              I build responsive web experiences and backend systems with Java, Spring Boot, React, and MySQL — one thoughtful line of code at a time.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62 }}>
              <Link to="/projects" className="button button-primary">Explore my work <ArrowRight size={16} /></Link>
              <ResumeButton className="button button-secondary" />
            </motion.div>
            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <span><Code2 size={15} /> Full-stack projects</span><span className="meta-divider" /><span><Terminal size={15} /> Always learning</span>
            </motion.div>
          </div>
          <div className="hero-visual">
            <Suspense fallback={<div className="hero-3d hero-3d-fallback"><div className="fallback-core" /></div>}>
              <Hero3DScene />
            </Suspense>
            <div className="floating-chip chip-java"><span className="chip-icon java-icon">J</span><span>Java</span></div>
            <div className="floating-chip chip-react"><span className="chip-icon react-icon">✳</span><span>React</span></div>
            <div className="floating-chip chip-spring"><span className="chip-icon spring-icon">⌘</span><span>Spring Boot</span></div>
            <div className="floating-chip chip-mysql"><Database size={16} /><span>MySQL</span></div>
          </div>
        </div>
        <a className="scroll-cue" href="#featured-work"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        <div className="hero-bottom-line" />
      </section>

      <section className="intro-strip wrap">
        <Reveal><span className="eyebrow"><span /> MY APPROACH</span></Reveal>
        <Reveal delay={0.08}><p>Curious by nature. <span className="muted-text">Driven to turn ideas into useful, accessible, and thoughtfully engineered digital products.</span></p></Reveal>
      </section>

      <section className="section-wrap wrap section-block" id="featured-work">
        <Reveal><SectionHeading eyebrow="SELECTED WORK" title="Projects with" accent="purpose." description="A few things I've been building while growing my full-stack development skills." /></Reveal>
        <div className="projects-grid">
          {siteData.projects.slice(0, 2).map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
        <Reveal className="center-action"><Link to="/projects" className="button button-secondary">View all projects <ArrowUpRight size={16} /></Link></Reveal>
      </section>

      <section className="skills-preview section-wrap">
        <div className="wrap skills-preview-inner">
          <Reveal><SectionHeading eyebrow="MY TOOLKIT" title="Built with the" accent="right tools." description="The technologies I use to bring frontend experiences and backend logic together." /></Reveal>
          <Reveal delay={0.1} className="tech-pills">
            {["Java", "Spring Boot", "React.js", "JavaScript", "HTML5", "CSS3", "MySQL", "REST APIs"].map((skill, i) => <motion.span key={skill} whileHover={{ y: -4, borderColor: "rgba(130,108,255,.7)" }} transition={{ type: "spring", stiffness: 300 }}><span className="tech-index">0{i + 1}</span>{skill}</motion.span>)}
          </Reveal>
          <Reveal><Link to="/skills" className="text-link">Explore all skills <ArrowRight size={15} /></Link></Reveal>
        </div>
      </section>

      <section className="wrap cta-section">
        <Reveal className="cta-card">
          <div className="cta-orb" /><div className="cta-content">
            <span className="eyebrow"><Sparkles size={13} /> WHAT'S NEXT</span>
            <h2>Have an opportunity<br />in <span className="gradient-text">mind?</span></h2>
            <p>I'm ready to learn, contribute, and build something meaningful with a team.</p>
            <div className="hero-actions"><Link to="/contact" className="button button-primary">Let's connect <ArrowUpRight size={16} /></Link><a href={siteData.github} target="_blank" rel="noreferrer" className="button button-secondary">Visit GitHub <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="cta-decoration"><Layers3 size={90} strokeWidth={0.7} /></div>
        </Reveal>
      </section>
    </>
  );
}
