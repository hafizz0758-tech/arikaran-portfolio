import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";
import { siteData } from "../data/siteData";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = siteData.projects.find((p) => p.id === projectId);
  if (!project) return <Navigate to="/projects" replace />;
  return (
    <div className="page-shell">
      <section className="wrap detail-top">
        <Reveal><Link to="/projects" className="back-link"><ArrowLeft size={15} /> All projects</Link></Reveal>
        <Reveal delay={0.05}><span className="eyebrow"><span /> PROJECT / {project.number}</span></Reveal>
        <Reveal delay={0.1}><h1>{project.title.split(" ").slice(0, -1).join(" ")} <span className="gradient-text">{project.title.split(" ").slice(-1)}</span></h1></Reveal>
        <Reveal delay={0.15}><p className="page-lead">{project.description}</p></Reveal>
        <Reveal delay={0.18} className={`detail-art project-art art-${project.visual}`}><div className="art-grid" /><div className="detail-art-center"><div className="detail-art-orbit" /><span>{project.number}</span><small>{project.type}</small></div></Reveal>
      </section>
      <section className="wrap detail-columns section-block">
        <Reveal className="detail-description glass-panel"><span className="panel-index">OVERVIEW</span><h2>Built to learn.<br /><span className="gradient-text">Made to work.</span></h2><p>{project.description}</p><p>This project is part of my ongoing development practice. The implementation and feature set may evolve as I improve the application and learn new approaches.</p><div className="detail-actions">{project.demo && <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a>}{project.repo && <a className="button button-secondary" href={project.repo} target="_blank" rel="noreferrer">Source code <Github size={15} /></a>}</div>{!project.demo && !project.repo && <p className="inline-note">Repository link will be added when available.</p>}</Reveal>
        <Reveal delay={0.1} className="detail-stack glass-panel"><span className="panel-index">TECH STACK</span><h3>Technologies used</h3><div className="detail-tags">{project.stack.map((s) => <span key={s}><CheckCircle2 size={14} />{s}</span>)}</div><div className="detail-divider" /><span className="panel-index">PROJECT STATUS</span><p>Personal learning project · Iterative development</p><Link to="/contact" className="text-link">Talk to me about it <ArrowUpRight size={15} /></Link></Reveal>
      </section>
    </div>
  );
}
