// Fake data (replace this with a real fetch)
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import Item from "components/ItemAdminContent";
import FormEdit from "components/FormUpdate";
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
    fakeFetch(endPoint)
      .then((response) => onSuccess(response.data))
      .catch((error) => onFailure(error));
  }, []);

  function onSuccess(data: iContent[]) {
    setData(data);
    setStatus(eStatus.READY);
  }

  function onFailure(error: string) {
    console.error(error);
    setStatus(eStatus.ERROR);
  }

  function onUpdate(item: iContent | iDetailsOther | iDetailsSeries) {
    const fields = FieldsContent;
    const endPoint = `${first}/update`; // here we change from first/update to first/second/update

    setModal(<FormEdit endPoint={endPoint} fields={fields} data={item} />);
  }

  // Components
  const Items = data.map((item) => (
    <Item key={item.id} item={item} onUpdate={onUpdate} />
  ));

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  return (
    <div id="admin-content">
      <h1>
        Admin {first} {second}
      </h1>
      {data.length === 0 ? <StatusEmpty /> : Items}
    </div>
  );
}
