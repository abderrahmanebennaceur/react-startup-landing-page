const StartCoding = () => (
    <section className="w-full text-white py-16 max-w-7xl mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="mb-4 mx-8">
          <h2 className="text-white font-bold text-4xl normal-case mb-6">
            Start Coding with <span className="text-green-300">One Click,</span><br/>
            No Setup required
          </h2>
        </div>
  
        {/* Wide Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src="/editor.svg"
            alt="Start Coding"
            className="w-full h-auto object-cover"
          />
        </div>
    </section>
  );
  
  export default StartCoding;
  