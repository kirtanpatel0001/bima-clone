import blockImg from "../assets/block.jpg";
import { useNavigate } from "react-router-dom";

export default function Course3() {
  const navigate = useNavigate();
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center">
        <img src={blockImg} alt="Blockchain Technology" className="w-full max-w-md h-64 object-cover rounded-2xl shadow-lg mb-8" loading="lazy" />
        <h1 className="text-4xl font-bold mb-2 text-white text-center">Blockchain Technology</h1>
        <h2 className="text-lg text-indigo-300 mb-6 text-center">Detailed Course Description</h2>

        <div className="bg-zinc-900/60 rounded-xl p-6 mb-8 w-full">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">🌐 Future Vision (2050):</h3>
          <p className="text-gray-200 mb-4">Blockchain will power the decentralized digital economy of 2050. Governments, businesses, and individuals will rely on immutable ledgers for transparent contracts, supply chain management, digital identities, and decentralized finance (DeFi).</p>
        </div>

        <div className="bg-zinc-900/50 rounded-xl p-6 mb-8 w-full">
          <h3 className="text-xl font-semibold text-indigo-300 mb-4">🔍 Course Modules (In-Depth):</h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-200">
            <li>
              <span className="font-bold">Introduction to Blockchain:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>What is Blockchain, History, and Evolution</li>
                <li>Decentralization vs. Centralization</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Cryptography Fundamentals:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Hash Functions (SHA-256)</li>
                <li>Public Key Infrastructure (PKI)</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Consensus Algorithms:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Proof of Work (PoW)</li>
                <li>Proof of Stake (PoS)</li>
                <li>Delegated Proof of Stake (DPoS)</li>
                <li>Practical Byzantine Fault Tolerance (PBFT)</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Smart Contracts:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Introduction to Ethereum & Solidity Programming</li>
                <li>Writing, deploying, and interacting with Smart Contracts</li>
                <li>Best Practices & Security in Smart Contracts</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Decentralized Applications (DApps):</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>DApp Architecture</li>
                <li>Frontend-Backend Integration with Blockchain</li>
                <li>IPFS and Data Storage</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Real-world Applications:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Supply Chain Transparency</li>
                <li>DeFi Platforms (Lending, Staking, Tokenization)</li>
                <li>Digital Identity Systems</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Emerging Trends:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>NFTs and Metaverse Integration</li>
                <li>Interoperability between blockchains</li>
                <li>Regulatory Frameworks</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Hands-on Projects:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Develop a Cryptocurrency Token</li>
                <li>Build and deploy a simple DApp</li>
                <li>Create a transparent supply chain management system</li>
              </ul>
            </li>
          </ol>
        </div>

        <button onClick={() => navigate('/contact')} className="px-8 py-3 rounded-full bg-indigo-500 text-white font-semibold text-lg mb-8 shadow-lg">Enroll Now</button>
      </div>
    </section>
  );
}
