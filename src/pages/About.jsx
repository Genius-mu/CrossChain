import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Shield,
  Zap,
  Users,
  Heart,
  Globe,
  Award,
  TrendingUp,
  CheckCircle2,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  Rocket,
  Lock,
  Code,
} from "lucide-react";

const About = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const mission = {
    title: "Our Mission",
    description:
      "To make cross-chain asset transfers as simple, secure, and seamless as possible, empowering users to move freely across blockchain networks without barriers.",
    icon: Target,
  };

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "We prioritize the safety of user assets above all else, employing industry-leading security practices and regular audits.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Speed matters. We've optimized every aspect of our bridge to deliver transfers in under 2 minutes.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Users,
      title: "User-Centric",
      description:
        "Every decision we make is guided by what's best for our users. Simple interfaces, transparent fees, and excellent support.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Heart,
      title: "Community Driven",
      description:
        "We're building together with our community. Your feedback shapes our roadmap and improvements.",
      color: "from-orange-500 to-red-600",
    },
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former blockchain architect at Ethereum Foundation. 10+ years in distributed systems.",
      image: "👨‍💼",
      socials: {
        twitter: "https://x.com/mustaphAdegbite",
        linkedin: "https://www.linkedin.com/in/mustaphaadegbite/",
        github: "https://github.com/Genius-mu",
      },
    },
    {
      name: "Sarah Mitchell",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer with expertise in cryptography and smart contract security.",
      image: "👩‍💻",
      socials: {
        twitter: "https://x.com/mustaphAdegbite",
        linkedin: "https://www.linkedin.com/in/mustaphaadegbite/",
        github: "https://github.com/Genius-mu",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      bio: "Built scalable systems at Coinbase. Passionate about DeFi and Web3 infrastructure.",
      image: "👨‍🔧",
      socials: {
        twitter: "https://x.com/mustaphAdegbite",
        linkedin: "https://www.linkedin.com/in/mustaphaadegbite/",
        github: "https://github.com/Genius-mu",
      },
    },
    {
      name: "Emily Zhang",
      role: "Lead Smart Contract Developer",
      bio: "Security researcher with multiple audits. Solidity expert and open-source contributor.",
      image: "👩‍🚀",
      socials: {
        twitter: "https://x.com/mustaphAdegbite",
        linkedin: "https://www.linkedin.com/in/mustaphaadegbite/",
        github: "https://github.com/Genius-mu",
      },
    },
    {
      name: "David Park",
      role: "Head of Product",
      bio: "Product leader from Uniswap. Focused on building intuitive DeFi experiences.",
      image: "👨‍🎨",
      socials: {
        twitter: "https://x.com/mustaphAdegbite",
        linkedin: "https://www.linkedin.com/in/mustaphaadegbite/",
        github: "https://github.com/Genius-mu",
      },
    },
    {
      name: "Lisa Thompson",
      role: "Head of Operations",
      bio: "Operations expert with experience scaling Web3 startups. Former Amazon PM.",
      image: "👩‍💼",
      socials: {
        twitter: "https://x.com/mustaphAdegbite",
        linkedin: "https://www.linkedin.com/in/mustaphaadegbite/",
        github: "https://github.com/Genius-mu",
      },
    },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Foundation",
      description:
        "CrossChain Bridge was founded with a vision to connect blockchain ecosystems.",
      icon: Rocket,
    },
    {
      year: "2023",
      title: "Launch",
      description:
        "Launched mainnet with Ethereum and Polygon support. Processed first $100M in volume.",
      icon: Sparkles,
    },
    {
      year: "2023",
      title: "Expansion",
      description:
        "Added Arbitrum support and reached 100K active users. Completed security audits by CertiK.",
      icon: TrendingUp,
    },
    {
      year: "2024",
      title: "Growth",
      description:
        "Surpassed $2.5B in total volume. Integrated with major wallets and DeFi protocols.",
      icon: Award,
    },
    {
      year: "2025",
      title: "Innovation",
      description:
        "Launched SDK and API. Building towards multi-chain future with 10+ networks.",
      icon: Code,
    },
  ];

  const achievements = [
    { number: "$2.5B+", label: "Total Volume Bridged" },
    { number: "500K+", label: "Active Users" },
    { number: "99.98%", label: "Uptime" },
    { number: "1.8M+", label: "Transactions" },
  ];

  const partners = [
    "Ethereum Foundation",
    "Polygon Labs",
    "Arbitrum",
    "CertiK",
    "OpenZeppelin",
    "Chainlink",
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden overflow-y-auto relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/50">
                <Globe className="w-10 h-10" />
              </div>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About CrossChain Bridge
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              We're on a mission to connect the blockchain universe, making
              cross-chain transfers secure, fast, and accessible to everyone.
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl border border-white/20 p-8 sm:p-12 relative overflow-hidden">
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

              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="inline-block mb-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Target className="w-8 h-8" />
                  </div>
                </motion.div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  {mission.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  {mission.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Values
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Journey
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                From inception to innovation
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30" />

                {timeline.map((event, index) => {
                  const Icon = event.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="relative pl-20 pb-12 last:pb-0"
                    >
                      {/* Icon */}
                      <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                        <Icon className="w-8 h-8" />
                      </div>

                      {/* Content */}
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                        <div className="text-blue-400 font-bold mb-2">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-400">{event.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Meet Our Team
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                The talented people behind CrossChain Bridge
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredMember(index)}
                  onHoverEnd={() => setHoveredMember(null)}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center relative overflow-hidden"
                >
                  {/* Hover Glow */}
                  {hoveredMember === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 pointer-events-none"
                    />
                  )}

                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl shadow-lg shadow-blue-500/50">
                      {member.image}
                    </div>

                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <div className="text-blue-400 text-sm mb-3">
                      {member.role}
                    </div>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={member.socials.twitter}
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={member.socials.linkedin}
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={member.socials.github}
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partners Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Trusted Partners
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Working with the best in the industry
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex items-center justify-center text-center"
                >
                  <div className="font-semibold text-sm text-gray-300">
                    {partner}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl border border-white/20 p-12 relative overflow-hidden">
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Join Our Journey
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals who share our
                  passion for blockchain technology and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-2xl shadow-blue-500/50"
                  >
                    View Open Positions
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Us
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
