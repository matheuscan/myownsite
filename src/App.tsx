import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './components/Blog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
