export default function Select({ fields, state }) {
  const { label, key, options } = fields;
  const [value, setValue] = state;

  // Properties
  const selectedOption = value[key];

  // Methods
  function onChange(event) {
    const clonedItem = { ...value };

    clonedItem[key] = Number(event.target.value);

    setValue(clonedItem);
  }

  // Components
  const Options = options.map((item, index) => (
    <option key={index} value={index + 1}>
      {item}
    </option>
  ));

  return (
    <label className="input input-select">
      <span>{label}</span>
      <select value={selectedOption} onChange={onChange}>
        {Options}
      </select>
    </label>
  );
}
