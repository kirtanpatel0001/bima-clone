import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
// analytics is optional and only initialized in the browser
let analyticsInitialized = false;

let db: ReturnType<typeof getFirestore> | null = null;

const FALLBACK_CONFIG = {
  apiKey: "AIzaSyCmgpBLHCtQr-Vhmr3XL7cgJcnsDMt2ptc",
  authDomain: "skillcodeai.firebaseapp.com",
  projectId: "skillcodeai",
  storageBucket: "skillcodeai.firebasestorage.app",
  messagingSenderId: "1087201437351",
  appId: "1:1087201437351:web:44b3ab358c66e1a4841d82",
  measurementId: "G-4R3G1WXVF5",
};

export function initFirebase(config?: Record<string, unknown>) {
  const cfg = config && Object.keys(config).length ? config : FALLBACK_CONFIG;
  if (!getApps().length) {
    const app = initializeApp(cfg);
    // init analytics if available (browser only)
    if (typeof window !== 'undefined') {
      import('firebase/analytics').then((mod) => {
        const getAnalytics = mod.getAnalytics;
        try {
          if (getAnalytics && !analyticsInitialized) {
            getAnalytics(app);
            analyticsInitialized = true;
          }
        } catch {
          // ignore analytics failures
        }
      }).catch(() => {
        // analytics not available or failed to load
      });
    }
  }
  if (!db) db = getFirestore();
  // Attempt to ensure the contacts collection exists (one-time, client-side only)
  if (typeof window !== 'undefined') {
    ensureContactsCollection();
  }
  return db;
}

export async function saveContact(data: { name: string; email: string; message: string }) {
  if (!db) {
    // attempt to initialize with fallback config if not already initialized
    initFirebase();
    if (!db) throw new Error('Firebase not initialized');
  }
  const col = collection(db, 'contacts');
  const doc = await addDoc(col, { ...data, createdAt: serverTimestamp() });
  return doc.id;
}

async function ensureContactsCollection() {
  try {
    if (typeof window === 'undefined') return;
    const flag = window.localStorage.getItem('contacts_collection_created');
    if (flag === '1') return;
    if (!db) return;
    const col = collection(db, 'contacts');
    // create a temporary doc and delete it to ensure the collection exists
    const temp = await addDoc(col, { _init: true, createdAt: serverTimestamp() });
    await deleteDoc(temp);
    window.localStorage.setItem('contacts_collection_created', '1');
  } catch {
    // ignore errors — collection creation is best-effort
  }
}
