const Hero = () => (
    <section className="w-full min-h-screen flex items-center justify-between text-white py-20 px-8">
      {/* Left Content: Heading */}
      <div className="flex items-center">
        <h1 className="leading-none text-9xl font-extrabold">
          Code.<br />Editor.<br />Deploy.
        </h1>
      </div>
  
      <div className="max-w-md space-y-6 text-left">
        <dl>
          <dt className="text-xl font-semibold text-wite normal-case mb-2">
            Upgrade your progress
          </dt>
          <dd className="text-gray-300">
            Integrate code development processes to encourage collaboration and increase quality output.
          </dd>
        </dl>
  
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Documentation, Backup and Recovery</li>
          <li>Easy Collaboration</li>
        </ul>
  
        <button className="px-4 py-2 rounded border-2 border-gray-900">
          Import source code
        </button>
      </div>
    </section>
  );
  
  export default Hero;
  