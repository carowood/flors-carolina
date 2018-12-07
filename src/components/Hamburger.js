import React from "react";

export default function Hamburger({ className, handleChange }) {
  return (
    <div className="container">
      <div className="number">3</div>
      <a className="burger burger-3">
        <span className="line-1" />
        <span className="line-2" />
        <span className="line-3" />
      </a>
    </div>
  );
}
