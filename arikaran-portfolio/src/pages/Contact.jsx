import { useState } from "react";
import { ArrowUpRight, Copy, Github, Linkedin, Mail, Send, Check } from "lucide-react";
import Reveal from "../components/Reveal";
import { siteData } from "../data/siteData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nReply email: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${siteData.email}?subject=${encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(siteData.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${siteData.email}`; }
  };

  return (
    <div className="page-shell">
      <section className="page-hero wrap"><Reveal><span className="eyebrow"><span /> START A CONVERSATION</span></Reveal><Reveal delay={0.06}><h1>Let's make something<br /><span className="gradient-text">meaningful.</span></h1></Reveal><Reveal delay={0.12}><p className="page-lead">Have a junior developer opportunity, a project idea, or just want to connect? I'd be glad to hear from you.</p></Reveal></section>
      <section className="wrap contact-layout section-block">
        <Reveal className="contact-aside"><div className="contact-highlight"><div className="contact-icon"><Mail size={21} /></div><span className="panel-index">EMAIL ME DIRECTLY</span><h2>Let's talk<br /><span className="gradient-text">possibilities.</span></h2><p>The easiest way to reach me is by email. The form opens your email application with the message prepared.</p><a className="email-address" href={`mailto:${siteData.email}`}>{siteData.email} <ArrowUpRight size={16} /></a><button type="button" className="copy-email" onClick={copyEmail}>{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? "Copied to clipboard" : "Copy email address"}</button></div><div className="contact-socials"><span className="panel-index">ELSEWHERE ON THE WEB</span><a href={siteData.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href={siteData.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a></div></Reveal>
        <Reveal delay={0.1} className="contact-form-wrap"><div className="form-header"><span className="panel-index">SEND A MESSAGE</span><h2>Drop me a <span className="gradient-text">line.</span></h2><p>Fill in the details below. Your email app will open so you can review and send the message.</p></div><form className="contact-form" onSubmit={submit}><div className="form-row"><label>Your name<input name="name" value={form.name} onChange={update} required placeholder="Jane Smith" autoComplete="name" /></label><label>Your email<input name="email" type="email" value={form.email} onChange={update} required placeholder="jane@example.com" autoComplete="email" /></label></div><label>Subject<input name="subject" value={form.subject} onChange={update} required placeholder="Let's work together" /></label><label>Message<textarea name="message" value={form.message} onChange={update} required rows="5" placeholder="Tell me a little about what you have in mind..." /></label><button className="button button-primary form-submit" type="submit">Prepare email <Send size={15} /></button><p className="form-footnote">This form uses a mailto fallback; it doesn't send messages in the background.</p></form></Reveal>
      </section>
    </div>
  );
}
