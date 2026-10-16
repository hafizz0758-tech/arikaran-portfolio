import { ArrowUpRight, Braces, Code2, Database, GitBranch, Server, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { siteData } from "../data/siteData";

const icons = { Frontend: Code2, Backend: Server, Database, Tools: Wrench };
const descriptions = {
  Frontend: "Interfaces that are responsive, clear, and easy to use.",
  Backend: "Application logic, REST endpoints, and server-side foundations.",
  Database: "Relational data and persistence with MySQL.",
  Tools: "Everyday tools for coding, debugging, and version control."
};

export default function Skills() {
  return (
    <div className="page-shell">
      <section className="page-hero wrap"><Reveal><span className="eyebrow"><span /> THE TOOLKIT</span></Reveal><Reveal delay={0.06}><h1>Tools to turn ideas<br />into <span className="gradient-text">applications.</span></h1></Reveal><Reveal delay={0.12}><p className="page-lead">A practical set of technologies I'm learning and using to build full-stack applications.</p></Reveal></section>
      <section className="wrap section-block"><Reveal><SectionHeading eyebrow="SKILLS & TECHNOLOGIES" title="My current" accent="stack." description="Grouped by the role each technology plays in my development workflow." /></Reveal>
        <div className="skill-groups">{siteData.skills.map((group, i) => { const Icon = icons[group.group] || (group.group === "Database" ? Database : group.group === "Tools" ? Wrench : Braces); return <Reveal key={group.group} delay={i * 0.07} className="skill-group glass-panel"><div className="skill-group-head"><div className="skill-group-icon"><Icon size={21} /></div><div><span className="panel-index">0{i + 1} / CATEGORY</span><h3>{group.group}</h3></div></div><p>{descriptions[group.group] || "Tools I use while developing and testing applications."}</p><div className="skill-items">{group.items.map((item, j) => <div className="skill-item" key={item}><span className="skill-item-dot" /><span>{item}</span><span className="skill-item-index">{String(j + 1).padStart(2, "0")}</span></div>)}</div></Reveal>; })}</div>
      </section>
      <section className="wrap cta-section"><Reveal className="cta-card cta-compact"><div className="cta-content"><span className="eyebrow"><GitBranch size={13} /> LEARNING IN PUBLIC</span><h2>Curiosity is part<br />of the <span className="gradient-text">stack.</span></h2><p>Explore the projects where I put these technologies into practice.</p><Link to="/projects" className="button button-primary">See my projects <ArrowUpRight size={16} /></Link></div></Reveal></section>
    </div>
  );
}
