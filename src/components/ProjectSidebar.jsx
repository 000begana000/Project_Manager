import Button from "./UI/Button";
export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <div className="project-sidebar">
      <h1 className="font-headline">your project</h1>
      <Button purple onClick={onStartAddProject}>
        + Add Project
      </Button>
    </div>
  );
}
