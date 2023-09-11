import './App.scss'
import Confectioner from './components/Confectioner'
import Footer from './components/Footer'
import OrderByPhoto from './components/OrderByPhoto'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
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
