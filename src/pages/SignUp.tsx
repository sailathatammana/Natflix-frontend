// Node modules
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Project files
import ListInput from "components/ListInput";
import Fields from "data/fields-sign-up.json";

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
    <div id="sign-up" className="auth">
      <div className="container">
        <h1>Set up your account</h1>
        <form onSubmit={(event) => onSubmit(event)}>
          <ListInput fields={Fields} state={[form, setForm]} />
          <button>Sign up</button>
        </form>
        <footer>
          <p>
            Already have an account? <Link to="/login">Sign in instead</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}
