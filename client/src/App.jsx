
import Navbar from "./components/nav"
import DroneHero from "./components/hero"
import GammaProductsSection from "./components/products"
import GammaAboutSection from "./components/aboutUs"
import GammaContactSection from "./components/contactUs"
import GammaServicesSection from "./components/services"
import GammaFooter from "./components/footer"
function App() {
 

  return (
    <>
      <Navbar />
      <DroneHero />
      <GammaProductsSection />
      <GammaAboutSection />
      <GammaServicesSection />
      <GammaContactSection />
      <GammaFooter />
    </>
  )
}

export default App
