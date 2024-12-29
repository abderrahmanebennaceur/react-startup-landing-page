const GrowingMetabox = () => (
    <section className="w-full text-white py-16">
      <div className="flex flex-col items-center max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-white font-bold text-6xl normal-case mb-8">
          Every Day the <span className="text-green-300">Metabox</span><br />is Always Growing
        </h2>
  
        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mb-8">
        <button className="px-4 py-2 rounded border-2 border-gray-300 text-white bg-black font-bold">
            Learn more concepts
          </button>
          <button className="px-4 py-2 rounded border-2 border-gray-300 text-white bg-black font-bold">
            try now it's free
          </button>
        </div>
  
        {/* Wide Image */}
        <div className="overflow-hidden rounded-lg max-w-4xl">
          <img
            src="/metabox.png"
            alt="Metabox Growth"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
  
  export default GrowingMetabox;
  