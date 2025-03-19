export default function Input({ label, textarea, ...props }) {
  return (
    <p className="inputs">
      <label className="font-paragraph">{label}</label>
      {textarea ? (
        <textarea className="font-paragraph" />
      ) : (
        <input className="font-paragraph" {...props} />
      )}
    </p>
  );
}
