import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/10">
        {/* Decorative gradient overlay - matching landing page style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-screen filter blur-xl opacity-10"
              style={{
                background: `radial-gradient(circle, ${
                  ["#3b82f6", "#8b5cf6", "#06b6d4"][i % 3]
                } 0%, transparent 70%)`,
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Grid Pattern Overlay - matching landing page */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Logo & Description - Takes more space */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <ArrowLeftRight className="w-7 h-7" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    CrossChain
                  </span>
                </div>
                <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-md">
                  The most secure and efficient way to bridge your assets across
                  multiple blockchain networks. Fast, reliable, and trusted by
                  thousands.
                </p>
                {/* Newsletter Signup */}
                <div className="flex gap-2 flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-sm whitespace-nowrap"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                  Product
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></span>
                </h3>
                <ul className="space-y-4">
                  {["Bridge", "Analytics", "Documentation", "API", "SDK"].map(
                    (item) => (
                      <li key={item}>
                        <motion.a
                          whileHover={{ x: 5, color: "#60a5fa" }}
                          href={`#${item.toLowerCase()}`}
                          className="text-gray-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block"
                        >
                          {item}
                        </motion.a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                  Resources
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></span>
                </h3>
                <ul className="space-y-4">
                  {["Help Center", "Security", "Audits", "Blog", "FAQs"].map(
                    (item) => (
                      <li key={item}>
                        <motion.a
                          whileHover={{ x: 5, color: "#60a5fa" }}
                          href={`#${item.toLowerCase()}`}
                          className="text-gray-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block"
                        >
                          {item}
                        </motion.a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                  Company
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></span>
                </h3>
                <ul className="space-y-4">
                  {["About Us", "Careers", "Contact", "Privacy", "Terms"].map(
                    (item) => (
                      <li key={item}>
                        <motion.a
                          whileHover={{ x: 5, color: "#60a5fa" }}
                          href={`#${item.toLowerCase()}`}
                          className="text-gray-400 hover:text-blue-400 transition-colors text-sm cursor-pointer block"
                        >
                          {item}
                        </motion.a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
                <p>© 2025 CrossChain Bridge. All rights reserved.</p>
                <div className="flex items-center gap-4">
                  <a
                    href="#privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <span className="text-gray-600">•</span>
                  <a
                    href="#terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {[
                  { name: "Twitter", icon: "𝕏" },
                  { name: "Discord", icon: "💬" },
                  { name: "Telegram", icon: "✈️" },
                  { name: "GitHub", icon: "⚙️" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href={`#${social.name.toLowerCase()}`}
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-white/5 to-white/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-white/10 hover:border-blue-500/30 flex items-center justify-center text-lg transition-all cursor-pointer shadow-lg"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
