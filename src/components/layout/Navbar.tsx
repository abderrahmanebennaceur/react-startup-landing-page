const Navbar = () => (
    <nav className="w-full bg-black text-gray-400 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-white text-lg font-bold">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        </div>
  
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          {["How it works", "Cases study", "Resource", "Docs", "Support", "About"].map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-white transition"
            >
              {link}
            </a>
          ))}
        </div>
  
        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm hover:text-white transition">
            Sign in
          </a>
          <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded transition">
            <span>Try now it's free</span>
            <span className="ml-1">➔</span>
          </button>
        </div>
      </div>
    </nav>
  );
  
  export default Navbar;
  