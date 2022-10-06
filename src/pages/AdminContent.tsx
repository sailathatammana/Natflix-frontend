// Fake data (replace this with a real fetch)
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import Item from "components/ItemAdminContent";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";
import { useModal } from "state/ModalContext";

export default function AdminContent() {
  // Global state
  const { code } = useParams();
  const { setModal } = useModal();

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
    // 1 endpoint to save (to know if is a movie, docu, serie, etc)
    // 2 json data with what fields to create
    // 3 item with id to edit
    setModal(<FormEdit />);
  }

  function onDelete(id: number) {
    confirm(`Are you sure you want to delete item #${id}`);
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
      <button>Add a new item</button>
      {data.length === 0 ? <StatusEmpty /> : Items}
    </div>
  );
}
