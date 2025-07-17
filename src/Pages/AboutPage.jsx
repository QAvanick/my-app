import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage:
            'url("https://th.bing.com/th/id/R.a5064078369c34a2683c285824e6ba96?rik=fv6qtBV9FRmfkg&pid=ImgRaw&r=0")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "280px",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold' }}>À propos</h1>
          <div style={{ fontSize: '0.95rem', marginTop: '10px', color: '#ddd' }}>
            <Link to="/" className="text-white text-decoration-none">Accueil</Link> / À propos
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-5">
        {/* Qui sommes-nous */}
        <section className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="mb-3">Qui sommes-nous ?</h2>
            <p className="text-muted">
              <strong>Appart Ease</strong> est une plateforme de location moderne, conçue pour connecter
              les voyageurs, étudiants et professionnels aux meilleurs coins : appartements, studios et chambres.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?cs=srgb&dl=pexels-fotoaibe-1571468.jpg&fm=jpg"
              className="img-fluid rounded shadow"
              alt="Appart Ease Présentation"
            />
          </div>
        </section>

        {/* Vision / Mission */}
        <section className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="mb-3">Notre vision</h2>
            <p className="text-muted">
              Rendre la location d'espaces simple, rapide, accessible et fiable pour tous, au Cameroun et ailleurs.
            </p>
            <h4 className="mt-4">Notre mission</h4>
            <p className="text-muted">
              Créer un réseau digital de logements vérifiés, disponibles à tout moment – pour une nuit ou plusieurs mois.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?cs=srgb&dl=pexels-pixabay-259950.jpg&fm=jpg"
              className="img-fluid rounded shadow"
              alt="Vision"
            />
          </div>
        </section>

        {/* Pourquoi choisir Appart Ease */}
        <section className="text-center mb-5">
          <h2 className="mb-4">Pourquoi choisir Appart Ease ?</h2>
          <ul className="list-unstyled text-muted">
            <li>✔️ Interface simple et intuitive</li>
            <li>✔️ Offres vérifiées et sécurisées</li>
            <li>✔️ Paiement sécurisé & assistance disponible</li>
            <li>✔️ Accès depuis mobile et ordinateur</li>
          </ul>
        </section>

        {/* Nos engagements */}
        <section className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="mb-3">Nos engagements</h2>
            <p className="text-muted">
              Nous garantissons des coins fiables, des paiements sécurisés et un support client à votre écoute.
            </p>
            <ul className="text-muted ps-3">
              <li>🔐 Sécurité des données et transactions</li>
              <li>🏠 Logements conformes et vérifiés</li>
              <li>📞 Support réactif</li>
              <li>🌐 Accessible 24h/24 depuis tous vos appareils</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_1280.jpg"
              className="img-fluid rounded shadow"
              alt="Engagements"
            />
          </div>
        </section>

        {/* Équipe */}
        <section className="text-center">
          <h2 className="mb-4">Notre Équipe</h2>
          <p className="text-muted mb-5">
            Une équipe passionnée par la tech, l'immobilier et le service client – au service de votre confort.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-5">
            <div>
              <img src="https://tse1.mm.bing.net/th/id/OIP.ArL9093Gh1mbRtJ3JLUkkQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Vanick" className="rounded-circle" style={{ width: '140px' }} />
              <h5 className="mt-3">Vanick N.</h5>
              <small className="text-muted">Fondateur & CTO</small>
            </div>
            <div>
              <img src="https://tse1.mm.bing.net/th/id/OIP.ArL9093Gh1mbRtJ3JLUkkQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Estelle" className="rounded-circle" style={{ width: '140px' }} />
              <h5 className="mt-3">Estelle K.</h5>
              <small className="text-muted">Responsable Clientèle</small>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
