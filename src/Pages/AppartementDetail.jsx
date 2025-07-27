import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


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
import appartements from "../data/appartements";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/AppartementDetail.css";

export default function AppartementDetail() {
  const { id } = useParams();
  const [appartement, setAppartement] = useState(null);
  const [imageActive, setImageActive] = useState("");
  const [isZoomed, setIsZoomed] = useState(false);

  const [dateArrivee, setDateArrivee] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [nombreJours, setNombreJours] = useState(0);
  const [coutTotal, setCoutTotal] = useState(0);

  const formRef = useRef();

  // Recharge les données à chaque changement d'ID
  useEffect(() => {
    const apt = appartements.find((a) => a.id === parseInt(id));
    setAppartement(apt);
    if (apt) {
      setImageActive(apt.imagePrincipale || "");
      setDateArrivee("");
      setDateDepart("");
      setNombreJours(0);
      setCoutTotal(0);
    }
  }, [id]);

  if (!appartement) {
    return (
      <div className="text-center p-5">
        <h2>Appartement introuvable</h2>
        <Link to="/appartements">← Retour aux appartements</Link>
      </div>
    );
  }

  const galerie = Array.isArray(appartement.galerie) ? appartement.galerie : [];

  const calculerNombreJoursEtCout = (date1, date2) => {
    if (!date1 || !date2) return;
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2 - d1);
    const jours = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setNombreJours(jours);
    setCoutTotal(jours * appartement.prix);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mq1fcmx",
      "template_0pqf1hk",
      formRef.current,
      "hY_6Su8e5hNAK748L"
    )
      .then(() => {
        toast.success("Réservation envoyée avec succès !");
        formRef.current.reset();
        setImageActive(appartement.imagePrincipale);
        setNombreJours(0);
        setCoutTotal(0);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
        toast.error("Une erreur est survenue lors de l'envoi.");
      });
  };

  return (
    <>
      <div
        className="breadcrumb-banner"
        style={{ backgroundImage: `url('${appartement.imagePrincipale}')` }}
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
              <li><FaBath className="icon" /><strong> Salles de bain :</strong> {appartement.sallesDeBain}</li>
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
            <input
              type="text"
              name="appartement"
              value={appartement.titre}
              readOnly
              style={{ color: "green", fontWeight: "bold" }}
            />

            <label>Nom complet</label>
            <input type="text" name="nom" placeholder="Nom et prénom *" required />

            <label>Email</label>
            <input type="email" name="email" placeholder="Adresse email *" required />

            <label>Téléphone</label>
            <input type="tel" name="telephone" placeholder="Numéro de téléphone *" required />

            <div className="row">
              <div>
                <label>Date d’arrivée</label>
                <input
                  type="date"
                  name="dateArrivee"
                  required
                  onChange={(e) => {
                    setDateArrivee(e.target.value);
                    calculerNombreJoursEtCout(e.target.value, dateDepart);
                  }}
                />
              </div>
              <div>
                <label>Date de départ</label>
                <input
                  type="date"
                  name="dateDepart"
                  required
                  onChange={(e) => {
                    setDateDepart(e.target.value);
                    calculerNombreJoursEtCout(dateArrivee, e.target.value);
                  }}
                />
              </div>
            </div>

            <label>Nombre de personnes</label>
            <input type="number" name="personnes" min="1" defaultValue="1" required />

            <label>Nombre de jours</label>
            <input type="number" name="jours" value={nombreJours} readOnly />

            <label>Coût total</label>
            <input
              type="text"
              name="cout"
              value={`${coutTotal.toLocaleString()} FCFA`}
              readOnly
            />

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

      {/* Suggestions en bas */}
      <div className="suggestions-section">
        <h3>Vous pourriez être intéressé par :</h3>
        <div className="suggestions-list">
          {appartements
            .filter(a => a.id !== appartement.id)
            .slice(0, 3)
            .map((a) => (
              <Link key={a.id} to={`/appartement/${a.id}`} className="suggestion-card">
                <img src={a.imagePrincipale} alt={a.titre} />
                <div className="suggestion-info">
                  <h5>{a.titre}</h5>
                  <p>{a.localisation}</p>
                  <p className="prix">{a.prix.toLocaleString()} FCFA / nuit</p>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}
