export default function Button({ children, purple, ...props }) {
  return (
    <button
      className={`font-button ${purple ? "button-purple" : "button-green"}`}
      {...props}
    >
      {children}
    </button>
  );
}
