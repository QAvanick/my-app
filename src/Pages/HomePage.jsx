import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaLock, FaHeadset, FaCreditCard } from "react-icons/fa";

export default function HomePage() {
  return (
    <div>
      {/* === STYLES CSS INLINE === */}
      <style>
        {`
          /* Reset global */
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

          .carousel-inner .carousel-item {
            transition: transform 0.6s ease-in-out;
          }

          .carousel-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
            color: #007bff;
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
  padding: 0 10px; /* ✅ espace intérieur pour mobile */
}


          .image-wrapper {
            flex: 1;
            min-width: 280px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease;
            margin: 0 10px; /* ✅ marge extérieure gauche et droite */
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
        `}
      </style>

      {/* === SLIDER / CAROUSEL === */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
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
                <h1 className="display-4 fw-bold">Bienvenue sur AppartEase</h1>
                <p>Location d'appartements modernes au Cameroun</p>
                <a href="#contact" className="btn">RÉSERVEZ</a>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
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
                <h1 className="display-5 fw-bold">Studios confortables & modernes</h1>
                <p>Conçus pour votre bien-être au quotidien</p>
                <a href="#contact" className="btn">RÉSERVEZ</a>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
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
                <h1 className="display-5 fw-bold">Chambres élégantes & équipées</h1>
                <p>Pour des séjours courts ou longs</p>
                <a href="#contact" className="btn">RÉSERVEZ</a>
              </div>
            </div>
          </div>
        </div>

        {/* Contrôles du slider */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>

      {/* === SECTION DES OPTIONS === */}
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

      {/* === SECTION AVEC 2 IMAGES === */}
      <div className="image-section">
        <div className="image-wrapper">
          <img
            src="https://www.mubawab-media.com/ad/7/605/820F/h/Les%20Jardins%20de%20Mesnana%20Golf%2010_23373814_30445580_37956215_37956293_37956509.jpg"
            alt="Appartement moderne 1"
          />
        </div>
        <div className="image-wrapper">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.jk7KzAi99hz4HiSvqr3fLwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Appartement moderne 2"
          />
        </div>
      </div>
    </div>
  );
}
