import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}
