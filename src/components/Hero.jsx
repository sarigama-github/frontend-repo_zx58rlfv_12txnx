import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.2),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.15),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Aigle Jurassien</h1>
            <p className="mt-5 text-lg md:text-xl text-blue-200/90">Stratégie, formation et outils pour propulser votre présence digitale.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/audit" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Demander un audit</Link>
              <Link to="/services" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold">Découvrir nos services</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-white/10 shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-white/10 border border-white/10 backdrop-blur rounded-xl px-4 py-3 text-sm text-white">+200 projets accompagnés</div>
            <div className="absolute -top-6 -right-6 bg-white/10 border border-white/10 backdrop-blur rounded-xl px-4 py-3 text-sm text-white">Satisfaction 4.9/5</div>
          </div>
        </div>
      </div>
    </section>
  )
}
