import Button from "./UI/Button";

export default function SelectedProject({ project, onDelete }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="content selected-project">
      <div>
        <h1 className="font-headline title">{project.title}</h1>
        <Button transparant onClick={onDelete}>
          Delete
        </Button>
      </div>
      <p className="font-paragraph date">{formattedDate}</p>
      <p className="font-paragraph description">{project.description}</p>
      <h1>Tasks (update later)</h1>
    </div>
  );
}
