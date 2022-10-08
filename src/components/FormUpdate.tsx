// MPM packages
import { FormEvent, useState } from "react";

// Project files
import InputField from "components/InputField";
import { useModal } from "state/ModalContext";
import { generateFields } from "scripts/formUtilities";
import fakeFetch from "scripts/fakeFetch";

interface iProps {
  endPoint: string;
  fields: Array<any>;
  data: any;
}

export default function FormUpdate({ endPoint, fields, data }: iProps) {
  // Global state
  const { setModal } = useModal();

  // Local state
  const [form, setForm] = useState(generateFields(fields, data));

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    const editedItem = { ...form, id: data.id };

    event.preventDefault();
    fakeFetch(endPoint + "update", editedItem)
      .then(onSuccess)
      .catch((error) => onFailure(error));
  }

  function onSuccess() {
    alert("Item edited!");
    setModal(null);
  }

  function onFailure(error: string) {
    console.error(error);
    alert("Could not edit item");
  }

  // Components
  const InputFields = fields.map((item) => (
    <InputField key={item.key} fields={item} state={[form, setForm]} />
  ));

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Update information</h2>
      {InputFields}
      <hr />
      <button className="button-gray">Save</button>
      <button className="button-gray" onClick={() => setModal(null)}>
        Cancel
      </button>
    </form>
  );
}
