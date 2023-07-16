import React from "react";

export default function Header({ app }) {
  return <div className="p-5 bg-blue-200">Header from Home | {app.name}</div>;
}
