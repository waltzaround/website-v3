const ProjectCard = ({ project }: { project: any }) => {
  return (
    <a className="project-card" href={project.url} target="_blank">
      <img src={project.image} alt={project.name} />
      {project.development && (
        <div className="project-development">Under active development</div>
      )}
      <div className="project-card-content">
        <h3 className="project-card-title">{project.name}</h3>
        <p>{project.description}</p>
        <aside className="project-date">{project.date}</aside>
      </div>
      <div className="project-tags">
        <div className="project-work-type">
          {project.categories.map((categories: any) => (
            <p className="project-work-type-tag">{categories}</p>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
