import Button from "./UI/Button";

export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="content selected-project">
      <div>
        <h1 className="font-headline title">{project.title}</h1>
        <Button transparant>Delete</Button>
      </div>
      <p className="font-paragraph date">{formattedDate}</p>
      <p className="font-paragraph description">{project.description}</p>
    </div>
  );
}
