import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaRulerCombined,
  FaBed,
  FaUsers,
  FaMoneyBillWave,
  FaBath,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimes
} from "react-icons/fa";
import appartements from "../data/appartements"; // Données des appartements
import emailjs from "@emailjs/browser";
import "../styles/AppartementDetail.css";

export default function AppartementDetail() {
  const { id } = useParams();
  const appartement = appartements.find(a => a.id === parseInt(id));

  const galerie = Array.isArray(appartement?.galerie) ? appartement.galerie : [];
  const [imageActive, setImageActive] = useState(appartement?.imagePrincipale || "");
  const [isZoomed, setIsZoomed] = useState(false);

  const formRef = useRef();

  if (!appartement) {
    return (
      <div className="text-center p-5">
        <h2>Appartement introuvable</h2>
        <Link to="/appartements">← Retour aux appartements</Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "ton_service_id",        // Remplace par ton service ID EmailJS
      "ton_template_id",       // Remplace par ton template ID EmailJS
      formRef.current,
      "ta_clef_publique"       // Remplace par ta clé publique EmailJS
    )
    .then(() => {
      alert("Réservation envoyée avec succès !");
      formRef.current.reset();
      setImageActive(appartement.imagePrincipale); // reset image si besoin
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi :", error);
      alert("Une erreur est survenue lors de l'envoi.");
    });
  };

  return (
    <>
      <div
        className="breadcrumb-banner"
        style={{
          backgroundImage: `url('${appartement.imagePrincipale}')`,
        }}
      >
        <div className="overlay" />
        <div className="breadcrumb-content">
          <h2 className="fw-bold">Détails de l'appartement</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none">Accueil</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/appartements" className="text-white text-decoration-none">Appartements</Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">Détails</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="detail-container">
        <div className="left-section">
          <img
            src={imageActive}
            alt={appartement.titre}
            className="main-image"
            onClick={() => setIsZoomed(true)}
          />

          <div className="thumbnails">
            {[appartement.imagePrincipale, ...galerie].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Vue ${index}`}
                className={imageActive === img ? "active" : ""}
                onClick={() => setImageActive(img)}
              />
            ))}
          </div>

          <div className="caracteristiques">
            <h4>Caractéristiques</h4>
            <ul>
              <li><FaMapMarkerAlt className="icon" /><strong> Localisation :</strong> {appartement.localisation}</li>
              <li><FaRulerCombined className="icon" /><strong> Superficie :</strong> {appartement.superficie}</li>
              <li><FaBed className="icon" /><strong> Chambres :</strong> {appartement.chambres}</li>
              <li><FaBath className="icon" /><strong> Salle de bain :</strong> {appartement.sallesDeBain}</li>
              <li><FaUsers className="icon" /><strong> Capacité :</strong> {appartement.capacite} personnes</li>
              <li><FaMoneyBillWave className="icon" /><strong> Prix :</strong> {appartement.prix.toLocaleString()} FCFA / nuit</li>
            </ul>

            {appartement.options?.length > 0 && (
              <div className="options">
                <h5>Équipements</h5>
                <ul>
                  {appartement.options.map((opt, i) => (
                    <li key={i}><FaCheckCircle className="icon check" /> {opt}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="right-section">
          <h2 className="detail-title">Réservez cet appartement</h2>
          <form className="form-reservation" onSubmit={handleSubmit} ref={formRef}>
            <label>Appartement</label>
            <input type="text" name="appartement" value={appartement.titre} readOnly style={{ color: "green", fontWeight: "bold" }} />

            <label>Nom complet</label>
            <input type="text" name="nom" placeholder="Nom et prénom *" required />

            <label>Email</label>
            <input type="email" name="email" placeholder="Adresse email *" required />

            <label>Téléphone</label>
            <input type="tel" name="telephone" placeholder="Numéro de téléphone *" required />

            <div className="row">
              <div>
                <label>Date d’arrivée</label>
                <input type="date" name="dateArrivee" required />
              </div>
              <div>
                <label>Date de départ</label>
                <input type="date" name="dateDepart" required />
              </div>
            </div>

            <label>Nombre de personnes</label>
            <input type="number" name="personnes" min="1" defaultValue="1" required />

            <label>Message supplémentaire</label>
            <textarea name="message" placeholder="Message..."></textarea>

            <button type="submit">Réserver</button>
          </form>
        </div>
      </div>

      {isZoomed && (
        <div className="zoom-overlay" onClick={() => setIsZoomed(false)}>
          <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsZoomed(false)}>
              <FaTimes />
            </button>
            <img src={imageActive} alt="Zoom" />
          </div>
        </div>
      )}
    </>
  );
}
