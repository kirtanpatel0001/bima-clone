export default function Footer() {
  return (
    <footer className="text-gray-400 py-8 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.02)', background: 'linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.3))' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p>© {new Date().getFullYear()} BimaClone. All rights reserved.</p>
      </div>
    </footer>
  );
}

