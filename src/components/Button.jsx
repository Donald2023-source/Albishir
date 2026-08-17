export default function Button({ text, ...props }) {
  return (
    <button style={{ padding: "8px 20px", cursor: "pointer" }} {...props}>
      {text}
    </button>
  );
}
