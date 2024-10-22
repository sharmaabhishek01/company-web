import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import Clint1 from '../../assets/sameer-sir.jpg'
import Clint2 from '../../assets/priyanshu-chaudhry.jpg'
import Clint3 from '../../assets/clint-3.jpg'

const testimonials = [
  {
    name: "Sameer Zaidi",
    description: "Fourth Wall Architect brought our vision to life with stunning design and great attention to detail. Their professionalism made the process effortless.",
    image: Clint1,
  },
  {
    name: "Priyanshu Chaudhry",
    description: "Fourth Wall Architect delivered beyond our expectations. Their team perfectly combined creativity with functionality, crafting a space that reflects our vision.",
    image: Clint2,
  },
  {
    name: "Prince Singh",
    description: "Fourth Wall Architect turned our ideas into a stunning reality. Their design expertise, attention to detail, and dedication to our project were exceptional.",
    image: Clint3,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Auto-slide every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="testimonial-section">
      <h1>WHAT OUR CLINT SAY</h1>
      <br/>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-info">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;