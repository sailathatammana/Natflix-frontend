// Node modules
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Project files
import ListInput from "components/ListInput";
import Fields from "data/fields-sign-in.json";

export default function Login() {
  // Global state
  const navigate = useNavigate();

  // Local state
  const [form, setForm] = useState({});

  // Methods
  function onSubmit(event: FormEvent): void {
    console.log("submitting credentials", form);
    event.preventDefault();
  }

  function onSuccess() {
    alert("Logged in");
    navigate("/");
  }

  function onFailure() {
    alert("Invalid credentials");
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
