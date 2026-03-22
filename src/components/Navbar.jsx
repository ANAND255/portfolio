import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

const LINKS = [
  {to:'/',label:'Home'},{to:'/about',label:'About'},
  {to:'/skills',label:'Skills'},{to:'/projects',label:'Projects'},
  {to:'/education',label:'Education'},{to:'/contact',label:'Contact'},
  {to:'/certifications',label:'Certifications'},
]
const DlSVG=()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>)
const CVLink=()=>(<a href="https://drive.google.com/file/d/1E1VdxWylVEJQzOURX9Tx4_jP4na8wVbI/view?usp=sharing" target="_blank" rel="noreferrer" className="nav-cv"><DlSVG /> Resume</a>)

export default function Navbar() {
  const [solid,setSolid]=useState(false)
  const [open,setOpen]=useState(false)
  const {pathname}=useLocation()
  useEffect(()=>{const fn=()=>setSolid(window.scrollY>20);window.addEventListener('scroll',fn);return()=>window.removeEventListener('scroll',fn)},[])
  useEffect(()=>setOpen(false),[pathname])
  return (
    <>
      <nav className={`nav ${solid?'solid':''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-bracket">[</span>
            AB
            <span className="nav-logo-dot" />
            <span className="nav-logo-bracket">]</span>
          </Link>
          <ul className="nav-links">
            {LINKS.map(l=><li key={l.to}><Link to={l.to} className={pathname===l.to?'on':''}>{l.label}</Link></li>)}
          </ul>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <CVLink />
            <button className={`hamburger ${open?'open':''}`} onClick={()=>setOpen(p=>!p)} aria-label="menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`drawer ${open?'open':''}`}>
        {LINKS.map(l=><Link key={l.to} to={l.to} className={pathname===l.to?'on':''}>{l.label}</Link>)}
        <CVLink />
      </div>
    </>
  )
}
