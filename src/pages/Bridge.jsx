import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownUp,
  Settings,
  Info,
  ChevronDown,
  Zap,
  Shield,
  Clock,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Loader2,
} from "lucide-react";

const Bridge = () => {
  const [fromChain, setFromChain] = useState("ethereum");
  const [toChain, setToChain] = useState("polygon");
  const [fromAmount, setFromAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState("ETH");
  const [isFromChainOpen, setIsFromChainOpen] = useState(false);
  const [isToChainOpen, setIsToChainOpen] = useState(false);
  const [isTokenOpen, setIsTokenOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null);

  const chains = [
    {
      id: "ethereum",
      name: "Ethereum",
      icon: "⟠",
      color: "from-blue-500 to-purple-600",
      gasPrice: "45 Gwei",
    },
    {
      id: "polygon",
      name: "Polygon",
      icon: "⬢",
      color: "from-purple-500 to-pink-600",
      gasPrice: "30 Gwei",
    },
    {
      id: "arbitrum",
      name: "Arbitrum",
      icon: "◆",
      color: "from-blue-400 to-cyan-500",
      gasPrice: "0.1 Gwei",
    },
  ];

  const tokens = [
    { symbol: "ETH", name: "Ethereum", balance: "2.5431", icon: "⟠" },
    { symbol: "USDC", name: "USD Coin", balance: "1,250.00", icon: "💵" },
    { symbol: "USDT", name: "Tether", balance: "850.50", icon: "💰" },
    { symbol: "DAI", name: "Dai", balance: "500.00", icon: "◈" },
  ];

  const getChainData = (chainId) => chains.find((c) => c.id === chainId);
  const getTokenData = (symbol) => tokens.find((t) => t.symbol === symbol);

  const swapChains = () => {
    const temp = fromChain;
    setFromChain(toChain);
    setToChain(temp);
  };

  const handleBridge = () => {
    setIsProcessing(true);
    setTransactionStatus("processing");

    setTimeout(() => {
      setTransactionStatus("success");
      setIsProcessing(false);
    }, 3000);
  };

  const estimatedTime = "~2 minutes";
  const estimatedFee = "$3.50";
  const fromChainData = getChainData(fromChain);
  const toChainData = getChainData(toChain);
  const tokenData = getTokenData(selectedToken);

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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-24 sm:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bridge Your Assets
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Transfer tokens seamlessly across Ethereum, Polygon, and Arbitrum
          </p>
        </motion.div>

        {/* Main Bridge Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl">
            {/* Settings Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Transfer</h2>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </motion.button>
            </div>

            {/* From Chain */}
            <div className="mb-4">
              <label className="text-sm text-gray-400 mb-2 block">From</label>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  {/* Chain Selector */}
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsFromChainOpen(!isFromChainOpen)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${fromChainData.color} flex items-center justify-center text-xl`}
                      >
                        {fromChainData.icon}
                      </div>
                      <span className="font-semibold">
                        {fromChainData.name}
                      </span>
                      <ChevronDown className="w-4 h-4" />
                    </motion.button>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {isFromChainOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full mt-2 left-0 w-64 bg-gray-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                        >
                          {chains.map((chain) => (
                            <motion.button
                              key={chain.id}
                              whileHover={{
                                backgroundColor: "rgba(255,255,255,0.05)",
                              }}
                              onClick={() => {
                                setFromChain(chain.id);
                                setIsFromChainOpen(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
                            >
                              <div
                                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${chain.color} flex items-center justify-center text-2xl`}
                              >
                                {chain.icon}
                              </div>
                              <div className="text-left flex-1">
                                <div className="font-semibold">
                                  {chain.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  Gas: {chain.gasPrice}
                                </div>
                              </div>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Token Selector */}
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsTokenOpen(!isTokenOpen)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <span className="text-xl">{tokenData.icon}</span>
                      <span className="font-semibold">{selectedToken}</span>
                      <ChevronDown className="w-4 h-4" />
                    </motion.button>

                    {/* Token Dropdown */}
                    <AnimatePresence>
                      {isTokenOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full mt-2 right-0 w-64 bg-gray-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                        >
                          {tokens.map((token) => (
                            <motion.button
                              key={token.symbol}
                              whileHover={{
                                backgroundColor: "rgba(255,255,255,0.05)",
                              }}
                              onClick={() => {
                                setSelectedToken(token.symbol);
                                setIsTokenOpen(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
                            >
                              <span className="text-2xl">{token.icon}</span>
                              <div className="text-left flex-1">
                                <div className="font-semibold">
                                  {token.symbol}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {token.name}
                                </div>
                              </div>
                              <div className="text-sm text-gray-400">
                                {token.balance}
                              </div>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Amount Input */}
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="0.0"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="flex-1 bg-transparent text-3xl font-bold outline-none placeholder:text-gray-700"
                  />
                  <button className="text-sm text-blue-400 hover:text-blue-300 font-semibold">
                    MAX
                  </button>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Balance: {tokenData.balance} {selectedToken}
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center -my-2 relative z-10">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={swapChains}
                className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50"
              >
                <ArrowDownUp className="w-5 h-5" />
              </motion.button>
            </div>

            {/* To Chain */}
            <div className="mb-6">
              <label className="text-sm text-gray-400 mb-2 block">To</label>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  {/* Chain Selector */}
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsToChainOpen(!isToChainOpen)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${toChainData.color} flex items-center justify-center text-xl`}
                      >
                        {toChainData.icon}
                      </div>
                      <span className="font-semibold">{toChainData.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </motion.button>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {isToChainOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full mt-2 left-0 w-64 bg-gray-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                        >
                          {chains
                            .filter((c) => c.id !== fromChain)
                            .map((chain) => (
                              <motion.button
                                key={chain.id}
                                whileHover={{
                                  backgroundColor: "rgba(255,255,255,0.05)",
                                }}
                                onClick={() => {
                                  setToChain(chain.id);
                                  setIsToChainOpen(false);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
                              >
                                <div
                                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${chain.color} flex items-center justify-center text-2xl`}
                                >
                                  {chain.icon}
                                </div>
                                <div className="text-left flex-1">
                                  <div className="font-semibold">
                                    {chain.name}
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    Gas: {chain.gasPrice}
                                  </div>
                                </div>
                              </motion.button>
                            ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="text-gray-400 text-sm">{selectedToken}</div>
                </div>

                <div className="text-3xl font-bold text-gray-500">
                  {fromAmount || "0.0"}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  You will receive
                </div>
              </div>
            </div>

            {/* Transaction Details */}
            {fromAmount && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-white/5 rounded-2xl p-4 mb-6 border border-white/10 space-y-3"
              >
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>Estimated Time</span>
                  </div>
                  <span className="font-semibold">{estimatedTime}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Zap className="w-4 h-4" />
                    <span>Bridge Fee</span>
                  </div>
                  <span className="font-semibold">{estimatedFee}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Shield className="w-4 h-4" />
                    <span>Security</span>
                  </div>
                  <span className="text-green-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified
                  </span>
                </div>
              </motion.div>
            )}

            {/* Bridge Button */}
            <motion.button
              whileHover={{ scale: fromAmount ? 1.02 : 1 }}
              whileTap={{ scale: fromAmount ? 0.98 : 1 }}
              onClick={handleBridge}
              disabled={!fromAmount || isProcessing}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                fromAmount && !isProcessing
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isProcessing ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </span>
              ) : fromAmount ? (
                "Bridge Tokens"
              ) : (
                "Enter Amount"
              )}
            </motion.button>

            {/* Info Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 flex items-start gap-2 text-xs text-gray-400 bg-blue-500/5 border border-blue-500/20 rounded-xl p-3"
            >
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p>
                Bridging requires gas fees on both source and destination
                chains. Ensure you have sufficient native tokens for
                transactions.
              </p>
            </motion.div>
          </div>

          {/* Transaction Status Modal */}
          <AnimatePresence>
            {transactionStatus && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                onClick={() => setTransactionStatus(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 max-w-md w-full"
                >
                  {transactionStatus === "processing" && (
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <Loader2 className="w-10 h-10 animate-spin" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        Processing Transfer
                      </h3>
                      <p className="text-gray-400 mb-6">
                        Your transaction is being processed on the blockchain...
                      </p>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-sm">Transaction initiated</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                          <span className="text-sm">
                            Confirming on {fromChainData.name}...
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                          <span className="text-sm text-gray-500">
                            Bridging to {toChainData.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {transactionStatus === "success" && (
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-10 h-10" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">
                        Transfer Complete!
                      </h3>
                      <p className="text-gray-400 mb-6">
                        Your {fromAmount} {selectedToken} has been successfully
                        bridged to {toChainData.name}
                      </p>
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Transaction
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setTransactionStatus(null);
                            setFromAmount("");
                          }}
                          className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold"
                        >
                          Done
                        </motion.button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mt-8"
        >
          <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
            {[
              {
                from: "Ethereum",
                to: "Polygon",
                amount: "0.5 ETH",
                status: "completed",
                time: "2 mins ago",
              },
              {
                from: "Polygon",
                to: "Arbitrum",
                amount: "100 USDC",
                status: "completed",
                time: "1 hour ago",
              },
              {
                from: "Arbitrum",
                to: "Ethereum",
                amount: "0.25 ETH",
                status: "completed",
                time: "3 hours ago",
              },
            ].map((tx, index) => (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {chains.find((c) => c.name === tx.from)?.icon}
                    </span>
                    <span className="text-gray-400">→</span>
                    <span className="text-2xl">
                      {chains.find((c) => c.name === tx.to)?.icon}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{tx.amount}</div>
                    <div className="text-sm text-gray-400">
                      {tx.from} → {tx.to}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Completed
                  </div>
                  <div className="text-xs text-gray-500">{tx.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Bridge;
