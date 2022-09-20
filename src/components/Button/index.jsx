export default function Button({ children, className = "", ...props }) {
  return (
    <>
      <button
        className={`border p-px rounded px-3 py-2 ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
