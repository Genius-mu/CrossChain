import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  Lock,
  TrendingUp,
  ArrowLeftRight,
  CheckCircle2,
  Layers,
} from "lucide-react";

const Home = () => {
  const [hoveredChain, setHoveredChain] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const chains = [
    { name: "Ethereum", color: "from-blue-500 to-purple-600", icon: "⟠" },
    { name: "Polygon", color: "from-purple-500 to-pink-600", icon: "⬢" },
    { name: "Arbitrum", color: "from-blue-400 to-cyan-500", icon: "◆" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description:
        "Multi-signature wallets and smart contract audits ensure your assets are always protected",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Complete transfers in under 2 minutes with optimized routing algorithms",
    },
    {
      icon: Lock,
      title: "Non-Custodial",
      description:
        "You maintain complete control of your assets throughout the entire transfer process",
    },
    {
      icon: TrendingUp,
      title: "Best Rates",
      description:
        "Automatically find the most cost-effective routes with minimal gas fees",
    },
  ];

  const stats = [
    { value: "$2.5B+", label: "Total Volume" },
    { value: "500K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "<2min", label: "Avg Transfer" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl opacity-20"
            style={{
              background: `radial-gradient(circle, ${
                ["#3b82f6", "#8b5cf6", "#06b6d4"][i % 3]
              } 0%, transparent 70%)`,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
            >
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">
                Audited by CertiK & OpenZeppelin
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cross-Chain Bridge
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              Secure bridge between Ethereum, Polygon, and Arbitrum for
              transferring assets seamlessly
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg shadow-blue-500/50"
              >
                Start Bridging
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold text-lg hover:bg-white/10 transition"
              >
                View Documentation
              </motion.button>
            </motion.div>

            {/* Chain Connection Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center items-center gap-5 sm:gap-8 mb-8"
            >
              {chains.map((chain, index) => (
                <React.Fragment key={chain.name}>
                  <motion.div
                    onHoverStart={() => setHoveredChain(index)}
                    onHoverEnd={() => setHoveredChain(null)}
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <div
                      className={`w-15 h-15 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${chain.color} flex items-center justify-center text-4xl shadow-2xl cursor-pointer`}
                    >
                      {chain.icon}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredChain === index ? 1 : 0,
                        y: hoveredChain === index ? 0 : 10,
                      }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium"
                    >
                      {chain.name}
                    </motion.div>
                  </motion.div>
                  {index < chains.length - 1 && (
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowLeftRight className="w-8 h-8 text-blue-400" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with security, speed, and user experience at the core
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setActiveFeature(index)}
                  className={`p-8 rounded-3xl border transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/50"
                      : "bg-white/5 backdrop-blur-sm border-white/10"
                  }`}
                >
                  <motion.div
                    animate={{ rotate: activeFeature === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                      activeFeature === index
                        ? "from-blue-500 to-purple-600"
                        : "from-gray-700 to-gray-800"
                    } flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Simple Process
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Bridge your assets in three easy steps
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Connect Wallet",
                desc: "Link your MetaMask or WalletConnect",
              },
              {
                step: "02",
                title: "Select Chains",
                desc: "Choose source and destination networks",
              },
              {
                step: "03",
                title: "Transfer Assets",
                desc: "Confirm transaction and bridge instantly",
              },
            ].map((item, index) => (
              <React.Fragment key={item.step}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative flex-1 max-w-xs"
                >
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
                {index < 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="hidden md:block"
                  >
                    <ArrowRight className="w-8 h-8 text-purple-400" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 relative overflow-hidden"
          >
            {/* Animated Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl"
            />

            <div className="relative z-10">
              <Layers className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h2 className="text-2xl md:text-5xl font-bold mb-6">
                Ready to Bridge Your Assets?
              </h2>
              <p className="text-[15px] text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust our platform for secure, fast,
                and seamless cross-chain transfers
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 sm:px-10 sm:py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-[13px] sm:text-lg flex items-center gap-3 mx-auto shadow-2xl shadow-blue-500/50"
              >
                Launch Application
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Home;
