import './App.scss'
import Confectioner from './components/confectioner/Confectioner'
import Footer from './components/footer/Footer'
import OrderByPhoto from './components/orderByPhoto/OrderByPhoto'
import Portfolio from './components/portfolio/Portfolio'
import Projects from './components/projects/Projects'
import Reviews from './components/reviews/Reviews'
import Home from './components/home/Home'

function App() {

  return (
    <>
      <Home />
      <Projects />
      <OrderByPhoto />
      <Confectioner />
      <Reviews />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
