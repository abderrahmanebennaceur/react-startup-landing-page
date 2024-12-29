const Trial = () => (
    <section className="w-full bg-blue-400 text-white overflow-hidden p-20">
      <div className="mx-auto flex flex-col md:flex-row items-start">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-8">

          <h2 className="text-black font-extrabold text-6xl normal-case mx-auto mb-6">
            Place to develop <br />various source <br />code.
          </h2>
  
          <p className='text-sm text-black font-medium mb-6'>This centerlized approach ensures a single source merging and facilitating seamless collaboration.</p>  
          <button className="px-4 py-2 rounded border-2 border-gray-300 bg-black font-bold">
            Try now its free
          </button>
        </div>
  
        {/* Right Image */}
        <div className="w-full md:w-1/2 flex">
          <img 
            src="/feature.jpg" 
            alt="Code Editor"
            className="w-full object-fit rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
  
  export default Trial;