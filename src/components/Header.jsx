import React from "react";

function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <div className="container-fluid ">
            <a className="navbar-brand h1" href="https://kaarvaan.in/">kaarvaan</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">Career</a>
                </li>               
              </ul>
            </div>
          </div>
        </nav>
      );
    }
export default Header;