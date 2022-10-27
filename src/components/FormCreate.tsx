// MPM packages
import { FormEvent, useState } from "react";

// Project files
import ListInput from "components/ListInput";
import { useModal } from "state/ModalContext";

interface iProps {
  endPoint: string;
  fields: Array<any>;
}

export default function FormUpdate({ endPoint, fields }: iProps) {
  // Global state
  const { setModal } = useModal();

  // Local state
  const [form, setForm] = useState({});

  const METHOD = "POST"; // refactor
  const HEADERS = { "Content-type": "application/json; charset=UTF-8" };

  // Methods
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch(endPoint, {
      method: METHOD,
      headers: HEADERS,
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then(onSuccess)
      .catch((error) => onFailure(error));
  }

  function onSuccess() {
    alert("Item created!");
    setModal(null);
  }

  function onFailure(error: string) {
    console.error(error);
    alert("Could not create item");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>New information</h2>
      <ListInput fields={fields} state={[form, setForm]} />
      <hr />
      <button className="button-gray">Create</button>
      <button className="button-gray" onClick={() => setModal(null)}>
        Cancel
      </button>
    </form>
  );
}
