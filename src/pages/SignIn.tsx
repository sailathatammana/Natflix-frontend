// Node modules
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// Project files
import ListInput from "components/ListInput";
import Fields from "data/fields-sign-in.json";
import fakeFetch from "scripts/fakeFetch";
import iUser from "interfaces/iUser";
import { useUser } from "state/UserContext";

export default function Login() {
  // Global state
  const { setUser } = useUser();

  // Local state
  const [form, setForm] = useState({ email: "foo@gmail.com", password: "123" });

  // Properties
  const endPoint = "login/";

  // Methods
  function onSubmit(event: FormEvent): void {
    event.preventDefault();
    fakeFetch(endPoint, form)
      .then((response) => onSuccess(response.data))
      .catch((error) => onFailure(error));
  }

  function onSuccess(user: iUser) {
    alert("Logged in");
    setUser(user);
  }

  function onFailure(error: string) {
    console.error(error);
    alert(error);
  }

  return (
    <div id="sign-in" className="auth">
      <div className="container">
        <h1>Sign In</h1>
        <form onSubmit={(event) => onSubmit(event)}>
          <ListInput fields={Fields} state={[form, setForm]} />
          <button>Sign in</button>
        </form>
        <footer>
          <p>
            New to Natflix? <Link to="/registration">Sign up now</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}
