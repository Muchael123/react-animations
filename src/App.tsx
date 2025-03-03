
import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Image from './pages/image/Image'
import MaskCursor from './pages/mask-cursor/MaskCursor'
import CurvedMenu from './pages/curverd-menu/CurvedMenu'
import AwardFooter from './pages/awards-foter'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/images' element={<Image />} />
    <Route path='/mask-cursor' element={<MaskCursor />} />
    <Route path='/curved-menu' element={<CurvedMenu/>} />
    <Route path="/award-footer" element={<AwardFooter />} />
    </Routes>
  )
}

export default App