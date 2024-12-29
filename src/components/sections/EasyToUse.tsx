const EasyToUse = () => {

    const technologies = [
        { name: "HTML5", icon: "/icons/html5.svg" },
        { name: "CSS3", icon: "/icons/css3.svg" },
        { name: "JavaScript", icon: "/icons/js.svg" },
        { name: "React", icon: "/icons/react.svg" },
        { name: "Node.js", icon: "/icons/nodejs.svg" },
        { name: "Git", icon: "/icons/git.svg" },
        { name: "Github", icon: "/icons/github.svg" },
        { name: "NuxtJS", icon: "/icons/nuxtjs.svg" },
        { name: "Sass", icon: "/icons/sass.svg" },
        { name: "Git", icon: "/icons/vuejs.svg" },
        { name: "Git", icon: "/icons/nextjs.svg" },
        { name: "Git", icon: "/icons/tailwindcss.svg" },
      ];

    return (
    <section className="w-full text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title and Subtitle */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold mb-4">Easy to Use</h2>
          <p className="text-8xl font-bold text-gray-300">
            Deploy anywhere,<br/>
            with <span className="text-blue-300">metabox</span>
          </p>
        </div>
  
        {/* Icons of Technologies */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col justify-center items-center bg-white/20 rounded-lg aspect-square">
              <img
                src={tech.icon}
                // src="/icons/html5.svg"
                alt={tech.name}
                className="w-8 h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )};
  
  export default EasyToUse;
  