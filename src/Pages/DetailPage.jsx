import React from "react";
import { useParams } from "react-router-dom";
import appartements from "../data/appartements";

export default function DetailPage() {
  const { id } = useParams();
  const logement = appartements.find(item => item.id === parseInt(id));

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{logement.titre}</h1>
      <p className="text-gray-600">{logement.localisation}</p>
      <img src={logement.imagePrincipale} alt={logement.titre} className="w-full h-80 object-cover rounded-lg my-4" />
      <p className="text-lg">{logement.description}</p>
      <ul className="mt-4 list-disc pl-5">
        <li>Prix: {logement.prix} FCFA / nuit</li>
        <li>Chambres: {logement.chambres}</li>
        <li>Salles de bain: {logement.sallesDeBain}</li>
        <li>Superficie: {logement.superficie}</li>
        <li>Équipements: {logement.options.join(", ")}</li>
        <li>Status: {logement.disponible ? "Disponible" : "Indisponible"}</li>
      </ul>

      <div className="grid grid-cols-2 gap-2 mt-4">
        {logement.galerie.map((img, index) => (
          <img key={index} src={img} alt={`photo-${index}`} className="rounded" />
        ))}
      </div>
    </div>
  );
}
