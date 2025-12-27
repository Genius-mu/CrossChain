import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowLeftRight, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <ArrowLeftRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CrossChain
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {["Home", "Bridge", "Docs", "Stats", "About"].map((item) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Desktop Wallet Connect Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/30"
            >
              <Lock className="w-4 h-4" />
              <span className="hidden lg:inline">Connect Wallet</span>
              <span className="lg:hidden">Connect</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-amber-50 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-lg overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-4 mb-6">
                  {["Home", "Bridge", "Docs", "Stats", "About"].map(
                    (item, index) => (
                      <motion.a
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-300 hover:text-white transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-white/5"
                      >
                        {item}
                      </motion.a>
                    )
                  )}
                </nav>

                {/* Mobile Wallet Connect Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
                >
                  <Lock className="w-4 h-4" />
                  Connect Wallet
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
