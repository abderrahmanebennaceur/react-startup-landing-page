import { useState } from "react";

const testimonials = [
    {
      logo: "/logos/ztos.png",
      quote:
        "As a designer who dabbles in coding, the web-based code editor has been a fantastic discovery. It provides a user-friendly interface with helpful features like syntax highlighting and code auto-completion, making coding more accessible to me!",
      name: "Marvin McKinney",
      role: "Product Design at Ztos Studio",
      image: "/testimonials/marvin.jpg",
    },
    {
      logo: "/logos/codelab.png",
      quote:
        "As a freelancer, the web-based code editor has significantly improved my workflow and productivity. The ability to access my code projects from any device has given me the flexibility to work remotely and manage multiple projects simultaneously.",
      name: "Devon Lane",
      role: "Front End at Codelab",
      image: "/testimonials/devon.jpg",
    },
    {
      logo: "/logos/amara.png",
      quote:
        "The editor's powerful features, such as real-time collaboration and debugging tools, have saved me valuable time and effort. The code editor has become an essential part of my arsenal, enabling me to deliver high-quality projects to my clients efficiently.",
      name: "Ronald Richards",
      role: "Back End at Amara",
      image: "/testimonials/ronald.jpg",
    },
    {
      logo: "/logos/ztos.png",
      quote:
        "As a designer who dabbles in coding, the web-based code editor has been a fantastic discovery. It provides a user-friendly interface with helpful features like syntax highlighting and code auto-completion, making coding more accessible to me!",
      name: "Marvin McKinney",
      role: "Product Design at Ztos Studio",
      image: "/testimonials/marvin.jpg",
    },
    {
      logo: "/logos/codelab.png",
      quote:
        "As a freelancer, the web-based code editor has significantly improved my workflow and productivity. The ability to access my code projects from any device has given me the flexibility to work remotely and manage multiple projects simultaneously.",
      name: "Devon Lane",
      role: "Front End at Codelab",
      image: "/testimonials/devon.jpg",
    },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index: number) => setCurrent(index);

  return (
    <section className="w-full text-white py-16">
      <div className="mx-auto text-center">

      <h2 className="text-sm text-center uppercase font-semibold text-gray-300 mb-2">
          Testimonial Story
        </h2>

        {/* Title */}
        <h2 className="text-4xl font-bold mb-12">
          They tell me about the <span className="text-blue-500">metabox</span>
        </h2>

        {/* Carousel */}
        <div className="flex overflow-hidden items-center justify-center">
          <div
            className="flex w-full transform transition-transform duration-500"
            style={{ transform: `translateX(-${current * 10}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-1/4 px-4 flex-shrink-0"
              >
                <div className="bg-white/10 p-6 rounded-lg text-left">
                  <img
                    // src={testimonial.logo}
                    src="/company.png"
                    alt="Company Logo"
                    className="w-16 mb-4"
                  />
                  <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      // src={testimonial.image}
                      src="/avatars/avatar1.jpg"
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="text-sm font-bold">{testimonial.name}</h4>
                      <p className="text-xs text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                current === index
                  ? "bg-blue-500"
                  : "bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
