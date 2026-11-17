import ProjectCard from './ProjectCard';

// Renders one ProjectCard per project, keyed by the project's stable id.
function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="empty">No projects use this technology yet.</p>;
  }

  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard
            title={project.title}
            description={project.description}
            tech={project.tech}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
