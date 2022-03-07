import React from "react";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-header">
        <img className="nav-logo" src="assets/images/header-logo.png"></img>
        <h1 className="nav-title">Meme Generator</h1>
      </div>
      <h3 className="nav-subtitle">React Course - Project 3</h3>
    </nav>
  );
}
