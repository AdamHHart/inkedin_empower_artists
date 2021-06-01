import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [user, setUser] = useState();
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1>The login page</h1>
      <input
        type="text"
        name="User"
        title="User"
        onChange={(event) => setUser(event.target.value)}
      ></input>
      <Link
        to="/"
        onClick={() => {
          props.onLogin(user);
        }}
        style={{ textDecoration: "none", color: "lavender" }}
      >
        <button>Login</button>
      </Link>
      <h4 style={{ textDecoration: "none", color: "#B9A1BE" }}>
        Login by submitting a number between 1 and 12
      </h4>
    </form>
  );
}
