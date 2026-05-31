import Hero from '../components/Hero'
import About from '../components/About'
import Temperature from '../components/Temperature'
import Reasons from '../components/Reasons'
import UseCases from '../components/UseCases'
import FoodBarrierFree from '../components/FoodBarrierFree'
import Products from '../components/Products'
import Achievements from '../components/Achievements'
import Patent from '../components/Patent'
import LatestArticles from '../components/LatestArticles'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Temperature />
      <Reasons />
      <UseCases />
      <FoodBarrierFree />
      <Products />
      <Achievements />
      <Patent />
      <LatestArticles />
      <ContactSection />
    </>
  )
}
