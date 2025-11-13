import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-green-900/60 via-green-900 to-green-800/70 text-gray-100">
      <div className="max-w-screen-xl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8">
        {/* Left Side - Organization Info */}
        <div>
          <h1 className="w-full text-3xl font-bold text-white">BSERI</h1>
          <p className="py-4 text-gray-200">
            Bangladesh Society for Ecological Research Initiative. Let's build a sustainable future together. Join our mission to protect nature, inspire change, and create a greener world for the next generation. 🌿
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61578804961196" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaFacebookSquare
                size={30}
                className="hover:text-green-300 transition-colors duration-300 cursor-pointer"
              />
            </a>
            <a 
              href="http://facebook.com/groups/587837538262516/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaFacebookSquare
                size={30}
                className="hover:text-green-300 transition-colors duration-300 cursor-pointer"
              />
            </a>
            <a 
              href="https://www.linkedin.com/in/bangladesh-society-for-ecological-research-initiative-1a75a6377/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="hover:text-green-300 transition-colors duration-300 cursor-pointer"
              />
            </a>
            <a href="mailto:bseribd@gmail.com">
              <FaEnvelope
                size={30}
                className="hover:text-green-300 transition-colors duration-300 cursor-pointer"
              />
            </a>
            <a href="https://wa.me/8801677509593" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp
                size={30}
                className="hover:text-green-300 transition-colors duration-300 cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Middle - Contact Information */}
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-green-200 uppercase tracking-wide">
              Contact Info
            </h6>
            <ul>
              <li className="py-2 text-sm flex items-center gap-2">
                <FaEnvelope className="text-green-300" size={16} />
                <a href="mailto:bseribd@gmail.com" className="hover:text-white cursor-pointer">
                  bseribd@gmail.com
                </a>
              </li>
              <li className="py-2 text-sm flex items-center gap-2">
                <FaPhone className="text-green-300" size={16} />
                <a href="tel:01677509593" className="hover:text-white cursor-pointer">
                  01677-509593
                </a>
              </li>
              <li className="py-2 text-sm flex items-center gap-2">
                <FaWhatsapp className="text-green-300" size={16} />
                <a href="https://wa.me/8801677509593" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer">
                  +880 1677-509593
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-green-200 uppercase tracking-wide">
              Follow Us
            </h6>
            <ul>
              <li className="py-2 text-sm hover:text-white cursor-pointer">
                <a href="https://www.facebook.com/profile.php?id=61578804961196" target="_blank" rel="noopener noreferrer">
                  Facebook Page
                </a>
              </li>
              <li className="py-2 text-sm hover:text-white cursor-pointer">
                <a href="http://facebook.com/groups/587837538262516/" target="_blank" rel="noopener noreferrer">
                  Facebook Group
                </a>
              </li>
              <li className="py-2 text-sm hover:text-white cursor-pointer">
                <a href="https://www.linkedin.com/in/bangladesh-society-for-ecological-research-initiative-1a75a6377/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-green-200 uppercase tracking-wide">
              Quick Links
            </h6>
            <ul>
              <li className="py-2 text-sm hover:text-white cursor-pointer">About Us</li>
              <li className="py-2 text-sm hover:text-white cursor-pointer">Projects</li>
              <li className="py-2 text-sm hover:text-white cursor-pointer">Research</li>
              <li className="py-2 text-sm hover:text-white cursor-pointer">News & Events</li>
              <li className="py-2 text-sm hover:text-white cursor-pointer">Get Involved</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-green-200 uppercase tracking-wide">
              Support
            </h6>
            <ul>
              <li className="py-2 text-sm hover:text-white cursor-pointer">Volunteer</li>
              <li className="py-2 text-sm hover:text-white cursor-pointer">Donate</li>
              <li className="py-2 text-sm hover:text-white cursor-pointer">Partnership</li>
              <li className="py-2 text-sm hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-500 py-4 text-center text-sm text-green-200">
        © {new Date().getFullYear()} Bangladesh Society for Ecological Research Initiative (BSERI). All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;