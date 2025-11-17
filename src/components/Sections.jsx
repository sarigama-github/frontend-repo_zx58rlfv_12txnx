import { useEffect, useState } from 'react'
import { fetchJson } from '../lib/api'

export function ServicesSection() {
  const [services, setServices] = useState([])
  useEffect(() => { fetchJson('/services').then(setServices).catch(()=>{}) }, [])
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.length === 0 ? (
            [
              { title: 'Stratégie digitale', description: 'Audit, positionnement et plan d’action' },
              { title: 'Création de contenu', description: 'Social media, vidéo, copywriting' },
              { title: 'Growth & Ads', description: 'Campagnes et optimisation ROI' },
            ].map((s, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 text-blue-100">
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-sm opacity-80">{s.description}</p>
              </div>
            ))
          ) : (
            services.map((s, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 text-blue-100">
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-sm opacity-80">{s.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export function AcademySection() {
  const [courses, setCourses] = useState([])
  useEffect(() => { fetchJson('/courses').then(setCourses).catch(()=>{}) }, [])
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Academy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.length === 0 ? (
            [
              { title: 'Bootcamp Personal Branding', summary: 'Devenez une référence dans votre niche' },
              { title: 'Content Mastery', summary: 'Système complet pour publier chaque jour' },
              { title: 'Ads Starter', summary: 'Lancer ses premières campagnes efficacement' },
            ].map((c, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 text-blue-100">
                <h3 className="text-white font-semibold mb-2">{c.title}</h3>
                <p className="text-sm opacity-80">{c.summary}</p>
              </div>
            ))
          ) : (
            courses.map((c, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 text-blue-100">
                <h3 className="text-white font-semibold mb-2">{c.title}</h3>
                <p className="text-sm opacity-80">{c.summary}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export function ShopSection() {
  const [products, setProducts] = useState([])
  useEffect(() => { fetchJson('/products').then(setProducts).catch(()=>{}) }, [])
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Shop</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.length === 0 ? (
            [
              { name: 'Notion Pack', price: 39, description: 'Système de contenu clé-en-main' },
              { name: 'Template Audit', price: 19, description: 'Grille d’analyse professionnelle' },
              { name: 'Ebook Growth', price: 9, description: '50 tactiques pour accélérer' },
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 text-blue-100">
                <h3 className="text-white font-semibold mb-2">{p.name}</h3>
                <p className="text-sm opacity-80">{p.description}</p>
                <p className="text-white mt-2 font-semibold">{p.price} CHF</p>
              </div>
            ))
          ) : (
            products.map((p, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 text-blue-100">
                <h3 className="text-white font-semibold mb-2">{p.name}</h3>
                <p className="text-sm opacity-80">{p.description}</p>
                <p className="text-white mt-2 font-semibold">{p.price} CHF</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export function AuditSection() {
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ website_url: '', email: '', message: '' })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Envoi...')
    try {
      const res = await fetchJson('/audit', {
        method: 'POST',
        body: JSON.stringify(form),
      })
      setStatus(`Demande envoyée (#${res.id})`)
      setForm({ website_url: '', email: '', message: '' })
    } catch (err) {
      setStatus('Erreur: ' + err.message)
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Audit gratuit</h2>
        <form onSubmit={submit} className="space-y-4">
          <input value={form.website_url} onChange={e=>setForm({ ...form, website_url: e.target.value })} required placeholder="URL de votre site" className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder:text-blue-200/70" />
          <input type="email" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} required placeholder="Email" className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder:text-blue-200/70" />
          <textarea value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} rows="4" placeholder="Votre contexte" className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder:text-blue-200/70" />
          <button className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Envoyer</button>
          {status && <p className="text-blue-200/90">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export function TemoignagesSection() {
  const [items, setItems] = useState([])
  useEffect(() => { fetchJson('/testimonials').then(setItems).catch(()=>{}) }, [])
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Témoignages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {(items.length ? items : [
            { name: 'Clara', role: 'CEO', message: 'Des conseils concrets qui ont transformé nos résultats.' },
            { name: 'Louis', role: 'Créateur', message: 'Une méthodologie simple et ultra efficace.' },
            { name: 'Sarah', role: 'Indépendante', message: 'Accompagnement premium, ROI immédiat.' },
          ]).map((t, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 text-blue-100">
              <p className="italic">“{t.message}”</p>
              <p className="mt-3 text-white font-semibold">{t.name}</p>
              <p className="text-sm opacity-70">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
