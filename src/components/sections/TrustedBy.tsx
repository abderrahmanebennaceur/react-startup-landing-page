const TrustedBy = () => (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-sm text-center uppercase font-semibold text-gray-300 mb-8">
          Trusted by Leading Companies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((company:number) => (
            <img
            src="/company.png"
            alt={`company ${company}`}
            className="mx-auto w-32 grayscale hover:grayscale-0 transition-all duration-200"
          />
          ))}
        </div>
      </div>
    </section>
  );
  
  export default TrustedBy;
  