import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import DonatePage from './pages/DonatePage'
import FaqPage from './pages/FaqPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import HorsesPage from './pages/HorsesPage'
import NewsPage from './pages/NewsPage'
import NotFoundPage from './pages/NotFoundPage'
import ShopPage from './pages/ShopPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="horses" element={<HorsesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="donate" element={<DonatePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="faqs" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
