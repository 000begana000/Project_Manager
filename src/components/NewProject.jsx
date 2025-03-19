import { useRef } from "react";

import Button from "./UI/Button";
import Input from "./UI/Input";

export default function NewProject({ onCancel, onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="content new-project">
      <menu className="new-project-buttons">
        <li>
          <Button transparant onClick={onCancel}>
            Cancel
          </Button>
        </li>
        <li>
          <Button black onClick={handleSave}>
            Save
          </Button>
        </li>
      </menu>
      <div>
        <Input type="text" label="Title" ref={title} />
        <Input textarea label="Description" ref={description} />
        <Input type="date" label="Due Date" ref={dueDate} />
      </div>
    </div>
  );
}
