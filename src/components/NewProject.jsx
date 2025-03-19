import Button from "./UI/Button";
import Input from "./UI/Input";

export default function NewProject() {
  return (
    <div className="content new-project">
      <menu className="new-project-buttons">
        <li>
          <Button transparant>Cancel</Button>
        </li>
        <li>
          <Button black>Save</Button>
        </li>
      </menu>
      <div>
        <Input type="text" label="Title" />
        <Input textarea label="Description" />
        <Input type="date" label="Due Date" />
      </div>
    </div>
  );
}
