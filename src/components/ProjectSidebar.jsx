import Button from "./UI/Button";
export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelect,
}) {
  return (
    <div className="project-sidebar">
      <h1 className="font-headline">your project</h1>
      <Button purple onClick={onStartAddProject}>
        + Add Project
      </Button>
      <ul className="projects">
        {projects.map(project => (
          <li key={project.id}>
            <Button green onClick={() => onSelect(project.id)}>
              {project.title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
