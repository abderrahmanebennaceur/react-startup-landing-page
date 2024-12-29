const Showcase = () => (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Wide Image */}
        <img
          src="/showcase.jpg"
          alt="Showcase"
          className="w-full rounded-lg shadow-lg mb-8"
        />
  
        {/* Title */}
        <h2 className="text-sm uppercase font-semibold text-gray-300 mb-4">
          development process support for your source code
        </h2>
  
        {/* Paragraph */}
        <p className="text-white font-bold text-xl normal-case max-w-3xl mx-auto">
          Execute your code in multiple robust <span className="text-blue-300">metabox version</span> support accurately and edit whatever you want. we have configured the development process so that your <span className="text-blue-300">source code is accessible</span> to users <span className="text-blue-300">using a link</span>
        </p>
      </div>
    </section>
  );
  
  export default Showcase;
  