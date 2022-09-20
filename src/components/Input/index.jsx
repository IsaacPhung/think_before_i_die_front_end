export default function Input({
  className = null,
  label = null,
  type = "text",
  id = null,
  error = undefined,
  onChange,
  ...props
}) {
  return (
    <>
      <div className="flex flex-col pb-5">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          className={`border rounded ${className}`}
          type={type}
          id={id}
          onChange={onChange}
          {...props}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </>
  );
}
