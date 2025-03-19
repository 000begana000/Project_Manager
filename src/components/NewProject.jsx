import { useRef } from "react";

import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

export default function NewProject({ onCancel, onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const dialog = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      //modal
      dialog.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={dialog} buttonCaption="Close">
        <p>something went wrong</p>
      </Modal>
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
    </>
  );
}
