import { Link } from "react-router-dom";
import { FaUser, FaBed, FaRulerCombined } from "react-icons/fa";
import appartements from "../data/appartements";
import '../styles/AppartementsPage.css';


export default function AppartementsPage() {
  return (
    <div className="appartements-page">
      <h2 className="appartements-title">Nos Appartements Disponibles</h2>
      <div className="appartements-grid">
        {appartements.map((apt) => (
          <Link
            to={`/appartements/${apt.id}`}
            key={apt.id}
            className="appartement-card"
            style={{ backgroundImage: `url(${apt.imagePrincipale})` }}
          >
            <div className="overlay-content">
              <div className="card-header">
                <h5>{apt.titre}</h5>
                <span className="prix">{apt.prix.toLocaleString()} Fcfa</span>
              </div>
              <div className="infos">
                <div><FaUser /> {apt.capacite || apt.chambres + 2}</div>
                <div><FaBed /> {apt.chambres}</div>
                <div><FaRulerCombined /> {apt.superficie}</div>
              </div>
              <div className="status">
                {apt.disponible ? (
                  <span className="dispo">Disponible</span>
                ) : (
                  <span className="indispo">Indisponible</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
