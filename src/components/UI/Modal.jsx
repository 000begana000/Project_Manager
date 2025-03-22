import { useImperativeHandle, useRef, ref } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

export default function Modal({ children, buttonCaption, ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="font-paragraph">
      {children}
      <form method="dialog">
        <Button black>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
