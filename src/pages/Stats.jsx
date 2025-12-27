import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  DollarSign,
  Users,
  ArrowLeftRight,
  Zap,
  Clock,
  Shield,
  Globe,
  BarChart3,
  PieChart,
  LineChart,
} from "lucide-react";

const Stats = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
  const [liveStats, setLiveStats] = useState({
    totalVolume: 2547832000,
    activeUsers: 523847,
    totalTransactions: 1847293,
    avgTransferTime: 118,
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats((prev) => ({
        totalVolume: prev.totalVolume + Math.random() * 100000,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10),
        totalTransactions:
          prev.totalTransactions + Math.floor(Math.random() * 5),
        avgTransferTime: 115 + Math.floor(Math.random() * 10),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const timeframes = ["24h", "7d", "30d", "All"];

  const mainStats = [
    {
      title: "Total Volume",
      value: `$${(liveStats.totalVolume / 1000000000).toFixed(2)}B`,
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Active Users",
      value: liveStats.activeUsers.toLocaleString(),
      change: "+8.3%",
      trend: "up",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Total Transactions",
      value: liveStats.totalTransactions.toLocaleString(),
      change: "+15.7%",
      trend: "up",
      icon: Activity,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Avg Transfer Time",
      value: `${liveStats.avgTransferTime}s`,
      change: "-5.2%",
      trend: "down",
      icon: Zap,
      color: "from-orange-500 to-red-600",
    },
  ];

  const chainStats = [
    {
      name: "Ethereum",
      icon: "⟠",
      volume: "$1.2B",
      transactions: "847K",
      percentage: 48,
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "Polygon",
      icon: "⬢",
      volume: "$856M",
      transactions: "623K",
      percentage: 34,
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Arbitrum",
      icon: "◆",
      volume: "$491M",
      transactions: "377K",
      percentage: 18,
      color: "from-blue-400 to-cyan-500",
    },
  ];

  const topTokens = [
    { symbol: "ETH", volume: "$982M", transactions: "284K", change: "+12.3%" },
    { symbol: "USDC", volume: "$847M", transactions: "521K", change: "+8.7%" },
    { symbol: "USDT", volume: "$521M", transactions: "418K", change: "+5.2%" },
    { symbol: "DAI", volume: "$198M", transactions: "124K", change: "+3.8%" },
  ];

  const recentActivity = [
    {
      from: "Ethereum",
      to: "Polygon",
      amount: "125.5 ETH",
      value: "$425,632",
      time: "2s ago",
    },
    {
      from: "Polygon",
      to: "Arbitrum",
      amount: "50,000 USDC",
      value: "$50,000",
      time: "8s ago",
    },
    {
      from: "Arbitrum",
      to: "Ethereum",
      amount: "2.8 WBTC",
      value: "$182,450",
      time: "15s ago",
    },
    {
      from: "Ethereum",
      to: "Arbitrum",
      amount: "25,000 DAI",
      value: "$25,000",
      time: "23s ago",
    },
    {
      from: "Polygon",
      to: "Ethereum",
      amount: "78.2 ETH",
      value: "$265,820",
      time: "31s ago",
    },
  ];

  const performanceMetrics = [
    { label: "Uptime", value: "99.98%", icon: Shield, color: "text-green-400" },
    {
      label: "Success Rate",
      value: "99.95%",
      icon: Activity,
      color: "text-blue-400",
    },
    {
      label: "Avg Gas Fee",
      value: "$3.50",
      icon: DollarSign,
      color: "text-purple-400",
    },
    { label: "Peak TPS", value: "2,847", icon: Zap, color: "text-orange-400" },
  ];

  const volumeData = [
    { day: "Mon", volume: 145 },
    { day: "Tue", volume: 198 },
    { day: "Wed", volume: 167 },
    { day: "Thu", volume: 223 },
    { day: "Fri", volume: 245 },
    { day: "Sat", volume: 189 },
    { day: "Sun", volume: 210 },
  ];

  const formatNumber = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(2) + "B";
    if (num >= 1000000) return (num / 1000000).toFixed(2) + "M";
    if (num >= 1000) return (num / 1000).toFixed(2) + "K";
    return num.toString();
  };

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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Bridge Statistics
                </h1>
                <p className="text-gray-400 text-lg sm:text-xl">
                  Real-time analytics and performance metrics
                </p>
              </div>

              {/* Timeframe Selector */}
              <div className="flex gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
                {timeframes.map((time) => (
                  <motion.button
                    key={time}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTimeframe(time)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      selectedTimeframe === time
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Live Indicator */}
            <div className="flex items-center gap-2 text-sm">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-500"
              />
              <span className="text-gray-400">Live Updates</span>
            </div>
          </motion.div>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mainStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 relative overflow-hidden"
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl`}
                  ></div>

                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div
                        className={`flex items-center gap-1 text-sm font-semibold ${
                          stat.trend === "up"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {stat.trend === "up" ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        {stat.change}
                      </div>
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.title}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Charts and Analytics Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Volume Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">Volume Overview</h3>
                  <p className="text-sm text-gray-400">
                    7-day transaction volume
                  </p>
                </div>
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>

              {/* Bar Chart */}
              <div className="flex items-end justify-between h-64 gap-4">
                {volumeData.map((data, index) => (
                  <div
                    key={data.day}
                    className="flex-1 flex flex-col items-center"
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.volume / 250) * 100}%` }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      className="w-full bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg relative group"
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 px-2 py-1 rounded text-xs whitespace-nowrap">
                        ${data.volume}M
                      </div>
                    </motion.div>
                    <div className="text-xs text-gray-400 mt-2">{data.day}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Chain Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">Chain Distribution</h3>
                  <p className="text-sm text-gray-400">Volume by network</p>
                </div>
                <PieChart className="w-6 h-6 text-purple-400" />
              </div>

              <div className="space-y-4">
                {chainStats.map((chain, index) => (
                  <motion.div
                    key={chain.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${chain.color} flex items-center justify-center text-lg`}
                        >
                          {chain.icon}
                        </div>
                        <span className="font-semibold">{chain.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">
                        {chain.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${chain.percentage}%` }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                        className={`h-full bg-gradient-to-r ${chain.color}`}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>{chain.volume}</span>
                      <span>{chain.transactions} txs</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Performance Metrics and Top Tokens */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold">Performance Metrics</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {performanceMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="bg-white/5 rounded-xl p-4 border border-white/10"
                    >
                      <Icon className={`w-5 h-5 ${metric.color} mb-3`} />
                      <div className="text-2xl font-bold mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {metric.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Top Tokens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold">Top Tokens</h3>
              </div>

              <div className="space-y-3">
                {topTokens.map((token, index) => (
                  <motion.div
                    key={token.symbol}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold">
                        {token.symbol.slice(0, 1)}
                      </div>
                      <div>
                        <div className="font-semibold">{token.symbol}</div>
                        <div className="text-xs text-gray-400">
                          {token.transactions}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{token.volume}</div>
                      <div className="text-xs text-green-400">
                        {token.change}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold">Recent Activity</h3>
              <div className="ml-auto flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
                <span className="text-sm text-gray-400">Live</span>
              </div>
            </div>

            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">
                        {chainStats.find((c) => c.name === activity.from)?.icon}
                      </span>
                      <ArrowLeftRight className="w-4 h-4 text-blue-400" />
                      <span className="text-2xl">
                        {chainStats.find((c) => c.name === activity.to)?.icon}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{activity.amount}</div>
                      <div className="text-xs text-gray-400">
                        {activity.from} → {activity.to}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-400">
                      {activity.value}
                    </div>
                    <div className="text-xs text-gray-400">{activity.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
