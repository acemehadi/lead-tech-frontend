import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import MehadiPortfolio from "./Pages/MehadiPortfolio"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/portfolio/mehadi' element={< MehadiPortfolio />} />


        </Routes>
      </Router>
    </>
  )
}

export default App