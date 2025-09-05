export default function Footer() {
  return (
  <footer className="text-gray-400 py-8 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.02)', background: '#000319' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p>© {new Date().getFullYear()} SKILL CODE AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

