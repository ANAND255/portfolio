import { Link } from 'react-router-dom'
import '../styles/Footer.css'
const LI = () => (<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v2a6 6 0 0 1 2-3zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>)
const GH = () => (<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>)
const EM = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>)
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="f-brand">
            <div className="f-logo">[AB] Anand Bijoy</div>
            <p>Business Analyst & Data Science engineer. Turning raw data into clear, actionable intelligence.</p>
            <div className="f-socials">
              <a href="http://www.linkedin.com/in/anandbijoy" target="_blank" rel="noreferrer" className="f-soc"><LI/></a>
              <a href="https://github.com/ANAND255" target="_blank" rel="noreferrer" className="f-soc"><GH/></a>
              <a href="mailto:anandbijoy255@gmail.com" className="f-soc"><EM/></a>
            </div>
          </div>
          <div className="f-col">
            <h5>Navigation</h5>
            {[['/','/Home'],['/about','About'],['/skills','Skills'],['/projects','Projects']].map(([p,l])=><Link key={p} to={p}>{l.replace('/','')}</Link>)}
          </div>
          <div className="f-col">
            <h5>Connect</h5>
            <Link to="/education">Education</Link>
            <Link to="/contact">Contact</Link>
            <a href="/Anand_Bijoy_-_Business_analyst.pdf" target="_blank" rel="noreferrer">Download CV</a>
            <a href="mailto:anandbijoy255@gmail.com">Send Email</a>
          </div>
        </div>
        <div className="f-bottom">
          <span>© {new Date().getFullYear()} Anand Bijoy</span>
          <span>Built with React + Vite</span>
        </div>
      </div>
    </footer>
  )
}
