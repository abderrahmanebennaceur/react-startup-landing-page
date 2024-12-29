const Footer = () => (
    <footer className="w-full bg-black text-gray-400 py-10">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-24">
          {/* Social Icons */}
          <div className="flex gap-4">
            {["instagram", "linkedin", "facebook", "twitter", "Youtube", "behance"].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                <i className={`fab fa-${icon} text-white text-lg`}></i>
              </a>
            ))}
          </div>
  
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
            <div>
              <h4 className="text-white font-bold mb-3">Use Cases</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Learn in Metabox</a></li>
                <li><a href="#" className="hover:text-white transition">Whiteboard</a></li>
                <li><a href="#" className="hover:text-white transition">Collaborative Forms</a></li>
                <li><a href="#" className="hover:text-white transition">Text Editor</a></li>
                <li><a href="#" className="hover:text-white transition">Instant Feedback</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Resource</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Customers</a></li>
                <li><a href="#" className="hover:text-white transition">Examples</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
                <li><a href="#" className="hover:text-white transition">Discovery</a></li>
                <li><a href="#" className="hover:text-white transition">Extension</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Developer</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">System Status</a></li>
                <li><a href="#" className="hover:text-white transition">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition">Dev Tools</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
                <li><a href="#" className="hover:text-white transition">Change Log</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Integrations</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Vue.js</a></li>
                <li><a href="#" className="hover:text-white transition">React</a></li>
                <li><a href="#" className="hover:text-white transition">JavaScript</a></li>
                <li><a href="#" className="hover:text-white transition">HTML</a></li>
                <li><a href="#" className="hover:text-white transition">Redux</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Journal</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-xs text-gray-500">
          <p>© 2023 Metabox. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">Terms and Conditions</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  