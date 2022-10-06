// MPM packages
import { FormEvent, useState } from "react";

// Project files
import InputField from "components/InputField";
import { useModal } from "state/ModalContext";
import iContent from "interfaces/iContent";
import iDetailsOther from "interfaces/iDetailsOther";
import iDetailsSeries from "interfaces/iDetailsSeries";
import { generateFields } from "scripts/formUtilities";
import fakeFetch from "scripts/fakeFetch";

interface iProps {
  endPoint: string;
  fields: Array<any>;
  data: iContent | iDetailsOther | iDetailsSeries;
}

export default function FormUpdateItem({ endPoint, fields, data }: iProps) {
  // Global state
  const { setModal } = useModal();

  // Local state
  const [form, setForm] = useState(generateFields(fields, data));

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    const editedItem = { ...form, id: data.id };

    event.preventDefault();
    fakeFetch(endPoint, editedItem).then((response) => {
      const { status } = response;

      status === "ok" ? onSuccess() : onFailure();
      setModal(null);
    });
  }

  function onSuccess() {
    alert("Item edited!");
  }

  function onFailure() {
    alert("Could not edit item");
  }

  // Components
  const InputFields = fields.map((item) => (
    <InputField key={item.key} setup={item} state={[form, setForm]} />
  ));

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Edit information</h2>
      {InputFields}
      <hr />
      <button className="button-gray">Save</button>
      <button className="button-gray" onClick={() => setModal(null)}>
        Cancel
      </button>
    </form>
  );
}
