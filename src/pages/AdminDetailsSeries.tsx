// Fake data (replace this with a real fetch)
import fakeFetch from "scripts/fakeFetch";

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
import useFetch from "state/useFetch";

export default function AdminDetailSeries() {
  // Properties
  const endPoint: string = "details-series/:id/";

  // Global state
  const { code } = useParams();
  const { setModal } = useModal();
  const { data, status } = useFetch(endPoint, code);

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  // Methods
  function onCreate() {
    setModal(<FormCreate fields={Fields} endPoint={endPoint} />);
  }

  function onUpdate(item: iDetailsSeries) {
    setModal(<FormUpdate endPoint={endPoint} fields={Fields} data={item} />);
  }

  function onDelete(id: number) {
    setModal(<FormDelete endPoint={endPoint} id={id} />);
  }

  // Components
  const Items = data.map((item: iDetailsSeries) => (
    <ItemAdmin key={item.id} item={item} actions={[onUpdate, onDelete]} />
  ));

  return (
    <div id="admin-detail-series" className="admin-pages">
      <NavigationBarAdmin />
      <header>
        <h1>Admin details</h1>
      </header>
      {data.length === 0 ? <StatusEmpty /> : Items}
      <hr />
      <button onClick={onCreate}>Create episode</button>
    </div>
  );
}
