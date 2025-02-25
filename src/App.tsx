
import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Image from './pages/image/Image'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/images' element={<Image />} />
    </Routes>
  )
}

export default App