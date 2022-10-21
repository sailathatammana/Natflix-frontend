// Node modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import FormCreate from "components/FormCreate";
import FormDelete from "components/FormDelete";
import FormUpdate from "components/FormUpdate";
import NavigationBarAdmin from "components/NavigationBarAdmin";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import Fields from "data/fields-details-series.json";
import eStatus from "interfaces/eStatus";
import iDetailsSeries from "interfaces/iDetailsSeries";
import ItemAdmin from "components/ItemAdminEpisode";
import { useModal } from "state/ModalContext";

export default function AdminDetailSeries() {
  // Global state
  const { code } = useParams();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iDetailsSeries>());

  // Properties
  const endPoint: string = "details-series/:id/";

  // Methods
  useEffect(() => {
    fetch(`http://localhost:8080/details-series/${code}`)
      .then((response) => response.json())
      .then((result) => onSuccess(result))
      .catch((error) => onFailure(error));
  }, []);

  function onSuccess(data: iDetailsSeries[]) {
    setData(data);
    setStatus(eStatus.READY);
  }

  function onFailure(error: string) {
    console.error(error);
    setStatus(eStatus.ERROR);
  }

  function onCreate() {
    setModal(
      <FormCreate
        fields={Fields}
        endPoint={`http://localhost:8080/details-series/create/${code}`}
      />
    );
  }

  function onUpdate(item: iDetailsSeries) {
    setModal(
      <FormUpdate
        endPoint={`http://localhost:8080/details-series/update/${item.id}`}
        fields={Fields}
        data={item}
      />
    );
  }

  function onDelete(id: number) {
    setModal(
      <FormDelete
        endPoint={`http://localhost:8080/details-series/delete/${id}`}
      />
    );
  }

  // Components
  const Items = data.map((item) => (
    <ItemAdmin key={item.id} item={item} actions={[onUpdate, onDelete]} />
  ));

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  return (
    <div id="admin-detail-series" className="admin-pages">
      <header>
        <h1>Admin details</h1>
      </header>
      {data.length === 0 ? <StatusEmpty /> : Items}
      <hr />
      <button onClick={onCreate}>Create episode</button>
    </div>
  );
}
