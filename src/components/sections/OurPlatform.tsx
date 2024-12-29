const OurPlatform = () => (
  <section className="w-full bg-blue-400 text-black overflow-hidden p-20">
    <div className="mx-auto flex flex-col md:flex-row items-center">
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-sm uppercase font-semibold mb-6">Our platform</h2>

        <p className="text-black font-bold text-5xl normal-case mx-auto mb-6">
          Get our native IOS app<br/>
          Metabox for Mac OS<br/>
          Code available on the go.<br/>
          browser
        </p>

        <p className='text-sm text-black font-medium normal-case mb-6'>Experience coding convenience on the go with our native mac IOS app.</p>

        <p className='text-sm text-black font-medium normal-case mb-6'>Unleash the full potential of your Mac OS code projects by accessing them directly from your IOS device. Our app seamlessly integrates ith your existing projects, allowing you to work on them with ease.</p>

        <div className='flex gap-2'>
        <button className="px-4 py-2 rounded border-2 border-gray-300 text-white bg-black font-bold">
          Download Metabox
        </button>

        <button  className="px-4 py-2 font-bold">
            how to install
        </button>
        </div>
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

export default OurPlatform;