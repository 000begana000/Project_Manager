export default function Input({ label, textarea, ref, ...props }) {
  return (
    <p className="inputs">
      <label className="font-paragraph">{label}</label>
      {textarea ? (
        <textarea ref={ref} className="font-paragraph" />
      ) : (
        <input ref={ref} className="font-paragraph" {...props} />
      )}
    </p>
  );
}
