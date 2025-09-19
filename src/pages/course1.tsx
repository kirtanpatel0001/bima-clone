import aiImg from "../assets/ai.jpg";
import { useNavigate } from "react-router-dom";

export default function Course1() {
  const navigate = useNavigate();
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center">
        <img src={aiImg} alt="AI & Machine Learning" className="w-full max-w-md h-64 object-cover rounded-2xl shadow-lg mb-8" loading="lazy" />
        <h1 className="text-4xl font-bold mb-2 text-white text-center">Artificial Intelligence & Machine Learning (AI/ML)</h1>
        <h2 className="text-lg text-indigo-300 mb-6 text-center">Detailed Course Description</h2>

        <div className="bg-zinc-900/60 rounded-xl p-6 mb-8 w-full">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">🌐 Future Vision (2050):</h3>
          <p className="text-gray-200 mb-4">By 2050, AI-powered autonomous systems will dominate every industry. Self-driving cars, smart healthcare assistants, predictive weather forecasting, and intelligent automation in homes and industries will be the norm. Every decision in business and government will be backed by Machine Learning models.</p>
        </div>

        <div className="bg-zinc-900/50 rounded-xl p-6 mb-8 w-full">
          <h3 className="text-xl font-semibold text-indigo-300 mb-4">🔍 Course Modules (In-Depth):</h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-200">
            <li>
              <span className="font-bold">Introduction to Artificial Intelligence (AI):</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Definition, history, and evolution of AI</li>
                <li>Types of AI (Narrow AI, General AI, Super AI)</li>
                <li>Applications of AI in real life</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Mathematical Foundations:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Linear algebra, probability, statistics essential for ML</li>
                <li>Optimization techniques</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Machine Learning Fundamentals:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Supervised Learning (Regression, Classification)</li>
                <li>Unsupervised Learning (Clustering, Dimensionality Reduction)</li>
                <li>Reinforcement Learning Basics</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Deep Learning (DL):</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Neural Networks: Perceptron, Multi-layer Perceptron</li>
                <li>CNN (Convolutional Neural Networks) – For Image Recognition</li>
                <li>RNN (Recurrent Neural Networks) – For Time-Series & NLP</li>
                <li>Transfer Learning</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Natural Language Processing (NLP):</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Text Preprocessing, Sentiment Analysis, Chatbots</li>
                <li>Language Models, BERT, GPT Basics</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">AI Model Deployment:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Saving, testing, and deploying models to cloud or edge devices</li>
                <li>APIs and real-time inference</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Ethical AI and Bias Avoidance:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Fairness in AI decisions</li>
                <li>Data privacy and model transparency</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Hands-on Projects:</span>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Building AI-based image classifier</li>
                <li>Predicting stock market trends using ML</li>
                <li>Chatbot Development</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="bg-zinc-900/60 rounded-xl p-6 mb-8 w-full">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">🎯 Career Impact by 2050:</h3>
          <ul className="list-disc list-inside ml-4 text-gray-200">
            <li>AI/ML Engineer</li>
            <li>Data Scientist</li>
            <li>Automation Specialist</li>
            <li>AI Product Manager</li>
          </ul>
        </div>

        <button onClick={() => navigate('/contact')} className="px-8 py-3 rounded-full bg-indigo-500 text-white font-semibold text-lg mb-8 shadow-lg">Enroll Now</button>
      </div>
    </section>
  );
}
