// Fake data (replace this with a real fetch)
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { FormEvent } from "react";
import { useParams } from "react-router-dom";

// Project files
import NavigationBarAdmin from "components/NavigationBarAdmin";
import InputField from "components/InputField";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import Fields from "data/fields-details-other.json";
import eStatus from "interfaces/eStatus";
import useFetch from "state/useFetch";

export default function AdminDetailsOther() {
  // Properties
  const endPoint: string = "details-other/:id/";

  // Global state
  const { code } = useParams();
  const { data, setData, status } = useFetch(endPoint, code);

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  // Methods
  function onSubmit(event: FormEvent) {
    event.preventDefault();
    fakeFetch(endPoint + "update/", data)
      .then((response) => alert(response.data))
      .catch((error) => alert(error));
  }

  return (
    <div id="admin-detail-others" className="admin-pages">
      <NavigationBarAdmin />
      <header>
        <h1>Admin details</h1>
        <form onSubmit={(event) => onSubmit(event)}>
          <InputField fields={Fields} state={[data, setData]} />
          <hr />
          <button>Save</button>
        </form>
      </header>
    </div>
  );
}
