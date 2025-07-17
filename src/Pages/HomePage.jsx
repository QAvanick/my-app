import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  return (
    <div>
      {/* Slider / Carousel */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div
              className="d-flex align-items-center justify-content-center text-white text-center"
              style={{
                backgroundImage: "url('https://www.espaces-atypiques.com/wp-content/uploads/149294/4260EP/149294-4260EP-52362945h.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
                position: "relative"
              }}
            >
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)"


              }}></div>

              <div style={{ zIndex: 2 }}>
                <h1 className="display-4 fw-bold">Bienvenue sur AppartEase</h1>
                <p>Location d'appartements modernes au Cameroun</p>
                <a href="#contact" style={{ backgroundColor: "#6f42c1" }} className="btn text-white">RÉSERVEZ</a>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div
              className="d-flex align-items-center justify-content-center text-white text-center"
              style={{
                backgroundImage: "url('https://www.espaces-atypiques.com/wp-content/uploads/149294/4260EP/149294-4260EP-52362945h.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
                position: "relative"
              }}
            >
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)"
              }}></div>

              <div style={{ zIndex: 2 }}>
                <h1 className="display-5 fw-bold">Studios confortables & modernes</h1>
                <p>Conçus pour votre bien-être au quotidien</p>
                <a href="#contact" style={{ backgroundColor: "#6f42c1" }} className="btn text-white">RÉSERVEZ</a>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div
              className="d-flex align-items-center justify-content-center text-white text-center"
              style={{
                backgroundImage: "url('https://www.espaces-atypiques.com/wp-content/uploads/149294/4260EP/149294-4260EP-52362945h.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
                position: "relative"
              }}
            >
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)"
              }}></div>

              <div style={{ zIndex: 2 }}>
                <h1 className="display-5 fw-bold">Chambres élégantes & équipées</h1>
                <p>Pour des séjours courts ou longs</p>
                <a href="#contact" style={{ backgroundColor: "#6f42c1" }} className="btn text-white">RÉSERVEZ</a>
              </div>
            </div>
          </div>

        </div>

        {/* Contrôles */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </div>
  );
}
