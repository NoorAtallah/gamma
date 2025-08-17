import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/nav"
import HomePage from "./pages/homePage"
import AboutUsPage from './pages/aboutUsPage'
import ContactUsPage from './pages/contatUsPage'
import ProductsPage from './pages/productsPage'
import GammaFooter from "./components/footer"
import ScrollToTop from './components/scrolltoTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/products" element={<ProductsPage />} />
 
      </Routes>
      <GammaFooter />
    </Router>
  )
}

export default App