import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_nuy0ff5',
      'template_skbi418',
      form.current,
      'oLq29tbJ-2CVLQwOr'
    ).then(
      () => {
        setMessage("");
        form.current.reset();
        const toastElement = document.getElementById('newsletterToast');
        const toast = new window.bootstrap.Toast(toastElement);
        toast.show();
      },
      () => {
        setMessage("❌ Une erreur est survenue. Veuillez réessayer.");
      }
    );
  };

  return (
    <>
      <footer className="bg-dark text-light pt-5 pb-4 mt-5">
        <div className="container">
          <div className="row">
            {/* Logo + description */}
            <div className="col-md-3 mb-4">
              <img src={logo} alt="Logo" width="50" className="mb-2" />
              <h5 className="fw-bold">AppartEase</h5>
              <p>{t("footer.description")}</p>
            </div>

            {/* Liens rapides */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">{t("footer.quickLinks")}</h6>
              <ul className="list-unstyled">
                <li><a href="#accueil" className="text-light text-decoration-none">{t("footer.home")}</a></li>
                <li><a href="#apropos" className="text-light text-decoration-none">{t("footer.about")}</a></li>
                <li><a href="#contact" className="text-light text-decoration-none">{t("footer.contact")}</a></li>
                <li><a href="#reserver" className="text-light text-decoration-none">{t("footer.book")}</a></li>
              </ul>
            </div>

            {/* Appartements */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">{t("footer.apartments")}</h6>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle me-2 text-primary"></i>{t("footer.yaounde")}</li>
                <li><i className="bi bi-check-circle me-2 text-primary"></i>{t("footer.daily")}</li>
                <li><i className="bi bi-check-circle me-2 text-primary"></i>{t("footer.wifi")}</li>
                <li><i className="bi bi-check-circle me-2 text-primary"></i>{t("footer.secure")}</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">{t("footer.newsletter")}</h6>
              <p>{t("footer.subscribeText")}</p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="input-group">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    placeholder={t("footer.placeholder")}
                    required
                  />
                  <button className="btn" type="submit" style={{ backgroundColor: "#6f42c1" }}>
                    {t("footer.subscribe")}
                  </button>
                </div>
              </form>
              {message && <div className="mt-2 small">{message}</div>}

              <div className="mt-3 d-flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook fs-4 text-light"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram fs-4 text-light"></i>
                </a>
                <a href="https://wa.me/237655004995" target="_blank" rel="noreferrer">
                  <i className="bi bi-whatsapp fs-4 text-light"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <hr className="border-top border-light" />
          <div className="text-center">
            <small>&copy; {new Date().getFullYear()} AppartEase. {t("footer.rights")}</small>
          </div>
        </div>
      </footer>

      {/* ✅ Toast */}
      <div
        className="position-fixed top-0 end-0 p-3"
        style={{ zIndex: 9999, marginTop: "60px" }}
      >
        <div
          id="newsletterToast"
          className="toast align-items-center text-bg-success border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              {t("footer.successToast")}
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}
