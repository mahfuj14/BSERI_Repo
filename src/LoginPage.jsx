import React, { useState } from 'react';
import NavbarMenus from '/src/components/NavbarMenus';
import Footer from '/src/components/footer.jsx';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      alert('Login successful! Redirecting to your dashboard...');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top deep green section (approx. 4.5cm) */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-950 via-green-900 to-green-800"></div>

        {/* Light main content area (rest of the page) */}
        <div className="absolute top-32 inset-x-0 bottom-0 bg-gradient-to-br from-white via-emerald-50 to-green-100"></div>
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <NavbarMenus showNav={showNav} handleNav={handleNav} />
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center py-12 px-4 relative z-10">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform hover:scale-[1.01] transition-all duration-500 border border-green-200">
          {/* Left Panel */}
          <div className="md:w-1/2 bg-gradient-to-br from-green-800 to-green-900 text-white p-10 md:p-14 relative">
            <div className="absolute inset-0 opacity-10">
              <svg width="100" height="100" viewBox="0 0 100 100" className="w-full h-full">
                <rect width="100" height="100" fill="#1b5e20" />
                <path d="M0,50 Q25,30 50,50 T100,50" fill="#0f2f0f" />
              </svg>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">BSERI</h1>
              <p className="text-green-100 text-xl mb-10 leading-relaxed">
                Join our community dedicated to preserving our planet for future generations. Together we can make a difference.
              </p>
              <ul className="space-y-5">
                <li className="flex items-center text-lg">
                  <div className="w-7 h-7 bg-green-600 bg-opacity-40 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-green-50">Track your environmental impact</span>
                </li>
                <li className="flex items-center text-lg">
                  <div className="w-7 h-7 bg-green-600 bg-opacity-40 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-green-50">Connect with eco-conscious individuals</span>
                </li>
                <li className="flex items-center text-lg">
                  <div className="w-7 h-7 bg-green-600 bg-opacity-40 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-green-50">Participate in local green initiatives</span>
                </li>
                <li className="flex items-center text-lg">
                  <div className="w-7 h-7 bg-green-600 bg-opacity-40 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-green-50">Access exclusive sustainability resources</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Panel */}
          <div className="md:w-1/2 bg-white p-10 md:p-14 flex flex-col justify-center">
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <h2 className="text-3xl font-bold text-green-800">Login Page</h2>
            </div>

            <div className="login-form">
              <h3 className="text-2xl font-semibold text-green-800 mb-10">Welcome Back</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-3 text-lg">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-lg shadow-sm hover:shadow-md"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-gray-700 font-semibold mb-3 text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-lg shadow-sm hover:shadow-md"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="remember" className="ml-3 text-gray-600 font-medium">
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-700 font-medium hover:underline transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-offset-2 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                >
                  Login
                </button>
              </form>

              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-lg">
                  Don't have an account?{' '}
                  <a href="#" className="text-green-600 hover:text-green-700 font-bold hover:underline transition-colors">
                    Sign up now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
