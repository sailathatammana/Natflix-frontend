interface iProps {
  data: Array<string>;
  state: string;
  onChange: Function;
}

export default function InputSelect({ data, state, onChange }: iProps) {
  // Components
  const Options = data.map((item, index) => (
    <option key={index + 1} value={index + 1}>
      {item}
    </option>
  ));

  return (
    <select
      className="input-select"
      value={state}
      onChange={(event) => onChange(event)}
    >
      {Options}
    </select>
  );
}
