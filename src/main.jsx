import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Home from './pages/Home'
import ServicesPage from './pages/Services'
import AcademyPage from './pages/Academy'
import ShopPage from './pages/Shop'
import AuditPage from './pages/Audit'
import TemoignagesPage from './pages/Temoignages'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="academy" element={<AcademyPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="audit" element={<AuditPage />} />
          <Route path="temoignages" element={<TemoignagesPage />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
