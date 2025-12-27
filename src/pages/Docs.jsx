import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Book,
  Code,
  Zap,
  Shield,
  ArrowRight,
  Copy,
  Check,
  ChevronRight,
  Github,
  FileText,
  Terminal,
  Layers,
  Lock,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

const Docs = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const sidebar = [
    {
      title: "Getting Started",
      icon: Book,
      items: [
        { id: "getting-started", label: "Introduction" },
        { id: "quick-start", label: "Quick Start" },
        { id: "installation", label: "Installation" },
      ],
    },
    {
      title: "Core Concepts",
      icon: Layers,
      items: [
        { id: "how-it-works", label: "How It Works" },
        { id: "supported-chains", label: "Supported Chains" },
        { id: "tokens", label: "Supported Tokens" },
      ],
    },
    {
      title: "Integration",
      icon: Code,
      items: [
        { id: "sdk", label: "SDK Reference" },
        { id: "api", label: "API Documentation" },
        { id: "webhooks", label: "Webhooks" },
      ],
    },
    {
      title: "Security",
      icon: Shield,
      items: [
        { id: "security", label: "Security Model" },
        { id: "audits", label: "Audits" },
        { id: "best-practices", label: "Best Practices" },
      ],
    },
  ];

  const content = {
    "getting-started": {
      title: "Introduction to CrossChain Bridge",
      description:
        "Welcome to the CrossChain Bridge documentation. Learn how to bridge assets across multiple blockchain networks securely and efficiently.",
      sections: [
        {
          heading: "What is CrossChain Bridge?",
          content:
            "CrossChain Bridge is a decentralized protocol that enables seamless transfer of digital assets between Ethereum, Polygon, and Arbitrum. Our bridge uses advanced cryptographic techniques and multi-signature verification to ensure the security of your assets during cross-chain transfers.",
        },
        {
          heading: "Key Features",
          items: [
            "Lightning-fast transfers (under 2 minutes)",
            "Bank-grade security with multi-sig wallets",
            "Non-custodial - you maintain control of your assets",
            "Competitive fees and optimal routing",
            "Support for major tokens (ETH, USDC, USDT, DAI)",
          ],
        },
        {
          heading: "Why Use CrossChain Bridge?",
          content:
            "Traditional bridges can be slow, expensive, or insecure. CrossChain Bridge solves these problems by leveraging optimized smart contracts, efficient routing algorithms, and industry-leading security practices.",
        },
      ],
    },
    "quick-start": {
      title: "Quick Start Guide",
      description: "Get started with CrossChain Bridge in under 5 minutes.",
      code: {
        title: "Basic Bridge Transfer",
        language: "javascript",
        snippet: `import { CrossChainBridge } from '@crosschain/sdk';

// Initialize the bridge
const bridge = new CrossChainBridge({
  apiKey: 'your-api-key'
});

// Bridge tokens
const transfer = await bridge.transfer({
  fromChain: 'ethereum',
  toChain: 'polygon',
  token: 'USDC',
  amount: '100',
  recipient: '0x...'
});

console.log('Transfer ID:', transfer.id);`,
      },
      steps: [
        "Connect your wallet (MetaMask, WalletConnect, etc.)",
        "Select source and destination chains",
        "Choose your token and enter the amount",
        "Review the transaction details and fees",
        "Confirm and wait for the transfer to complete",
      ],
    },
    installation: {
      title: "Installation",
      description:
        "Install the CrossChain SDK to integrate bridging into your application.",
      code: {
        title: "NPM Installation",
        language: "bash",
        snippet: `# Using npm
npm install @crosschain/sdk

# Using yarn
yarn add @crosschain/sdk

# Using pnpm
pnpm add @crosschain/sdk`,
      },
      sections: [
        {
          heading: "Requirements",
          items: [
            "Node.js 16.x or higher",
            "Web3 provider (MetaMask, WalletConnect, etc.)",
            "React 18.x or higher (for React integration)",
          ],
        },
      ],
    },
    "how-it-works": {
      title: "How CrossChain Bridge Works",
      description: "Understand the underlying technology and architecture.",
      sections: [
        {
          heading: "Bridge Architecture",
          content:
            "CrossChain Bridge uses a lock-and-mint mechanism. When you bridge assets from Chain A to Chain B, your tokens are locked in a smart contract on Chain A, and equivalent tokens are minted on Chain B. The reverse happens when bridging back.",
        },
        {
          heading: "Security Model",
          items: [
            "Multi-signature validation from independent validators",
            "Time-locked withdrawals for added security",
            "Regular smart contract audits by leading firms",
            "Insurance fund to protect against potential exploits",
          ],
        },
        {
          heading: "Transaction Flow",
          steps: [
            "User initiates transfer on source chain",
            "Tokens are locked in the bridge contract",
            "Validators observe and verify the transaction",
            "Multi-sig approval is obtained",
            "Equivalent tokens are minted on destination chain",
            "User receives tokens (typically within 2 minutes)",
          ],
        },
      ],
    },
    "supported-chains": {
      title: "Supported Chains",
      description:
        "List of blockchain networks supported by CrossChain Bridge.",
      chains: [
        {
          name: "Ethereum",
          icon: "⟠",
          chainId: 1,
          rpc: "https://mainnet.infura.io/v3/YOUR-API-KEY",
          explorer: "https://etherscan.io",
          features: ["Native ETH", "ERC-20 Tokens", "Fast Finality"],
        },
        {
          name: "Polygon",
          icon: "⬢",
          chainId: 137,
          rpc: "https://polygon-rpc.com",
          explorer: "https://polygonscan.com",
          features: ["Low Fees", "Fast Transactions", "EVM Compatible"],
        },
        {
          name: "Arbitrum",
          icon: "◆",
          chainId: 42161,
          rpc: "https://arb1.arbitrum.io/rpc",
          explorer: "https://arbiscan.io",
          features: ["Layer 2", "Low Gas Costs", "High Throughput"],
        },
      ],
    },
    tokens: {
      title: "Supported Tokens",
      description: "Comprehensive list of tokens you can bridge across chains.",
      tokens: [
        {
          symbol: "ETH",
          name: "Ethereum",
          chains: ["Ethereum", "Polygon", "Arbitrum"],
        },
        {
          symbol: "USDC",
          name: "USD Coin",
          chains: ["Ethereum", "Polygon", "Arbitrum"],
        },
        {
          symbol: "USDT",
          name: "Tether",
          chains: ["Ethereum", "Polygon", "Arbitrum"],
        },
        {
          symbol: "DAI",
          name: "Dai Stablecoin",
          chains: ["Ethereum", "Polygon", "Arbitrum"],
        },
        {
          symbol: "WBTC",
          name: "Wrapped Bitcoin",
          chains: ["Ethereum", "Polygon"],
        },
        {
          symbol: "LINK",
          name: "Chainlink",
          chains: ["Ethereum", "Polygon", "Arbitrum"],
        },
      ],
    },
    sdk: {
      title: "SDK Reference",
      description: "Complete SDK documentation with examples.",
      code: {
        title: "Initialize SDK",
        language: "javascript",
        snippet: `import { CrossChainBridge } from '@crosschain/sdk';

const bridge = new CrossChainBridge({
  apiKey: 'your-api-key',
  network: 'mainnet', // or 'testnet'
  provider: window.ethereum
});

// Get supported chains
const chains = await bridge.getSupportedChains();

// Get supported tokens
const tokens = await bridge.getSupportedTokens('ethereum');

// Estimate bridge fees
const estimate = await bridge.estimateFees({
  fromChain: 'ethereum',
  toChain: 'polygon',
  token: 'USDC',
  amount: '100'
});

// Execute bridge transfer
const tx = await bridge.transfer({
  fromChain: 'ethereum',
  toChain: 'polygon',
  token: 'USDC',
  amount: '100',
  recipient: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'
});

// Track transfer status
const status = await bridge.getTransferStatus(tx.id);`,
      },
    },
    api: {
      title: "API Documentation",
      description:
        "RESTful API for programmatic access to bridge functionality.",
      endpoints: [
        {
          method: "POST",
          endpoint: "/api/v1/transfer",
          description: "Initiate a bridge transfer",
          example: `{
  "fromChain": "ethereum",
  "toChain": "polygon",
  "token": "USDC",
  "amount": "100",
  "recipient": "0x..."
}`,
        },
        {
          method: "GET",
          endpoint: "/api/v1/transfer/:id",
          description: "Get transfer status",
          example: `{
  "id": "tx_123",
  "status": "completed",
  "fromChain": "ethereum",
  "toChain": "polygon"
}`,
        },
        {
          method: "GET",
          endpoint: "/api/v1/chains",
          description: "Get supported chains",
          example: `[
  { "id": "ethereum", "name": "Ethereum", "chainId": 1 },
  { "id": "polygon", "name": "Polygon", "chainId": 137 }
]`,
        },
      ],
    },
    security: {
      title: "Security Model",
      description: "Learn about our multi-layered security approach.",
      sections: [
        {
          heading: "Smart Contract Security",
          content:
            "All smart contracts are audited by leading security firms including CertiK and OpenZeppelin. We employ industry best practices such as multi-signature wallets, time-locks, and upgrade mechanisms.",
        },
        {
          heading: "Validator Network",
          content:
            "Our decentralized validator network consists of independent nodes that verify all bridge transactions. A supermajority consensus is required before any cross-chain transfer is completed.",
        },
        {
          heading: "Insurance Fund",
          content:
            "We maintain an insurance fund to protect users against potential smart contract exploits. The fund is managed by a DAO and is regularly audited.",
        },
      ],
    },
  };

  const currentContent = content[activeSection];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden overflow-y-auto relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl opacity-10"
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
            className="mb-12 text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              Everything you need to integrate and use CrossChain Bridge
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
                {sidebar.map((category, idx) => (
                  <div key={idx} className="mb-6 last:mb-0">
                    <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-400">
                      <category.icon className="w-4 h-4" />
                      <span>{category.title}</span>
                    </div>
                    <nav className="space-y-1">
                      {category.items.map((item) => (
                        <motion.button
                          key={item.id}
                          whileHover={{ x: 5 }}
                          onClick={() => setActiveSection(item.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                            activeSection === item.id
                              ? "bg-blue-500/20 text-blue-400 font-semibold"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.label}</span>
                            {activeSection === item.id && (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </nav>
                  </div>
                ))}

                {/* Quick Links */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-sm font-semibold text-gray-400 mb-3">
                    Quick Links
                  </div>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      Changelog
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      API Status
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Main Content Area */}
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8">
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  {currentContent.title}
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  {currentContent.description}
                </p>

                {/* Code Block */}
                {currentContent.code && (
                  <div className="mb-8">
                    <div className="bg-gray-900/50 rounded-xl border border-white/10 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-400">
                            {currentContent.code.title}
                          </span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() =>
                            handleCopyCode(currentContent.code.snippet, "main")
                          }
                          className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-sm"
                        >
                          {copiedCode === "main" ? (
                            <>
                              <Check className="w-4 h-4 text-green-400" />
                              <span className="text-green-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                      <pre className="p-4 overflow-x-auto">
                        <code className="text-sm text-gray-300 font-mono">
                          {currentContent.code.snippet}
                        </code>
                      </pre>
                    </div>
                  </div>
                )}

                {/* Steps */}
                {currentContent.steps && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Steps</h3>
                    <div className="space-y-4">
                      {currentContent.steps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex gap-4"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-300">{step}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sections */}
                {currentContent.sections &&
                  currentContent.sections.map((section, index) => (
                    <div key={index} className="mb-8">
                      <h3 className="text-2xl font-bold mb-4">
                        {section.heading}
                      </h3>
                      {section.content && (
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {section.content}
                        </p>
                      )}
                      {section.items && (
                        <ul className="space-y-3">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.steps && (
                        <div className="space-y-3">
                          {section.steps.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold">
                                {idx + 1}
                              </div>
                              <span className="text-gray-300 pt-0.5">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                {/* Chains */}
                {currentContent.chains && (
                  <div className="grid gap-6">
                    {currentContent.chains.map((chain, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 rounded-xl border border-white/10 p-6"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="text-4xl">{chain.icon}</div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold mb-1">
                              {chain.name}
                            </h4>
                            <p className="text-sm text-gray-400">
                              Chain ID: {chain.chainId}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-400">RPC:</span>
                            <code className="text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                              {chain.rpc}
                            </code>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-400">Explorer:</span>
                            <a
                              href={chain.explorer}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline"
                            >
                              {chain.explorer}
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {chain.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Tokens */}
                {currentContent.tokens && (
                  <div className="space-y-4">
                    {currentContent.tokens.map((token, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold">
                            {token.symbol.slice(0, 2)}
                          </div>
                          <div>
                            <div className="font-semibold">{token.symbol}</div>
                            <div className="text-sm text-gray-400">
                              {token.name}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {token.chains.map((chain, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs"
                            >
                              {chain}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* API Endpoints */}
                {currentContent.endpoints && (
                  <div className="space-y-6">
                    {currentContent.endpoints.map((endpoint, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
                      >
                        <div className="p-4 border-b border-white/10">
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className={`px-3 py-1 rounded-lg text-xs font-bold ${
                                endpoint.method === "GET"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-blue-500/20 text-blue-400"
                              }`}
                            >
                              {endpoint.method}
                            </span>
                            <code className="text-sm text-gray-300">
                              {endpoint.endpoint}
                            </code>
                          </div>
                          <p className="text-sm text-gray-400">
                            {endpoint.description}
                          </p>
                        </div>
                        <div className="p-4 bg-gray-900/30">
                          <pre className="text-sm text-gray-300 overflow-x-auto">
                            <code>{endpoint.example}</code>
                          </pre>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Info Box */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-300">
                    <strong className="text-blue-400">Need help?</strong> Join
                    our Discord community or check out our GitHub repository for
                    more examples and support.
                  </div>
                </motion.div>
              </div>
            </motion.main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
