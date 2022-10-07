export default function InputField({ fields, state }) {
  const { key, autoFocus, label, placeholder, type, required } = fields;
  const [value, setValue] = state;

  // Methods
  function onChange(event) {
    const clonedItem = { ...value };

    clonedItem[key] = event.target.value;
    setValue(clonedItem);
  }

  return (
    <label className="input-field">
      <span>{label}:</span>
      <input
        autoFocus={autoFocus}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value[key]}
      />
    </label>
  );
}
