import React, { useState, useEffect } from "react";

import { getFastapiMessage } from "./products";

export default function Header() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getFastapiMessage().then(setMsg);
  }, []);

  return <div className="p-5 bg-blue-200">Header from Home {msg.message}</div>;
}
