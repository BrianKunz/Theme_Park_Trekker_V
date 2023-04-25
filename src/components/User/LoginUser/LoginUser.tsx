import React from "react";
import { useLoginUser } from "./useLoginUser";
import NavBar from "../../NavBar/NavBar";

export default function LoginUser() {
  const { handleSubmit, handleFormChange, formInputs, loading } =
    useLoginUser();

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formInputs.username}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formInputs.password}
            onChange={handleFormChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
