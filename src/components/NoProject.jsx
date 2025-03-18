import Button from "./UI/Button";

export default function NoProject() {
  return (
    <div className="content no-project">
      <h1 className="headline font-headline">No Project Selected</h1>
      <p className="font-paragraph">
        Select a project or get started with a new one
      </p>
      <Button purple>create new project</Button>
    </div>
  );
}
