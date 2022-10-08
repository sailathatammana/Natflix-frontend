// Fake data (replace this with a real fetch)
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import FormCreate from "components/FormCreate";
import FormDelete from "components/FormDelete";
import FormUpdate from "components/FormUpdate";
import ItemAdmin from "components/ItemAdmin";
import NavigationBarAdmin from "components/NavigationBarAdmin";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import FieldsContent from "data/fields-content.json";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";
import iDetailsOther from "interfaces/iDetailsOther";
import iDetailsSeries from "interfaces/iDetailsSeries";
import { useModal } from "state/ModalContext";

export default function AdminContent() {
  // Global state
  const { first, second } = useParams();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iContent>());

  // Properties
  const endPoint: string = `${first}/${second}`;

  // Methods
  useEffect(() => {
    setStatus(eStatus.LOADING);
    fakeFetch(endPoint)
      .then((response) => onSuccess(response.data))
      .catch((error) => onFailure(error));
  }, [first, second]);

  function onSuccess(data: iContent[]) {
    setData(data);
    setStatus(eStatus.READY);
  }

  function onFailure(error: string) {
    console.error(error);
    setStatus(eStatus.ERROR);
  }

  function onCreate() {
    const fields = FieldsContent;
    const endPoint = `${first}/create`; // here we change from first/update to first/second/update

    setModal(<FormCreate fields={fields} endPoint={endPoint} />);
  }

  function onUpdate(item: iContent | iDetailsOther | iDetailsSeries) {
    const fields = FieldsContent;
    const endPoint = `${first}/update`;

    setModal(<FormUpdate endPoint={endPoint} fields={fields} data={item} />);
  }

  function onDelete(id: number) {
    const endPoint = `${first}/delete`;

    setModal(<FormDelete endPoint={endPoint} id={id} />);
  }

  // Components
  const Items = data.map((item) => (
    <ItemAdmin key={item.id} item={item} actions={[onUpdate, onDelete]} />
  ));

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  return (
    <div id="admin-content" className="admin-pages">
      <NavigationBarAdmin />
      <header>
        <h1>Admin content</h1>
      </header>
      {data.length === 0 ? <StatusEmpty /> : Items}
      <hr />
      <button onClick={onCreate}>Create item</button>
    </div>
  );
}
