// Node modules
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
import useFetch from "state/useFetch";
import { useModal } from "state/ModalContext";

export default function AdminContent() {
  // Global state
  const navigate = useNavigate();
  const { code } = useParams();
  const { setModal } = useModal();
  const { data, status } = useFetch(`content/${code}/`, null);

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  // Methods
  function onCreate() {
    setModal(<FormCreate fields={Fields} endPoint={"content/"} />);
  }

  function onUpdate(item: iContent) {
    setModal(<FormUpdate endPoint={"content/"} fields={Fields} data={item} />);
  }

  function onDelete(id: number) {
    setModal(<FormDelete endPoint={"content/"} id={id} />);
  }

  function onDetails(item: iContent) {
    const isASeries: boolean = item.type_id === eContentType.SERIES;
    const pageDetailsOthers = `/admin-details-other/${item.id}`;
    const pageDetailsSeries = `/admin-details-series/${item.id}`;
    const pageToNavigate = isASeries ? pageDetailsSeries : pageDetailsOthers;

    navigate(pageToNavigate);
  }

  // Components
  const Items = data.map((item: iContent) => (
    <ItemAdminContent
      key={item.id}
      item={item}
      actions={[onUpdate, onDelete, onDetails]}
    />
  ));

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
