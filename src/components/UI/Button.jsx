export default function Button({
  children,
  purple,
  green,
  transparant,
  black,
  ...props
}) {
  let cssClasses;

  if (purple) {
    cssClasses = "button-purple";
  } else if (green) {
    cssClasses = "button-green";
  } else if (transparant) {
    cssClasses = "button-transparant";
  } else if (black) {
    cssClasses = "button-black";
  }

  return (
    <button className={`button font-button ${cssClasses}`} {...props}>
      {children}
    </button>
  );
}
