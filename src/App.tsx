import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollManager } from './router/ScrollManager'
import { Home } from './pages/Home'
import { ProjectPage } from './pages/ProjectPage'
import { LegalPage } from './pages/LegalPage'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div id="top" className="min-h-screen bg-bone-100 text-ink-900 overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ink-900 focus:text-bone-100"
      >
        Skip to main content
      </a>
      <Navbar />
      <ScrollManager />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets/:id" element={<ProjectPage />} />
          <Route path="/mentions-legales" element={<LegalPage type="legal" />} />
          <Route path="/confidentialite" element={<LegalPage type="privacy" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App