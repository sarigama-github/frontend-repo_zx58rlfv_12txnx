import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingCart, GraduationCap, Home, Star, ClipboardList } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Accueil', icon: Home },
  { to: '/services', label: 'Services', icon: ClipboardList },
  { to: '/academy', label: 'Academy', icon: GraduationCap },
  { to: '/shop', label: 'Shop', icon: ShoppingCart },
  { to: '/audit', label: 'Audit', icon: ClipboardList },
  { to: '/temoignages', label: 'Témoignages', icon: Star },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-slate-900/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/flame-icon.svg" className="w-8 h-8" />
          <span className="text-white font-semibold">Aigle Jurassien</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `text-sm ${isActive ? 'text-white' : 'text-blue-200/80'} hover:text-white`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map(({ to, label }) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `text-sm ${isActive ? 'text-white' : 'text-blue-200/80'} hover:text-white`}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
