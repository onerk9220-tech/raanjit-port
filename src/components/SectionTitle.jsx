const SectionTitle = ({ tag, title, className = "" }) => (
  <div className={`section-heading ${className}`.trim()}>
    {tag && <div className="section-tag">{tag}</div>}
    <h2>{title}</h2>
  </div>
);

export default SectionTitle;
