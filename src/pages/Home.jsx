import Hero from '../components/Hero'
import { ServicesSection, AcademySection, ShopSection, AuditSection, TemoignagesSection } from '../components/Sections'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <AcademySection />
      <ShopSection />
      <AuditSection />
      <TemoignagesSection />
    </main>
  )
}
