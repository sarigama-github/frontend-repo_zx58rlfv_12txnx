export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-200/80">
        <div>
          <h4 className="text-white font-semibold mb-2">Aigle Jurassien</h4>
          <p className="text-sm">Conseil, formation et solutions digitales pour faire décoller votre business.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Liens</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/academy" className="hover:text-white">Academy</a></li>
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/audit" className="hover:text-white">Audit</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">hello@aigle-jurassien.com</p>
        </div>
      </div>
      <div className="text-center text-xs text-blue-200/60 pb-6">© {new Date().getFullYear()} Aigle Jurassien. Tous droits réservés.</div>
    </footer>
  )
}
