import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Offcanvas
} from "react-bootstrap";
import logo from "../assets/logo.png";
import france from "../assets/france.png";
import anglaiss from "../assets/anglaiss.png";

export default function MyNavbar() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className="shadow-sm py-3 px-4"
      >
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} alt="Logo" width="40" height="40" className="me-2" />
            <strong>
              Appart <span style={{ color: "#6f42c1" }}>Ease</span>
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/" className="fw-bold">ACCUEIL</Nav.Link>
              <NavDropdown title="NOS APPARTEMENTS" className="fw-bold">
                <NavDropdown.Item href="#voiture1">Appartement 1</NavDropdown.Item>
                <NavDropdown.Item href="#voiture2">Appartement 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/a-propos" className="fw-bold">A PROPOS</Nav.Link>
              <Nav.Link href="/contact" className="fw-bold">NOUS CONTACTER</Nav.Link>
            </Nav>

            {/* Langues + Réservez + Infos */}
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-2">
                <img src={france} alt="FR" width="20" />
                <div className="form-check form-switch mb-0">
                  <input className="form-check-input" type="checkbox" id="langSwitch" />
                </div>
                <img src={anglaiss} alt="EN" width="18" />
              </div>
              <Button style={{ backgroundColor: "#6f42c1", border: "none" }}>
                RÉSERVEZ
              </Button>
              <Button
                variant="outline-dark"
                className="d-none d-lg-block"
                onClick={() => setShowInfo(true)}
              >
                ☰ <strong>Infos</strong>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* OFFCANVAS */}
      <Offcanvas show={showInfo} onHide={() => setShowInfo(false)} placement="end" className="bg-dark text-white">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <img src={logo} alt="Logo" width="40" className="me-2" />
            AppartEase
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
