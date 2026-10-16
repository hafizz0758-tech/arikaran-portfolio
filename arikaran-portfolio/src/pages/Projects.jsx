import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { siteData } from "../data/siteData";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Full-stack", "Backend", "Microservices"];
  const filtered = siteData.projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Full-stack") return p.id === "shopzone";
    if (filter === "Backend") return p.id === "cabbooking";
    return p.id === "fooddelivery";
  });
  return (
    <div className="page-shell">
      <section className="page-hero wrap">
        <Reveal><span className="eyebrow"><span /> SELECTED WORK</span></Reveal>
        <Reveal delay={0.06}><h1>Ideas turned into<br /><span className="gradient-text">working projects.</span></h1></Reveal>
        <Reveal delay={0.12}><p className="page-lead">A growing collection of applications and backend projects built to practise, explore, and improve my development skills.</p></Reveal>
      </section>
      <section className="wrap section-block projects-page-block">
        <Reveal className="project-filter-row"><div className="filter-intro"><Search size={15} /><span>Browse projects</span></div><div className="filter-tabs">{filters.map((f) => <button key={f} onClick={() => setFilter(f)} className={filter === f ? "selected" : ""}>{f}</button>)}</div></Reveal>
        <div className="projects-grid projects-grid-all">{filtered.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        <Reveal className="project-note"><span className="note-star">✳</span><p>More experiments and projects will be added as I continue learning and building.</p><a href={siteData.github} target="_blank" rel="noreferrer" className="text-link">Explore GitHub <ArrowUpRight size={15} /></a></Reveal>
      </section>
    </div>
  );
}
