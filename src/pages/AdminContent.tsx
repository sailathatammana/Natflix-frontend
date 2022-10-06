// Fake data (replace this with a real fetch)
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";
import ItemAdminContent from "components/ItemAdminContent";

export default function AdminContent() {
  // Global state
  const { code } = useParams();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iContent>());

  // Properties
  const request = code || "";

  // Methods
  useEffect(() => {
    fakeFetch(request).then((response) => {
      const { data, status } = response;

      status === "ok" ? onSuccess(data) : onFailure();
    });
  }, []);

  function onSuccess(data: iContent[]) {
    setData(data);
    setStatus(eStatus.READY);
  }

  function onFailure() {
    setStatus(eStatus.ERROR);
  }

  function onEdit(id: number) {
    // this opens the edit modal form
    alert(`Trying to edit ${id}`);
  }

  function onDelete(id: number) {
    // this opens the native confirm alert
    alert(`Trying to edit ${id}`);
  }

  // Components
  const Items = data.map((item) => (
    <ItemAdminContent
      key={item.id}
      item={item}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ));

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;
  if (data.length === 0) return <StatusEmpty />;

  return (
    <div id="admin-content">
      <h1>Admin {code}</h1>
      {Items}
    </div>
  );
}
