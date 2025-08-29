import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaLock, FaHeadset, FaCreditCard } from "react-icons/fa";
import TestimonialsSection from "../components/TestimonialsSection";

export default function HomePage() {
  return (
    <div>
      {/* === STYLES CSS INLINE === */}
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
          }
          .carousel-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .carousel-inner .carousel-item {
            transition: transform 0.6s ease-in-out;
          }
          .feature-section {
            display: flex;
            justify-content: space-between;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
            flex-wrap: wrap;
          }
          .feature-item {
            display: flex;
            align-items: center;
            gap: 10px;
            text-align: left;
            flex: 1;
            min-width: 200px;
            margin: 10px 0;
          }
          .icon {
            font-size: 24px;
            color: #6f42c1;
          }
          .feature-item h3 {
            font-size: 16px;
            margin-bottom: 5px;
          }
          .feature-item p {
            font-size: 12px;
            color: #666;
          }
          .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            color: white;
            text-decoration: none;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease;
            background-color: #6f42c1;
          }
          .btn:hover {
            background-color: #5d3fc2;
          }
          .image-section {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            margin: 30px auto;
            flex-wrap: wrap;
            max-width: 1000px;
            padding: 0 10px;
          }
          .image-wrapper {
            flex: 1;
            min-width: 280px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease;
            margin: 0 10px;
          }
          .image-wrapper:hover {
            transform: scale(1.03);
          }
          .image-wrapper img {
            width: 100%;
            height: 340px;
            object-fit: cover;
            display: block;
          }
          .appartement-section {
            background-color: #ffffff;
            padding: 60px 20px;
            text-align: left;
            margin-top: 30px;
          }
          .appartement-container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
            gap: 30px;
          }
          .appartement-text {
            flex: 1;
            min-width: 300px;
          }
          .appartement-text h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #333;
          }
          .appartement-text p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #555;
            margin-bottom: 30px;
          }
          .appartement-features {
            display: flex;
            flex-wrap: wrap;
            gap: 20px 0;
          }
          .appartement-feature {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            width: 48%;
          }
          .appartement-feature .icon {
            font-size: 24px;
            color: #6f42c1;
            flex-shrink: 0;
          }
          .appartement-feature h3 {
            font-size: 1rem;
            margin-bottom: 5px;
          }
          .appartement-feature p {
            font-size: 0.9rem;
            color: #666;
          }
          .appartement-image {
            flex: 1;
            min-width: 300px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .appartement-image img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        `}
      </style>

      {/* === SLIDER === */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {["Bienvenue sur AppartEase", "Studios confortables & modernes", "Chambres élégantes & équipées"].map(
            (title, i) => (
              <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                <div
                  className="d-flex align-items-center justify-content-center text-white text-center"
                  style={{
                    backgroundImage:
                      "url('https://www.espaces-atypiques.com/wp-content/uploads/149294/4260EP/149294-4260EP-52362945h.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "500px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                  ></div>
                  <div style={{ zIndex: 2 }}>
                    <h1 className="display-5 fw-bold">{title}</h1>
                    <p>Location d'appartements modernes au Cameroun</p>
                    <a href="/Appartements" className="btn">RÉSERVEZ</a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>

      {/* === SECTION APPARTEMENT === */}
      <section className="appartement-section">
        <div className="appartement-container">
          <div className="appartement-text">
            <h2 style={{ color: '#6f42c1' }}>Nos appartements modernes et bien équipés</h2>

            <p>
              Découvrez nos appartements conçus pour votre confort et votre bien-être. Chaque logement est doté de
              technologies modernes et de commodités haut de gamme pour vous offrir un séjour inoubliable.
            </p>
            <div className="appartement-features">
              {[
                { title: "Chambres spacieuses", desc: "Des espaces bien aménagés pour votre détente." },
                { title: "Cuisine équipée", desc: "Four, micro-ondes, réfrigérateur et plus encore." },
                { title: "Salon moderne", desc: "Un espace convivial pour profiter de moments en famille ou entre amis." },
                { title: "Balcon ou terrasse", desc: "Profitez d’un espace extérieur pour vous détendre." },
              ].map((item, idx) => (
                <div className="appartement-feature" key={idx}>
                  <FaHome className="icon" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="appartement-image">
            <img
              src="https://i.ytimg.com/vi/G-V2QET0a-w/maxresdefault.jpg"
              alt="Appartement moderne"
            />
          </div>
        </div>
      </section>

      {/* === SECTION OPTIONS === */}
      <div className="feature-section">
        <div className="feature-item">
          <FaHome className="icon" />
          <div>
            <h3>Appartements Modernes</h3>
            <p>Découvrez nos appartements entièrement rénovés.</p>
          </div>
        </div>
        <div className="feature-item">
          <FaLock className="icon" />
          <div>
            <h3>Sécurité Assurée</h3>
            <p>Toutes nos locations sont vérifiées et sécurisées.</p>
          </div>
        </div>
        <div className="feature-item">
          <FaCreditCard className="icon" />
          <div>
            <h3>Paiement 100% Sécurisé</h3>
            <p>Votre paiement est protégé par un système crypté.</p>
          </div>
        </div>
        <div className="feature-item">
          <FaHeadset className="icon" />
          <div>
            <h3>Assistance 24h/7j</h3>
            <p>Nous sommes disponibles pour vous aider.</p>
          </div>
        </div>
      </div>

      {/* === SECTION IMAGES === */}
      <div className="image-section">
        <div className="image-wrapper">
          <img
            src="https://www.mubawab-media.com/ad/7/605/820F/h/Les%20Jardins%20de%20Mesnana%20Golf%2010_23373814_30445580_37956215_37956293_37956509.jpg"
            alt="Appartement moderne 1"
          />
        </div>
        <div className="image-wrapper">
          <img
            src="https://altusrealty.it/wp-content/uploads/2022/02/Altus-Lifestyle-Lungarno-Guicciardini-1.jpg"
            alt="Appartement moderne 2"
          />
        </div>
      </div>

      {/* === SECTION TÉMOIGNAGES === */}
      <TestimonialsSection />
    </div>
  );
}
