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
    imagePrincipale: "/images/appart.png",
    galerie: [
      "/images/appart2.jpg",
      "/images/appart.png",
      "/images/appart5.jpg"
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
    imagePrincipale: "/images/appart2.jpg",
    galerie: [
      "/images/appart5.jpg",
      "/images/appart.png"
    ],
    options: ["TV", "Climatisation", "Cuisine"],
    disponible: false
  },
  {
    id: 3,
    type: "Appartement",
    titre: "Appartement spacieux à Kribi",
    description: "Grand appartement avec vue mer, proche de la plage.",
    localisation: "Kribi Centre",
    prix: 30000,
    superficie: "120 m²",
    chambres: 3,
    sallesDeBain: 2,
    imagePrincipale: "/images/appart3.jpg",
    galerie: [
      "/images/appart.png",
      "/images/appart3.jpg"
    ],
    options: ["Piscine", "Parking", "Balcon", "Wifi"],
    disponible: true
  },
  {
    id: 4,
    type: "Appartement",
    titre: "Appartement moderne à Douala",
    description: "Studio confortable idéal pour étudiant ou jeune actif.",
    localisation: "Bonanjo, Douala",
    prix: 15000,
    superficie: "40 m²",
    chambres: 1,
    sallesDeBain: 1,
    imagePrincipale: "/images/appart5.jpg",
    galerie: [
      "/images/appart7.jpg",
      "/images/appart3.jpg"
    ],
    options: ["Wifi", "Cuisine équipée", "Climatisation"],
    disponible: true
  },
  {
    id: 5,
    type: "Appartement",
    titre: "Appartement luxueux à Limbe",
    description: "Appartement haut de gamme avec toutes les commodités modernes.",
    localisation: "Limbe Waterfront",
    prix: 35000,
    superficie: "100 m²",
    chambres: 2,
    sallesDeBain: 2,
    imagePrincipale: "/images/appart6.jpeg",
    galerie: [
      "/images/appart5.jpg",
      "/images/appart7.jpg",
      "/images/appart3.jpg"
    ],
    options: ["Piscine", "Wifi", "Sécurité 24/7", "Parking", "Balcon"],
    disponible: false
  },
  {
    id: 6,
    type: "Appartement",
    titre: "Appartement familial à Bafoussam",
    description: "Idéal pour familles, proche des écoles et commerces.",
    localisation: "Bafoussam Centre",
    prix: 22000,
    superficie: "90 m²",
    chambres: 3,
    sallesDeBain: 2,
    imagePrincipale: "/images/appart7.jpg",
    galerie: [
      "/images/appart3.jpg",
      "/images/appart7.jpg"
    ],
    options: ["Parking", "Cuisine équipée", "Wifi", "Climatisation"],
    disponible: true
  }
];

export default appartements;
