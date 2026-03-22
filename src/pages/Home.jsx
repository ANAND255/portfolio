import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import Image from '../assets/profileanand.png'

function Reveal({ children, className = '', delay = 0, dir = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  const cls = dir === 'left' ? 'reveal-left' : dir === 'right' ? 'reveal-right' : dir === 'scale' ? 'reveal-scale' : 'reveal'
  return <div ref={ref} className={`${cls} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : {}}>{children}</div>
}

const Dl=()=>(<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>)
const Ar=()=>(<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>)
const GH=()=>(<svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>)

/* SVG Logos */
const LogoPython=()=>(<svg viewBox="0 0 256 255"><defs><linearGradient id="pA" x1="12%" x2="80%" y1="12%" y2="78%"><stop offset="0%" stopColor="#387EB8"/><stop offset="100%" stopColor="#366994"/></linearGradient><linearGradient id="pB" x1="19%" x2="91%" y1="21%" y2="88%"><stop offset="0%" stopColor="#FFE052"/><stop offset="100%" stopColor="#FFC331"/></linearGradient></defs><path fill="url(#pA)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"/><path fill="url(#pB)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"/></svg>)
const LogoPowerBI=()=>(<svg viewBox="0 0 48 48"><rect width="48" height="48" rx="6" fill="#F2C811"/><rect x="11" y="17" width="6.5" height="20" rx="2" fill="#1E1E1E"/><rect x="20.5" y="11" width="6.5" height="26" rx="2" fill="#1E1E1E"/><rect x="30" y="6" width="6.5" height="31" rx="2" fill="#1E1E1E"/></svg>)
const LogoSQL=()=>(<svg viewBox="0 0 64 64"><ellipse cx="32" cy="14" rx="21" ry="7" fill="none" stroke="#00758F" strokeWidth="2.8"/><path d="M11 14v11c0 3.9 9.4 7 21 7s21-3.1 21-7V14" fill="none" stroke="#00758F" strokeWidth="2.8"/><path d="M11 25v11c0 3.9 9.4 7 21 7s21-3.1 21-7V25" fill="none" stroke="#00758F" strokeWidth="2.8"/><path d="M11 36v11c0 3.9 9.4 7 21 7s21-3.1 21-7V36" fill="none" stroke="#F29111" strokeWidth="2.8"/><ellipse cx="32" cy="47" rx="21" ry="7" fill="none" stroke="#F29111" strokeWidth="2.8"/></svg>)
const LogoPandas=()=>(<svg viewBox="0 0 100 110"><rect x="26" y="4" width="14" height="42" rx="4" fill="#150458"/><rect x="26" y="62" width="14" height="42" rx="4" fill="#150458"/><rect x="43" y="24" width="14" height="42" rx="4" fill="#E70488"/><rect x="9" y="36" width="14" height="42" rx="4" fill="#E70488"/><rect x="9" y="4" width="14" height="22" rx="4" fill="#150458"/><rect x="43" y="80" width="14" height="24" rx="4" fill="#150458"/></svg>)
const LogoNumpy=()=>(<svg viewBox="0 0 100 100"><polygon points="50,8 86,28 86,72 50,92 14,72 14,28" fill="none" stroke="#4DABCF" strokeWidth="3"/><polygon points="50,22 74,36 74,64 50,78 26,64 26,36" fill="none" stroke="#4DABCF" strokeWidth="2"/><line x1="14" y1="28" x2="26" y2="36" stroke="#4DABCF" strokeWidth="2"/><line x1="86" y1="28" x2="74" y2="36" stroke="#4DABCF" strokeWidth="2"/><line x1="14" y1="72" x2="26" y2="64" stroke="#4DABCF" strokeWidth="2"/><line x1="86" y1="72" x2="74" y2="64" stroke="#4DABCF" strokeWidth="2"/><text x="50" y="57" textAnchor="middle" fill="#4DABCF" fontSize="18" fontWeight="700" fontFamily="monospace">Np</text></svg>)
const LogoScikit=()=>(<svg viewBox="0 0 120 80"><path d="M16 62 Q16 16 60 16 Q104 16 104 62" fill="none" stroke="#F89939" strokeWidth="5.5" strokeLinecap="round"/><circle cx="60" cy="16" r="8" fill="#3499CD"/><circle cx="16" cy="62" r="8" fill="#3499CD"/><circle cx="104" cy="62" r="8" fill="#3499CD"/><path d="M35 52 L60 37 L85 52" fill="none" stroke="#3499CD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="60" cy="37" r="5" fill="#F89939"/></svg>)
const LogoMatplotlib=()=>(<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="none" stroke="#11557C" strokeWidth="3"/><circle cx="50" cy="50" r="28" fill="none" stroke="#11557C" strokeWidth="2"/><circle cx="50" cy="50" r="12" fill="#11557C"/><line x1="50" y1="8" x2="50" y2="92" stroke="#11557C" strokeWidth="1.5"/><line x1="8" y1="50" x2="92" y2="50" stroke="#11557C" strokeWidth="1.5"/><line x1="20" y1="20" x2="80" y2="80" stroke="#11557C" strokeWidth="1"/><line x1="20" y1="80" x2="80" y2="20" stroke="#11557C" strokeWidth="1"/></svg>)
const LogoExcel=()=>(<svg viewBox="0 0 48 48"><path fill="#185C37" d="M28 6H8a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/><path fill="#21A366" d="M40 6H28v36h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/><path fill="#107C42" d="M28 6h-5v36h5V6z"/><path fill="white" d="M18 15l-3 5.5 3 5.5h-2.6L13.2 22 11 26H8.4l3.4-5.5-3.4-5.5H11l2.2 4 2.2-4H18z"/></svg>)

const SKILLS=[
  {name:'Python',cat:'Language',Logo:LogoPython},
  {name:'Power BI',cat:'BI Tool',Logo:LogoPowerBI},
  {name:'SQL',cat:'Database',Logo:LogoSQL},
  {name:'Pandas',cat:'Library',Logo:LogoPandas},
  {name:'NumPy',cat:'Library',Logo:LogoNumpy},
  {name:'Scikit-learn',cat:'ML',Logo:LogoScikit},
  {name:'Matplotlib',cat:'Viz',Logo:LogoMatplotlib},
  {name:'Excel',cat:'Analytics',Logo:LogoExcel},
]

const PROJECTS=[
  {n:'01',badge:'Dashboard',title:'Real-Time Stock Market Dashboard',desc:'End-to-end pipeline fetching live US equity data into an interactive Power BI dashboard with automated refresh and DAX measures.',tags:['Python','yfinance','Pandas','Power BI','DAX'],gh:'https://github.com/ANAND255'},
  {n:'02',badge:'Machine Learning',title:'Heart Disease Detection',desc:'ML pipeline using Logistic Regression & Random Forest on patient data, with Power BI dashboard for clinical insight delivery.',tags:['Scikit-learn','Pandas','Power BI','NumPy'],gh:'https://github.com/ANAND255'},
]

const TICKER=['Python','Power BI','SQL','Machine Learning','Pandas','NumPy','Scikit-learn','Data Analysis','Jupyter','DAX','Excel','Feature Engineering']

export default function Home() {
  const ticks=[...TICKER,...TICKER]
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">

        {/* LEFT — Photo panel */}
        <div className="hero-photo-panel">
          <div className="hp-glow" />
          <div className="hp-corner-ring" />
          <div className="hp-corners"><span /><span /><span /></div>
          <div className="hp-coord">01 / profile</div>
          {/* Image wrapper — fills panel on all sizes */}
          <div className="hp-img-wrap">
            <img src={Image} alt="Anand Bijoy" className="hp-img" />
          </div>
          <div className="hp-avail">
            <span className="hp-dot" />
            <div className="hp-avail-text">
              <strong>Open to Work</strong>
              <span>Seeking Internships</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Content panel */}
        <div className="hero-content">
          <span className="hc-num">2025</span>

          <div className="hero-name u2">
            <span className="line1">ANAND</span>
            <span className="line2">BIJOY</span>
          </div>

          <div className="hero-divider u3">
            <span className="role-txt">Data Science and Analytics + ML</span>
            <span className="role-line" />
          </div>

          <p className="hero-desc u4">
            I build <b>end-to-end data pipelines</b>, train ML models, and craft Power BI
            dashboards that turn raw numbers into boardroom-ready decisions.
          </p>

          <div className="hero-ctas u5">
            <a
              href="https://drive.google.com/file/d/1E1VdxWylVEJQzOURX9Tx4_jP4na8wVbI/view?usp=sharing"
              target="_blank" rel="noreferrer"
              className="btn btn-cv"
            >
              <Dl /> View Resume
            </a>
            <Link to="/projects" className="btn btn-o">My Work <Ar /></Link>
          </div>

          {/* Stats + Ticker combined — same width block */}
          <div className="hero-stats-wrap u6">
            <div className="hero-stats">
              {[['4+','Projects'],['4','Certs'],['7.3','CGPA']].map(([v,l])=>(
                <div className="hs-item" key={l}>
                  <div className="hs-val">{v}</div>
                  <div className="hs-lbl">{l}</div>
                </div>
              ))}
            </div>
            <div className="hero-ticker">
              <div className="ticker">
                <div className="ticker-track">
                  {ticks.map((t,i)=>(
                    <span className="ticker-item" key={i}>
                      <span className="ti-dot" />{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>



      {/* ── BENTO ABOUT ── */}
      <section className="sec">
        <div className="wrap">
          <Reveal><span className="tag">About Me</span></Reveal>
          <div className="bento">
            <Reveal className="card card-c7" delay={60}>
              <div className="card-sub">01 — introduction</div>
              <h3>Turning complex datasets into clear intelligence</h3>
              <p>B.Tech CSE student at LPU passionate about the full data pipeline — from ingestion and ML modeling to polished Power BI dashboards. I make data speak in ways that drive real decisions.</p>
            </Reveal>

            <div style={{gridColumn:'span 5',display:'grid',gap:12}}>
              <Reveal className="card" delay={180}>
                <div className="card-sub">LPU CGPA</div>
                <div className="card-big-num">7.3</div>
              </Reveal>
            </div>

            <Reveal className="card card-c8" delay={100}>
              <div className="card-sub">02 — philosophy</div>
              <h3 style={{fontStyle:'italic'}}>"Data is not just numbers — it's the story behind every decision."</h3>
              <p style={{marginTop:12}}>Analytical Thinking · Problem Solving · Communication · Adaptability</p>
            </Reveal>

            <Reveal className="card card-c4 card-inv" delay={160}>
              <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
                <div>
                  <div className="card-sub" style={{color:'rgba(8,11,24,.4)'}}>03 — connect</div>
                  <div className="sm">Let's work together on your next data project.</div>
                </div>
                <Link
                  to="/contact"
                  className="btn btn-dark"
                  style={{marginTop:22,justifyContent:'center',background:'#080B18',color:'var(--amber)',border:'1.5px solid rgba(8,11,24,.15)'}}
                >
                  Get in Touch <Ar />
                </Link>
              </div>
            </Reveal>
          </div>

          <div style={{textAlign:'right',marginTop:24}}>
            <Link to="/about" className="btn btn-o">Full Story <Ar /></Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SKILLS ── */}
      <section className="sec sec-alt">
        <div className="wrap">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:48,flexWrap:'wrap',gap:16}}>
            <Reveal>
              <div>
                <span className="tag">Technical Skills</span>
                <h2 className="lg" style={{marginTop:14}}>Stack &amp; Tools</h2>
              </div>
            </Reveal>
            <Link to="/skills" className="btn btn-o">View All <Ar /></Link>
          </div>
          <div className="skills-mosaic">
            {SKILLS.map((s, i) => (
              <Reveal key={s.name} dir="scale" delay={i * 55}>
                <div className="sk-tile">
                  <div className="sk-logo"><s.Logo /></div>
                  <div>
                    <div className="sk-name">{s.name}</div>
                    <div className="sk-cat">{s.cat}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PROJECTS ── */}
      <section className="sec">
        <div className="wrap">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:48,flexWrap:'wrap',gap:16}}>
            <Reveal>
              <div>
                <span className="tag">Featured Work</span>
                <h2 className="lg" style={{marginTop:14}}>Recent Projects</h2>
              </div>
            </Reveal>
            <Link to="/projects" className="btn btn-o">All Projects <Ar /></Link>
          </div>
          <div className="proj-grid">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} dir={i === 0 ? 'left' : 'right'} delay={i * 100}>
                <div className="pj-card" data-n={p.n}>
                  <div className="pj-top">
                    <span className="pj-badge">{p.badge}</span>
                    <a href={p.gh} target="_blank" rel="noreferrer" className="pj-gh"><GH /> GitHub</a>
                  </div>
                  <div className="pj-body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="pj-tags">{p.tags.map(t=><span className="pj-tag" key={t}>{t}</span>)}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <div className="wrap">
          <h2 className="lg">Ready to Collaborate?</h2>
          <p>Whether it's a data project, internship, or a conversation about analytics — I'd love to connect.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-dark">Get In Touch <Ar /></Link>
            <a
              href="https://drive.google.com/file/d/1E1VdxWylVEJQzOURX9Tx4_jP4na8wVbI/view?usp=sharing"
              target="_blank" rel="noreferrer"
              className="btn btn-dark"
            >
              <Dl /> Download CV
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}