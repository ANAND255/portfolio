import { useEffect, useRef } from 'react'
import '../styles/Skills.css'

const LogoPython=()=>(<svg viewBox="0 0 256 255"><defs><linearGradient id="sA" x1="12%" x2="80%" y1="12%" y2="78%"><stop offset="0%" stopColor="#387EB8"/><stop offset="100%" stopColor="#366994"/></linearGradient><linearGradient id="sB" x1="19%" x2="91%" y1="21%" y2="88%"><stop offset="0%" stopColor="#FFE052"/><stop offset="100%" stopColor="#FFC331"/></linearGradient></defs><path fill="url(#sA)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"/><path fill="url(#sB)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"/></svg>)
const LogoPowerBI=()=>(<svg viewBox="0 0 48 48"><rect width="48" height="48" rx="6" fill="#F2C811"/><rect x="11" y="17" width="6.5" height="20" rx="2" fill="#1E1E1E"/><rect x="20.5" y="11" width="6.5" height="26" rx="2" fill="#1E1E1E"/><rect x="30" y="6" width="6.5" height="31" rx="2" fill="#1E1E1E"/></svg>)
const LogoSQL=()=>(<svg viewBox="0 0 64 64"><ellipse cx="32" cy="14" rx="21" ry="7" fill="none" stroke="#00758F" strokeWidth="2.8"/><path d="M11 14v11c0 3.9 9.4 7 21 7s21-3.1 21-7V14" fill="none" stroke="#00758F" strokeWidth="2.8"/><path d="M11 25v11c0 3.9 9.4 7 21 7s21-3.1 21-7V25" fill="none" stroke="#00758F" strokeWidth="2.8"/><path d="M11 36v11c0 3.9 9.4 7 21 7s21-3.1 21-7V36" fill="none" stroke="#F29111" strokeWidth="2.8"/><ellipse cx="32" cy="47" rx="21" ry="7" fill="none" stroke="#F29111" strokeWidth="2.8"/></svg>)
const LogoPandas=()=>(<svg viewBox="0 0 100 110"><rect x="26" y="4" width="14" height="42" rx="4" fill="#150458"/><rect x="26" y="62" width="14" height="42" rx="4" fill="#150458"/><rect x="43" y="24" width="14" height="42" rx="4" fill="#E70488"/><rect x="9" y="36" width="14" height="42" rx="4" fill="#E70488"/><rect x="9" y="4" width="14" height="22" rx="4" fill="#150458"/><rect x="43" y="80" width="14" height="24" rx="4" fill="#150458"/></svg>)
const LogoNumpy=()=>(<svg viewBox="0 0 100 100"><polygon points="50,8 86,28 86,72 50,92 14,72 14,28" fill="none" stroke="#4DABCF" strokeWidth="3"/><polygon points="50,22 74,36 74,64 50,78 26,64 26,36" fill="none" stroke="#4DABCF" strokeWidth="2"/><line x1="14" y1="28" x2="26" y2="36" stroke="#4DABCF" strokeWidth="2"/><line x1="86" y1="28" x2="74" y2="36" stroke="#4DABCF" strokeWidth="2"/><line x1="14" y1="72" x2="26" y2="64" stroke="#4DABCF" strokeWidth="2"/><line x1="86" y1="72" x2="74" y2="64" stroke="#4DABCF" strokeWidth="2"/><text x="50" y="57" textAnchor="middle" fill="#4DABCF" fontSize="18" fontWeight="700" fontFamily="monospace">Np</text></svg>)
const LogoScikit=()=>(<svg viewBox="0 0 120 80"><path d="M16 62 Q16 16 60 16 Q104 16 104 62" fill="none" stroke="#F89939" strokeWidth="5.5" strokeLinecap="round"/><circle cx="60" cy="16" r="8" fill="#3499CD"/><circle cx="16" cy="62" r="8" fill="#3499CD"/><circle cx="104" cy="62" r="8" fill="#3499CD"/><path d="M35 52 L60 37 L85 52" fill="none" stroke="#3499CD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="60" cy="37" r="5" fill="#F89939"/></svg>)
const LogoMatplot=()=>(<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="none" stroke="#11557C" strokeWidth="3"/><circle cx="50" cy="50" r="28" fill="none" stroke="#11557C" strokeWidth="2"/><circle cx="50" cy="50" r="12" fill="#11557C"/><line x1="50" y1="8" x2="50" y2="92" stroke="#11557C" strokeWidth="1.5"/><line x1="8" y1="50" x2="92" y2="50" stroke="#11557C" strokeWidth="1.5"/></svg>)
const LogoExcel=()=>(<svg viewBox="0 0 48 48"><path fill="#185C37" d="M28 6H8a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/><path fill="#21A366" d="M40 6H28v36h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/><path fill="#107C42" d="M28 6h-5v36h5V6z"/><path fill="white" d="M18 15l-3 5.5 3 5.5h-2.6L13.2 22 11 26H8.4l3.4-5.5-3.4-5.5H11l2.2 4 2.2-4H18z"/></svg>)
const LogoJupyter=()=>(<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="84" fill="none" stroke="#E46E2E" strokeWidth="5"/><circle cx="100" cy="32" r="13" fill="#E46E2E"/><circle cx="160" cy="140" r="13" fill="#9E9E9E"/><circle cx="40" cy="140" r="13" fill="#F37626"/><text x="100" y="120" textAnchor="middle" fontSize="52" fontWeight="700" fontFamily="sans-serif" fill="#E46E2E">Ju</text></svg>)
const LogoGithub=()=>(<svg viewBox="0 0 24 24" fill="white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>)
const LogoDAX=()=>(<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="7" fill="#F2C811"/><text x="8" y="43" fontSize="21" fontWeight="900" fontFamily="sans-serif" fill="#1E1E1E">DAX</text></svg>)
const LogoMySQL=()=>(<svg viewBox="0 0 90 56"><text x="4" y="42" fontSize="30" fontWeight="700" fontFamily="sans-serif" fill="#00758F">My</text><text x="40" y="42" fontSize="30" fontWeight="700" fontFamily="sans-serif" fill="#F29111">SQL</text></svg>)
const LogoSeaborn=()=>(<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="7" fill="#4C72B0"/><text x="30" y="40" textAnchor="middle" fontSize="28" fontWeight="700" fontFamily="sans-serif" fill="white">sb</text></svg>)
const LogoVSCode=()=>(<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="4" fill="#007ACC"/><path d="M22 24h9l15 40 15-40h9l-19 52h-10z" fill="white"/></svg>)
const AwardIcon=()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="6"/><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/></svg>)

const GROUPS = [
  {Logo:LogoPython, label:'Programming Languages', skills:[{n:'Python',p:85},{n:'SQL',p:80},{n:'C++',p:65},{n:'Java',p:60}]},
  {Logo:LogoPowerBI,label:'Data & BI Tools',       skills:[{n:'Power BI',p:82},{n:'Excel',p:78},{n:'DAX',p:70},{n:'Data Visualization',p:80}]},
  {Logo:LogoPandas, label:'Python Libraries',       skills:[{n:'Pandas',p:85},{n:'NumPy',p:80},{n:'Scikit-learn',p:75},{n:'Matplotlib/Seaborn',p:78}]},
  {Logo:LogoScikit, label:'Machine Learning',       skills:[{n:'Logistic Regression',p:80},{n:'Random Forest',p:75},{n:'Feature Engineering',p:72},{n:'Model Evaluation',p:78}]},
]
const TOOLS=[{L:LogoJupyter,n:'Jupyter',c:'IDE'},{L:LogoGithub,n:'GitHub',c:'Version Control'},{L:LogoPowerBI,n:'Power BI',c:'BI Tool'},{L:LogoExcel,n:'Excel',c:'Spreadsheet'},{L:LogoVSCode,n:'VS Code',c:'Editor'},{L:LogoMySQL,n:'MySQL',c:'Database'},{L:LogoSeaborn,n:'Seaborn',c:'Viz Library'},{L:LogoDAX,n:'DAX',c:'Formula Language'}]
const CERTS=[{n:'Data Structures & Algorithms',i:'NeoColab',d:'Dec 2024'},{n:'Bits & Bytes of Networking',i:'Coursera (Google)',d:'May 2024'},{n:'Python Industrial Training',i:'Code Sprint',d:'Mar 2024'},{n:'288 Hours on iamneo',i:'iamneo Learning',d:'May 2025'}]
const COUNTERS=[{v:'15+',l:'Technologies'},{v:'288',l:'Hrs Logged'},{v:'4',l:'Certifications'},{v:'2+',l:'Yrs Learning'}]

function AnimBar({ pct, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => el.classList.add('animated'), delay); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return <div className="bar-track"><div ref={ref} className="bar-fill" /></div>
}

function Reveal({ children, className = '', delay = 0, dir = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const cls = dir === 'left' ? 'reveal-left' : dir === 'right' ? 'reveal-right' : dir === 'scale' ? 'reveal-scale' : 'reveal'
  return <div ref={ref} className={`${cls} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : {}}>{children}</div>
}

export default function Skills() {
  return (
    <main className="page">
      <div className="banner">
        <div className="banner-ring" />
        <div className="wrap">
          <span className="tag u1">Technical Arsenal</span>
          <div className="lg u2" style={{marginTop:18}}>Skills &amp; Expertise</div>
          <p className="banner-sub u3">A full-stack data toolkit — from raw Python to polished Power BI dashboards.</p>
        </div>
      </div>

      {/* Counter strip */}
      <div className="skill-counter-row">
        {COUNTERS.map((c,i) => (
          <Reveal key={c.l} className="sc-item" delay={i * 90}>
            <div className="sc-val">{c.v}</div>
            <div className="sc-lbl">{c.l}</div>
          </Reveal>
        ))}
      </div>

      {/* Skill bars */}
      <section className="sec">
        <div className="wrap">
          <Reveal><span className="tag">Proficiency</span></Reveal>
          <Reveal delay={80}><h2 className="md" style={{marginTop:14}}>Technical Skills</h2></Reveal>
          <div className="skill-groups">
            {GROUPS.map((g, gi) => (
              <Reveal key={g.label} delay={gi * 50}>
                <div className="sg-head">
                  <div className="icon"><g.Logo /></div>
                  <span className="name">{g.label}</span>
                </div>
                <div className="bars-grid">
                  {g.skills.map((s, si) => (
                    <div className="bar-item" key={s.n}>
                      <div className="bar-hd">
                        <span className="bar-n">{s.n}</span>
                        <span className="bar-p">{s.p}%</span>
                      </div>
                      <AnimBar pct={s.p} delay={si * 100 + gi * 50} />
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Tools */}
      <section className="sec sec-alt">
        <div className="wrap">
          <Reveal><span className="tag">Toolbox</span></Reveal>
          <Reveal delay={80}><h2 className="md" style={{marginTop:14}}>Tools &amp; Platforms</h2></Reveal>
          <div className="tools-grid">
            {TOOLS.map((t, i) => (
              <Reveal key={t.n} dir="scale" delay={i * 55}>
                <div className="tool-tile">
                  <div className="t-logo"><t.L /></div>
                  <div className="t-name">{t.n}</div>
                  <div className="t-cat">{t.c}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Certs */}
      <section className="sec">
        <div className="wrap">
          <Reveal><span className="tag">Credentials</span></Reveal>
          <Reveal delay={80}><h2 className="md" style={{marginTop:14}}>Certificates</h2></Reveal>
          <div className="cert-grid">
            {CERTS.map((c, i) => (
              <Reveal key={c.n} dir={i % 2 === 0 ? 'left' : 'right'} delay={i * 80}>
                <div className="cert-item">
                  <div className="cert-icon"><AwardIcon /></div>
                  <div className="cert-info">
                    <h4>{c.n}</h4>
                    <p>{c.i}</p>
                    <span className="cert-date">{c.d}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
