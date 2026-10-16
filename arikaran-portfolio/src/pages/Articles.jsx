import { BookOpen, ArrowUpRight, FileText } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { siteData } from "../data/siteData";

export default function Articles() {
  const articles = siteData.articles;
  return (
    <div className="page-shell">
      <section className="page-hero wrap"><Reveal><span className="eyebrow"><span /> NOTES & IDEAS</span></Reveal><Reveal delay={0.06}><h1>Learning out loud.<br /><span className="gradient-text">Sharing along the way.</span></h1></Reveal><Reveal delay={0.12}><p className="page-lead">Technical notes, project lessons, and concepts I'm exploring as I grow as a developer.</p></Reveal></section>
      <section className="wrap section-block"><Reveal><SectionHeading eyebrow="FEATURED WRITING" title="Articles &" accent="insights." description="A place for useful notes from the things I'm learning and building." /></Reveal>
        {articles.length ? <div className="articles-grid">{articles.map((article, i) => <Reveal key={article.title} delay={i * 0.06} className="article-card"><div className="article-cover"><FileText size={28} /><span>{article.category}</span></div><div className="article-content"><span className="panel-index">{article.date} · {article.readingTime}</span><h3>{article.title}</h3><p>{article.excerpt}</p><a className="text-link" href={article.url} target="_blank" rel="noreferrer">Read article <ArrowUpRight size={15} /></a></div></Reveal>)}</div> : <Reveal className="empty-state glass-panel"><div className="empty-icon"><BookOpen size={24} /></div><span className="panel-index">COMING SOON</span><h2>Notes are being <span className="gradient-text">written.</span></h2><p>I'm focusing on building and learning right now. This space will feature real articles and technical notes as I publish them.</p><div className="empty-topics"><span>Java</span><span>Spring Boot</span><span>React</span><span>Project lessons</span></div></Reveal>}
      </section>
    </div>
  );
}
