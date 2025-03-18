export default function Button({ children, purple, ...props }) {
  return (
    <button
      className={`button font-button ${
        purple ? "button-purple" : "button-green"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
