export default function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span />{eyebrow}</span>
      <h2>{title} {accent && <span className="gradient-text">{accent}</span>}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
