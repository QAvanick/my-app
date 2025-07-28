import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Offcanvas
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import france from "../assets/france.png";
import anglaiss from "../assets/anglaiss.png";

export default function MyNavbar() {
  const { t, i18n } = useTranslation(); // on garde global pour "footer" aussi éventuellement
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm py-3 px-4">
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
              <Nav.Link href="/" className="fw-bold">{t("navbar.home")}</Nav.Link>
              <NavDropdown title={t("navbar.ourRentals")} className="fw-bold">
                <NavDropdown.Item href="/Appartements">{t("navbar.apartments")}</NavDropdown.Item>
                <NavDropdown.Item href="#studio">{t("navbar.modernStudios")}</NavDropdown.Item>
                <NavDropdown.Item href="#rooms">{t("navbar.modernRooms")}</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/a-propos" className="fw-bold">{t("navbar.aboutUs")}</Nav.Link>
              <Nav.Link href="/contact" className="fw-bold">{t("navbar.contactUs")}</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center gap-3">
              {/* Lang switch */}
              <div className="d-flex align-items-center gap-2">
                <img
                  src={france}
                  alt="FR"
                  width="24"
                  style={{
                    opacity: i18n.language === "fr" ? 1 : 0.4,
                    cursor: "pointer"
                  }}
                  onClick={() => i18n.changeLanguage("fr")}
                />
                <img
                  src={anglaiss}
                  alt="EN"
                  width="22"
                  style={{
                    opacity: i18n.language === "en" ? 1 : 0.4,
                    cursor: "pointer"
                  }}
                  onClick={() => i18n.changeLanguage("en")}
                />
              </div>

              <Button style={{ backgroundColor: "#6f42c1", border: "none", color: "#fff" }}>
                <Link to="/Appartements" style={{ color: "#fff", textDecoration: "none" }}>
                  {t("navbar.bookNow")}
                </Link>
              </Button>

              <Button
                variant="outline-dark"
                className="d-none d-lg-block"
                style={{ backgroundColor: "transparent", border: "none", boxShadow: "none", color: "#000" }}
                onClick={() => setShowInfo(true)}
              >
                ☰ <strong>{t("navbar.info")}</strong>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showInfo} onHide={() => setShowInfo(false)} placement="end" className="bg-dark text-white">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <img src={logo} alt="Logo" width="40" className="me-2" />
            AppartEase
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><strong>{t("navbar.address")}:</strong> Entrée Simbok, Yaoundé</p>
          <p><strong>{t("navbar.callUs")}:</strong><br />
            +237 656 94 79 51<br />
            +237 695 89 96 48<br />
            +33 616 63 42 37
          </p>
          <p><strong>{t("navbar.email")}:</strong> contact@AppartEase.com</p>

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
