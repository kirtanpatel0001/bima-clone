
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bg from '../assets/6bNJec7GNi7B6OCxqnTKRxeLU.avif';
import { initFirebase, saveContact } from '../lib/firebase';

// Initialize firebase from env (client-only). Update .env with your values.
if (typeof window !== 'undefined') {
  const cfg = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };
  // Only init when projectId is present
  if (cfg.projectId) initFirebase(cfg as Record<string, unknown>);
}

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
  await saveContact({ name, email, message });
  setSuccess('Thanks for submitting — we\'ll be in touch soon.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: unknown) {
  const message = err && typeof err === 'object' && 'message' in err ? (err as Record<string, unknown>)['message'] : String(err);
  setError(String(message));
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'right center' }}
    >
      <div className="max-w-7xl mx-auto w-full px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.section
            className="text-white"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-sm text-gray-400" style={{ fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>[ CONTACT US ]</p>
            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Automate</span><br/>Your Business?</h1>
            <p className="mt-6 text-gray-300 max-w-lg">Let AI handle the hard work while you focus on growth. Book a free AI strategy session today.</p>
          </motion.section>

          <motion.section
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="bg-black/30 backdrop-blur-md rounded-2xl p-8 text-white max-w-md ml-auto"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <label className="block text-sm text-gray-300">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} required className="w-full mt-2 mb-4 bg-black/60 rounded-lg p-3" />

              <label className="block text-sm text-gray-300">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} required type="email" className="w-full mt-2 mb-4 bg-black/60 rounded-lg p-3" />

              <label className="block text-sm text-gray-300">Message</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} required className="w-full mt-2 mb-4 bg-black/60 rounded-lg p-3 h-36" />

              <div className="flex items-center justify-between mt-4">
                <p className="text-xs text-gray-400">By submitting, you agree to our Terms and Privacy Policy.</p>
                <motion.button
                  disabled={loading}
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full font-semibold"
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.03 }}
                >
                  {loading ? 'Sending...' : 'Submit'}
                </motion.button>
              </div>

              <AnimatePresence>
                {success && (
                  <motion.p key="success" className="mt-4 text-sm text-green-400" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                    {success}
                  </motion.p>
                )}

                {error && (
                  <motion.p key="error" className="mt-4 text-sm text-red-400" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.section>
        </div>
      </div>
    </motion.main>
  );
}
