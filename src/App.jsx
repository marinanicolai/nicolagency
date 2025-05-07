import { Route, Routes } from 'react-router-dom'
import styles from './components/styles/App.module.scss'
import Header from './components/Header'
import ScrollToTopButton from './components/ScrollToTopButton'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ClientsPage from './pages/ClientsPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import CategoryPage from './pages/CategoryPage'

function App() {
   return (
      <div className={styles.App}>
         <Header />

         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/clients' element={<ClientsPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/services/:serviceName' element={<ServicesPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/blogs/:id' element={<BlogPage />} />
            <Route path='/blogs/categories/:id' element={<BlogPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/categories/:categoryName' element={<CategoryPage />} />
         </Routes>
          <ScrollToTopButton />
         <Footer />
      </div>
   )
}

export default App
