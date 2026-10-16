import { ArrowUpRight, Braces, Code2, Github, Terminal } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { siteData } from "../data/siteData";

const icons = { github: Github, code: Code2, terminal: Terminal, braces: Braces };

export default function CodingProfiles() {
  return (
    <div className="page-shell">
      <section className="page-hero wrap"><Reveal><span className="eyebrow"><span /> DEVELOPER FOOTPRINT</span></Reveal><Reveal delay={0.06}><h1>Where I code.<br /><span className="gradient-text">How I keep growing.</span></h1></Reveal><Reveal delay={0.12}><p className="page-lead">My developer profiles and places to explore my work. Profile statistics will be shown when verified data is available.</p></Reveal></section>
      <section className="wrap section-block"><Reveal><SectionHeading eyebrow="CODING PROFILES" title="Find me on" accent="the web." description="Open a profile to explore projects, practice, and progress." /></Reveal><div className="profiles-grid">{siteData.codingProfiles.map((profile, i) => { const Icon = icons[profile.icon] || Code2; return <Reveal key={profile.label} delay={i * 0.07} className={`profile-card ${profile.url ? "profile-active" : "profile-placeholder"}`}><div className="profile-icon"><Icon size={23} /></div><span className="panel-index">PLATFORM / 0{i + 1}</span><h3>{profile.label}</h3><p>{profile.note}</p>{profile.url ? <a className="text-link" href={profile.url} target="_blank" rel="noreferrer">Visit profile <ArrowUpRight size={15} /></a> : <span className="profile-add-note">Link to be added</span>}<span className="profile-arrow"><ArrowUpRight size={17} /></span></Reveal>; })}</div></section>
      <section className="wrap section-block"><Reveal className="profile-note glass-panel"><span className="eyebrow"><span /> NO MADE-UP METRICS</span><h2>Real progress over<br /><span className="gradient-text">vanity numbers.</span></h2><p>I'm keeping this page focused on real links and verifiable work rather than displaying unconfirmed ranks or problem counts.</p></Reveal></section>
    </div>
  );
}
