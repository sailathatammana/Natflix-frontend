interface iProps {
  fields: Array<any>;
  state: [any, Function];
}

export default function InputSelect({ fields, state }: iProps) {
  // @ts-ignore
  const { label, options, key } = fields;
  const [value, setValue] = state;

  console.log(fields);

  // Methods
  // @ts-ignore
  function onChange(event) {
    // @ts-ignore
    const clonedItem = { ...value };

    // @ts-ignore
    clonedItem[key] = event.target.value;
    setValue(clonedItem);
  }

  // Components
  // @ts-ignore
  const Options = options.map((item, index) => (
    <option key={index + 1} value={index + 1}>
      {item}
    </option>
  ));

  return (
    <label className="input input-select">
      <span>{label}</span>
      <select value={value} onChange={onChange}>
        {Options}
      </select>
    </label>
  );
}
