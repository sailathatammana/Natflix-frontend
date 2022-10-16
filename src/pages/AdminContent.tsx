// Node modules
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Project files
import FormCreate from "components/FormCreate";
import FormDelete from "components/FormDelete";
import FormUpdate from "components/FormUpdate";
import ItemAdminContent from "components/ItemAdminContent";
import NavigationBarAdmin from "components/NavigationBarAdmin";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import Fields from "data/fields-content.json";
import eContentType from "interfaces/eContentType";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";
import { useModal } from "state/ModalContext";

export default function AdminContent() {
  // Global state
  const navigate = useNavigate();
  const { code } = useParams();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iContent>());

  // Properties
  const endPoint = `http://localhost:8080/content/?type_id=${code}`;

  // Methods
  useEffect(() => {
    setStatus(eStatus.LOADING);
    fetch(endPoint)
      .then((response) => response.json())
      .then((result) => onSuccess(result))
      .catch((error) => onFailure(error));
  }, [code]);

  function onSuccess(data: iContent[]) {
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
        endPoint={"http://localhost:8080/content/create/"}
      />
    );
  }

  function onUpdate(item: iContent) {
    setModal(
      <FormUpdate
        endPoint={`http://localhost:8080/content/update/${item.id}`}
        fields={Fields}
        data={item}
      />
    );
  }

  function onDelete(id: number) {
    setModal(
      <FormDelete endPoint={`http://localhost:8080/content/delete/${id}`} />
    );
  }

  function onDetails(item: iContent) {
    const isASeries: boolean = item.type_id === eContentType.SERIES;
    const pageDetailsOthers = `/admin-details-other/${item.id}`;
    const pageDetailsSeries = `/admin-details-series/${item.id}`;
    const pageToNavigate = isASeries ? pageDetailsSeries : pageDetailsOthers;

    navigate(pageToNavigate);
  }

  // Components
  const Items = data.map((item) => (
    <ItemAdminContent
      key={item.id}
      item={item}
      actions={[onUpdate, onDelete, onDetails]}
    />
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
      <button onClick={onCreate}>Create content</button>
    </div>
  );
}
