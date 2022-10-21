// Node modules
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Project files
import ListInput from "components/ListInput";
import Fields from "data/fields-sign-in.json";
import iUser from "interfaces/iUser";
import { useUser } from "state/UserContext";

export default function Login() {
  // Global state
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  // Local state
  const [form, setForm] = useState({});

  // Properties
  const endPoint = "http://localhost:8080/login";
  const METHOD = "POST";
  const HEADERS = { "Content-type": "application/json; charset=UTF-8" };

  // Methods
  function onSubmit(event: FormEvent): void {
    event.preventDefault();
    fetch(endPoint, {
      method: METHOD,
      headers: HEADERS,
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((json) => onSuccess(json))
      .catch((error) => onFailure(error));
  }

  function onSuccess(returningUser: iUser) {
    setUser(returningUser);
    navigate("/");
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
