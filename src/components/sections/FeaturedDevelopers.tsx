const FeaturedDevelopers = () => {
    const developers = [
      { name: "Jane Doe", image: "/avatars/avatar1.jpg" },
      { name: "John Smith", image: "/avatars/avatar2.jpg" },
      { name: "Emily White", image: "/avatars/avatar3.jpg" },
      { name: "Robert Brown", image: "/avatars/avatar4.jpg" },
      { name: "Alice Johnson", image: "/avatars/avatar5.jpg" },
      { name: "Chris Green", image: "/avatars/avatar6.jpg" },
      { name: "Emma Scout", image: "/avatars/avatar7.jpg" },
    ];
  
    return (
      <section className="w-full text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Title */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Featured <span className="text-green-300">Developers</span></h2>
          </div>
  
          {/* Carousel */}
          <div className="relative">
            <div className="flex flex-wrap justify-center animate-marquee gap-6">
              {developers.map((developer, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-36 h-36 rounded-full overflow-hidden"
                >
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedDevelopers;
  