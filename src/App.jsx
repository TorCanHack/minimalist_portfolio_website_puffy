import './App.css'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import ContactMe from './pages/ContactMe'


function App() {

 

  return (
    <main className=''>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contactme' element={<ContactMe/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
      
      
      
      

    </main>
  )
}

export default App
