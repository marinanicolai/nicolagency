import { Route, Routes } from 'react-router-dom'
import styles from './components/styles/App.module.scss'
import Header from './components/Header'
import ScrollToTopButton from './components/ScrollToTopButton'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function App() {
   return (
      <div className={styles.App}>
         <Header />

         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/blogs/:id' element={<BlogPage />} />
            <Route path='/blogs/categories/:id' element={<BlogPage />} />
            <Route path='/contact' element={<ContactPage />} />
         </Routes>
          <ScrollToTopButton />
         <Footer />
      </div>
   )
}

export default App
