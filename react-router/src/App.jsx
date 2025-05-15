import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Homepage from './components/Homepage'
import AboutUs from './components/AboutUs'
import Products from './components/Products'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/aboutus" Component={AboutUs} />
          <Route path="/products" Component={Products} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
