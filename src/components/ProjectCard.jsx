// One project: title, description, tech stack, and links to the code and the live demo.
function ProjectCard({ title, description, tech, githubUrl, demoUrl }) {
  return (
    <article className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <ul className="tech-list" aria-label={`Technologies used in ${title}`}>
        {tech.map((t) => (
          <li key={t} className="tech-tag">{t}</li>
        ))}
      </ul>
      <p className="project-links">
        <a href={githubUrl}>
          GitHub<span className="visually-hidden"> repository for {title}</span>
        </a>
        {demoUrl && (
          <a href={demoUrl}>
            Live demo<span className="visually-hidden"> of {title}</span>
          </a>
        )}
      </p>
    </article>
  );
}

export default ProjectCard;
