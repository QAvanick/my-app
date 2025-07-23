import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import "../styles/AppartementDetail.css";

export default function AppartementDetail() {
  const appartement = {
    titre: "Appartement Moderne à Bonapriso",
    localisation: "Bonapriso, Douala",
    imagePrincipale: "/images/appart.png",
    images: [
      "/images/appart2.jpg",
      "/images/appart3.jpg",
      "/images/appart2.jpg",
      "/images/appart2.jpg",
    ],
    prix: 45000,
    capacite: 4,
    chambres: 2,
    sallesDeBain: 1,
    superficie: "85m²",
    options: ["Climatisation", "Wifi", "Cuisine équipée", "Parking"]
  };

  const [imageActive, setImageActive] = useState(appartement.imagePrincipale);
  const [isZoomed, setIsZoomed] = useState(false); // ✅ Pour afficher le zoom

  return (
    <>
      {/* ✅ BANNIÈRE AVEC IMAGE DE FOND */}
      <div
        className="breadcrumb-banner"
        style={{
          backgroundImage: `url('/images/appart2.jpg')`,
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

      {/* ✅ CONTENU PRINCIPAL */}
      <div className="detail-container">
        {/* ✅ SECTION GAUCHE */}
        <div className="left-section">
          <img
            src={imageActive}
            alt={appartement.titre}
            className="main-image"
            onClick={() => setIsZoomed(true)} // 👉 Clique pour zoomer
          />

          {/* Miniatures */}
          <div className="thumbnails">
            {[appartement.imagePrincipale, ...appartement.images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Vue ${index}`}
                className={imageActive === img ? "active" : ""}
                onClick={() => setImageActive(img)}
              />
            ))}
          </div>

          {/* ✅ Caractéristiques avec icônes */}
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

            {/* ✅ Options d’équipement */}
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

        {/* ✅ SECTION DROITE - Formulaire */}
        <div className="right-section">
          <h2 className="detail-title">Réservez cet appartement</h2>
          <form className="form-reservation">
            <label>Nom complet</label>
            <input type="text" placeholder="Nom et prénom *" required />

            <label>Email</label>
            <input type="email" placeholder="Adresse email *" required />

            <label>Téléphone</label>
            <input type="tel" placeholder="Numéro de téléphone *" required />

            <div className="row">
              <div>
                <label>Date d’arrivée</label>
                <input type="date" />
              </div>
              <div>
                <label>Date de départ</label>
                <input type="date" />
              </div>
            </div>

            <label>Nombre de personnes</label>
            <input type="number" min="1" defaultValue="1" />

            <label>Message supplémentaire</label>
            <textarea placeholder="Message..."></textarea>

            <button type="submit">Réserver</button>
          </form>
        </div>
      </div>

      {/* ✅ MODAL ZOOM IMAGE */}
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
