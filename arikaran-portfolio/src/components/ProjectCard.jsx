import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Code2, CarFront, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const visualIcons = { shop: Code2, cab: CarFront, food: Utensils };

export default function ProjectCard({ project, index = 0 }) {
  const reduce = useReducedMotion();
  const VisualIcon = visualIcons[project.visual] || Code2;
  return (
    <motion.article
      className={`project-card project-${project.visual}`}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? {} : { y: -7, rotateX: 1.5, rotateY: -1.5, scale: 1.008 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className={`project-art art-${project.visual}`}>
        <div className="art-grid" />
        <div className="art-window">
          <div className="art-window-top"><span /><span /><span /><i>PROJECT / {project.number}</i></div>
          <div className="art-window-content">
            <div className="art-symbol"><VisualIcon size={31} strokeWidth={1.3} /></div>
            <div className="art-line long" /><div className="art-line medium" /><div className="art-line short" />
            <div className="art-orb" />
          </div>
        </div>
        <span className="project-number">{project.number}</span>
        {project.featured && <span className="featured-tag">FEATURED PROJECT</span>}
      </div>
      <div className="project-info">
        <div className="project-type">{project.type}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="project-links">
          <Link to={`/projects/${project.id}`} className="text-link">Explore project <ArrowUpRight size={15} /></Link>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Live demo of ${project.title}`}><ExternalLink size={17} /></a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`GitHub repository for ${project.title}`}><Github size={17} /></a>}
        </div>
      </div>
    </motion.article>
  );
}
