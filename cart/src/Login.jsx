import React, { useState } from "react";

import { login, useLoggedIn } from "./cart";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  if (!loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          className="absoluet p-5 border4 border-blue-800"
          style={{ width: 300, top: "2rem" }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400  p-2 rounded-md w-full"
          />
        </div>
      )}
    </>
  );
}