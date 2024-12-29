const CodeEditorFeature = () => (
  <section className="w-full bg-gray-800 text-white overflow-hidden p-20">
    <div className="mx-auto flex flex-col md:flex-row items-start">
      {/* Left Content */}
      <div className="w-full md:w-1/3 p-8">
        <h2 className="text-sm uppercase font-semibold mb-6">Anywhere and anytime</h2>

        <p className="text-white font-bold text-2xl normal-case mx-auto mb-6">
          Coding made easy<br/>
          harnes the power of<br/>
          <span className='text-blue-300'>online code editor</span> in your<br/>
          browser
        </p>

        <p className='text-sm text-gray-300 mb-6'>You can prototype your application using our online online editor and develop it into a larger project.</p>

        <p className='text-sm text-gray-300 mb-6'>It enhances collaboration through live coding sessions and automates your workflow with built-in activities.</p>

        <button className="px-4 py-2 rounded border-2 border-gray-300 bg-black font-bold">
          Open web editor
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-2/3 flex">
        <img 
          src="/feature.jpg" 
          alt="Code Editor"
          className="w-full object-fit rounded shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default CodeEditorFeature;