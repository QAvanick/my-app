import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import logo from "../assets/logo.png";

export default function Footer() {
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

        // Affiche le toast de succès
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
              <p>
                Location de voitures & appartements meublés au Cameroun.
                Confort, sécurité, professionnalisme.
              </p>
            </div>

            {/* Liens rapides */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Liens rapides</h6>
              <ul className="list-unstyled">
                <li><a href="#accueil" className="text-light text-decoration-none">Accueil</a></li>
                <li><a href="#apropos" className="text-light text-decoration-none">À propos</a></li>
                <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
                <li><a href="#reserver" className="text-light text-decoration-none">Réserver</a></li>
              </ul>
            </div>

            {/* Appartements */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Locations d'appartements</h6>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle me-2 text-primary"></i> Meublés à Yaoundé</li>
                <li><i className="bi bi-check-circle me-2 text-primary"></i> Locations journalières</li>
                <li><i className="bi bi-check-circle me-2 text-primary"></i> Wifi & Climatisation</li>
                <li><i className="bi bi-check-circle me-2 text-primary"></i> Quartiers sécurisés</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Newsletter</h6>
              <p>Inscrivez-vous pour recevoir nos offres et nouveautés.</p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="input-group">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Votre email"
                    required
                  />
                  <button className="btn" type="submit" style={{ backgroundColor: "#6f42c1" }}>
                    S'inscrire
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
            <small>&copy; {new Date().getFullYear()} AppartEase. Tous droits réservés.</small>
          </div>
        </div>
      </footer>

      {/* ✅ Toast affiché en haut à droite sous la navbar */}
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
              🎉 Inscription à la newsletter réussie !
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Fermer"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}
