import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Marie Dupont",
    title: "Locataire",
    image: "https://tse4.mm.bing.net/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    review: "Bel appartement, bien situé et propre. Je recommande !",
    rating: 5,
  },
  {
    name: "Ali Ndongo",
    title: "Locataire",
    image: "https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg",
    review: "Accueil très professionnel et logement impeccable.",
    rating: 4,
  },
  // Ajoute d'autres témoignages...
];

export default function TestimonialsSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Avis de nos clients</h2>
        <Carousel indicators={false} interval={2000} slide={true}>
          {testimonials.map((t, idx) => (
            <Carousel.Item key={idx}>
              <div className="text-center px-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-circle mb-3 shadow-sm"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <p className="fst-italic">“{t.review}”</p>
                <h5 className="mt-3 mb-1">{t.name}</h5>
                <p className="text-muted mb-2">{t.title}</p>
                <div>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="text-warning" />
                  ))}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
