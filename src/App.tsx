import Nav from './components/Nav'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './components/Blog'
import Footer from './components/Footer.tsx'


function App() {
  

  return (
    <>
      <Nav></Nav>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
      
    </>
  )
}

export default App
