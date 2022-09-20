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
      <div className="flex flex-col mb-5">
        {label && (
          <label className="mb-2 font-bold" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          className={`border rounded ${className} mb-2`}
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
