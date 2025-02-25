
import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Image from './pages/image/Image'
import MaskCursor from './pages/mask-cursor/MaskCursor'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/images' element={<Image />} />
    <Route path='/mask-cursor' element={<MaskCursor />} />
    </Routes>
  )
}

export default App