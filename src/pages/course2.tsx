import cyberImg from "../assets/cyber.jpg";
import { useNavigate } from "react-router-dom";

export default function Course2() {
  const navigate = useNavigate();
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center">
        <img src={cyberImg} alt="Cyber Security" className="w-full max-w-md h-64 object-cover rounded-2xl shadow-lg mb-8" loading="lazy" />
        <h1 className="text-4xl font-bold mb-2 text-white text-center">Cyber Security</h1>
        <h2 className="text-lg text-indigo-300 mb-6 text-center">Detailed Course Description</h2>

        <div className="bg-zinc-900/60 rounded-xl p-6 mb-8 w-full">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">🌐 Future Vision (2050):</h3>
          <p className="text-gray-200 mb-4">As the world becomes fully connected, securing data, critical infrastructure, and digital identities will be essential. Advanced quantum computing will challenge existing encryption methods. Cybersecurity experts will play a key role in protecting businesses, governments, and individuals.</p>
        </div>

        <div className="bg-zinc-900/50 rounded-xl p-6 mb-8 w-full">
          <h3 className="text-xl font-semibold text-indigo-300 mb-4">🔍 Course Modules (In-Depth):</h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-200">
            <li>
              <span className="font-bold">Introduction to Cyber Security:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Cybersecurity basics, CIA Triad (Confidentiality, Integrity, Availability)</li>
                <li>Threat Landscape in 2050</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Network Security:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Network architecture & Firewalls</li>
                <li>VPNs, Proxies, IDS/IPS systems</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Ethical Hacking & Penetration Testing:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Footprinting, Scanning, Vulnerability Assessment</li>
                <li>Exploitation techniques & Metasploit framework</li>
                <li>Reporting & Mitigation</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Cryptography:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Symmetric & Asymmetric Encryption</li>
                <li>Hashing Algorithms (SHA, MD5)</li>
                <li>Digital Signatures</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Advanced Topics:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Quantum Cryptography</li>
                <li>Zero Trust Security Model</li>
                <li>Blockchain for Data Integrity</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Security Protocols:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>SSL/TLS, IPsec, SSH</li>
                <li>OAuth & OpenID Connect</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Incident Response & Forensics:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Log Analysis</li>
                <li>Malware Reverse Engineering</li>
                <li>Case Study Simulations</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Hands-on Projects:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Build your own Pen-testing Lab</li>
                <li>Simulate a network attack & defense</li>
                <li>Implement encryption/decryption algorithms</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="bg-zinc-900/60 rounded-xl p-6 mb-8 w-full">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">🎯 Career Impact by 2050:</h3>
          <ul className="list-disc list-inside ml-4 text-gray-200">
            <li>Cyber Security Analyst</li>
            <li>Ethical Hacker</li>
            <li>Security Consultant</li>
            <li>Information Security Manager</li>
          </ul>
        </div>

        <button onClick={() => navigate('/contact')} className="px-8 py-3 rounded-full bg-indigo-500 text-white font-semibold text-lg mb-8 shadow-lg">Enroll Now</button>
      </div>
    </section>
  );
}
