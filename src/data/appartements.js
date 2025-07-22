const appartements = [
  {
    id: 1,
    type: "Appartement",
    titre: "Appartement moderne à Yaoundé",
    description: "Appartement 3 pièces avec cuisine équipée, wifi, et balcon.",
    localisation: "Bastos, Yaoundé",
    prix: 25000,
    superficie: "80 m²",
    chambres: 2,
    sallesDeBain: 1,
    imagePrincipale: "/images/appartements/yaounde1.jpg",
    galerie: [
      "/images/appartements/yaounde1.jpg",
      "/images/appartements/yaounde2.jpg",
      "/images/appartements/yaounde3.jpg"
    ],
    options: ["Climatisation", "Wifi", "Cuisine équipée", "Parking"],
    disponible: true
  },
  {
    id: 2,
    type: "Appartement",
    titre: "Appartement cosy à Douala",
    description: "Appartement bien situé à Akwa, proche des commerces.",
    localisation: "Akwa, Douala",
    prix: 20000,
    superficie: "65 m²",
    chambres: 1,
    sallesDeBain: 1,
    imagePrincipale: "/images/appartements/douala1.jpg",
    galerie: [
      "/images/appartements/douala1.jpg",
      "/images/appartements/douala2.jpg"
    ],
    options: ["TV", "Climatisation", "Cuisine"],
    disponible: false
  }
];

export default appartements;
