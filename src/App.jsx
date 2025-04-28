
import './App.css'
import Header from './component/header/Header'
import Start from './pages/starts/start'
import Portfolio from './pages/portfolio/portfolio'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Footer from './component/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Header/>
      <Start/>
      <Routes>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
