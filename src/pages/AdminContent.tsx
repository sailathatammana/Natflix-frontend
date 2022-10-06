// Fake data (replace this with a real fetch)
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import Item from "components/ItemAdminContent";
import FormEdit from "components/FormEdit";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import FieldsContent from "data/fields-content.json";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";
import { useModal } from "state/ModalContext";
import iDetailsOther from "interfaces/iDetailsOther";
import iDetailsSeries from "interfaces/iDetailsSeries";

export default function AdminContent() {
  // Global state
  const { code } = useParams();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iContent>());

  // Properties
  const endPoint = "";

  // Methods
  useEffect(() => {
    fakeFetch(`${endPoint}/`)
      .then((response) => onSuccess(response.data))
      .catch(onFailure);
  }, []);

  function onSuccess(data: iContent[]) {
    setData(data);
    setStatus(eStatus.READY);
  }

  function onFailure() {
    setStatus(eStatus.ERROR);
  }

  function onCreate() {
    alert("creating item");
  }

  function onEdit(item: iContent | iDetailsOther | iDetailsSeries) {
    const fields = FieldsContent;
    const editEndPoint = `${endPoint}/edit/`;

    setModal(<FormEdit endPoint={editEndPoint} fields={fields} data={item} />);
  }

  function onDelete(id: number) {
    alert(`deleting item ${id}`);
  }

  // Components
  const Items = data.map((item) => (
    <Item key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
  ));

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  return (
    <div id="admin-content">
      <h1>Admin {code}</h1>
      <button onClick={onCreate}>Add a new item</button>
      {data.length === 0 ? <StatusEmpty /> : Items}
    </div>
  );
}
