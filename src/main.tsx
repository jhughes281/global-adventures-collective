import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import FaqPage from './pages/FaqPage.tsx'
import PoliciesPage from './pages/PoliciesPage.tsx'

// Each HTML entry sets data-page on #root; one bundle renders the matching page.
const PAGES = { home: App, faq: FaqPage, policies: PoliciesPage }

const root = document.getElementById('root')!
const Page = PAGES[(root.dataset.page ?? 'home') as keyof typeof PAGES] ?? App

createRoot(root).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
