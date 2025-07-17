import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import logo from "../assets/logo.png";
import france from "../assets/france.png";
import anglaiss from "../assets/anglaiss.png";

export default function MyNavbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyage
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-light py-3 px-4 ${
          isSticky ? "fixed-top shadow-sm" : "position-relative"
        }`}
        style={{
          transition: "all 0.3s ease",
          zIndex: 999
        }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="Logo" width="40" height="40" className="me-2" />
            <strong>
              Appart <span style={{ color: "#6f42c1" }}>Ease</span>
            </strong>
          </a>

          {/* Bouton mobile */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#accueil">ACCUEIL</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-bold"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  NOS APPARTEMENTS
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#voiture1">Appartement 1</a></li>
                  <li><a className="dropdown-item" href="#voiture2">Appartement 2</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/a-propos">A PROPOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/contact">NOUS CONTACTER</a>
              </li>
            </ul>
          </div>

          {/* Langue + Réservez */}
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-2">
              <img src={france} alt="FR" width="20" />
              <div className="form-check form-switch mb-0">
                <input className="form-check-input" type="checkbox" id="langSwitch" />
              </div>
              <img src={anglaiss} alt="EN" width="18" />
            </div>
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "#6f42c1", color: "white" }}
            >
              RÉSERVEZ
            </button>
          </div>

          {/* Offcanvas (infos entreprise) */}
          <button
            className="btn d-none d-lg-block"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#companyInfo"
            aria-controls="companyInfo"
            style={{ color: "#6f42c1" }}
          >
            ☰ <strong>Infos</strong>
          </button>
        </div>
      </nav>

      {/* Offcanvas infos entreprise */}
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        tabIndex="-1"
        id="companyInfo"
        aria-labelledby="companyInfoLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="companyInfoLabel">
            <img src={logo} alt="Logo" width="40" className="me-2" />
            AppartEase
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p><strong>Adresse:</strong> Entrée Simbok, Yaoundé</p>
          <p><strong>Appelez-nous:</strong><br />
            +237 655 00 49 95<br />
            +237 695 89 96 48<br />
            +33 616 63 42 37
          </p>
          <p><strong>Email:</strong> contact@AppartEase.com</p>
          <div className="d-flex gap-3 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="bi bi-facebook fs-4 text-white"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="bi bi-instagram fs-4 text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
