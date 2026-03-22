import { useState, useEffect, useRef } from 'react'
import '../styles/Projects.css'

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

const GH=()=>(<svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>)

const PROJECTS = [
  {n:'01',badge:'Dashboard',title:'Real-Time Stock Market Dashboard',desc:'End-to-end data pipeline fetching, processing and streaming live US equity data into an interactive Power BI dashboard with automated cloud refresh.',hi:['Built Python pipeline using yfinance API to fetch and stream live stock data for multiple US equities in real time.','Integrated Power BI Service with automated dataset refresh, dynamic slicers, and advanced DAX measures for trend analysis.','User-defined watchlists via customisable Python script. Full documentation and version control on GitHub.'],tags:['Python','yfinance','Pandas','Power BI','DAX','GitHub'],gh:'https://github.com/ANAND255',period:'Sep 2025'},
  {n:'02',badge:'Machine Learning',title:'Heart Disease Detection',desc:'Complete ML pipeline predicting heart disease risk from real patient data, with an interactive Power BI dashboard for clinical insights.',hi:['Data cleaning, preprocessing and feature engineering on real-world patient health datasets from medical repositories.','Trained Logistic Regression & Random Forest models — evaluated via accuracy, precision, recall, F1-score and ROC-AUC.','Power BI dashboard showing risk distribution, feature importance, patient profiles for data-driven clinical decision support.'],tags:['Python','Scikit-learn','NumPy','Pandas','Jupyter','Power BI','Excel'],gh:'https://github.com/ANAND255',period:'Jul 2025'},
]
const FILTERS = ['All','Dashboard','Machine Learning']

export default function Projects() {
  const [active, setActive] = useState('All')
  const list = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.badge === active)
  return (
    <main className="page">
      <div className="banner">
        <div className="banner-ring" />
        <div className="wrap">
          <span className="tag u1">My Work</span>
          <div className="lg u2" style={{marginTop:18}}>Projects</div>
          <p className="banner-sub u3">Real-world data problems solved with end-to-end pipelines, ML models and Power BI dashboards.</p>
        </div>
      </div>

      <section className="sec">
        <div className="wrap">
          <Reveal><span className="tag">Portfolio</span></Reveal>
          <Reveal delay={80}><h2 className="md" style={{marginTop:14}}>Featured Projects</h2></Reveal>
          <Reveal delay={120}>
            <div className="filter-row">
              {FILTERS.map(f => <button key={f} className={`f-btn ${active===f?'active':''}`} onClick={()=>setActive(f)}>{f}</button>)}
            </div>
          </Reveal>
          <div className="proj-cards">
            {list.map((p, i) => (
              <Reveal key={p.title} dir={i % 2 === 0 ? 'left' : 'right'} delay={i * 100}>
                <div className="pc" data-n={p.n}>
                  <div className="pc-accent" />
                  <div className="pc-top">
                    <span className="pc-badge">{p.badge}</span>
                    <a href={p.gh} target="_blank" rel="noreferrer" className="pc-gh"><GH /> GitHub</a>
                  </div>
                  <div className="pc-body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="pc-hi">{p.hi.map((h,j) => <div className="hi-row" key={j}>{h}</div>)}</div>
                  </div>
                  <div className="pc-foot">
                    <div className="fl">Tech Stack</div>
                    <div className="chips">{p.tags.map(t => <span className="chip" key={t}>{t}</span>)}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="sec sec-alt">
        <div className="wrap">
          <Reveal><span className="tag">Training</span></Reveal>
          <Reveal delay={80}><h2 className="md" style={{marginTop:14}}>Hands-On Training</h2></Reveal>
          <Reveal delay={140}>
            <div className="training-block" style={{marginTop:40}}>
              <div className="training-bg-text">TRAINING</div>
              <div className="training-inner">
                <div className="training-left">
                  <span className="t-tag">Summer Training · Jun–Jul 2025</span>
                  <h3>From Data to Insights: A Hands-On Approach to Data Science</h3>
                  <div className="t-org">Lovely Professional University · Punjab</div>
                  <p>Completed intensive summer training in Data Science with a focus on predictive modeling and interactive data visualization to address real-world healthcare challenges such as heart disease risk analysis. Applied ML techniques on patient health datasets and utilised Power BI for KPI reporting and dynamic dashboards to support data-driven decision-making.</p>
                </div>
                <div className="training-right">
                  {[['6','Weeks Duration'],['2','Projects Delivered'],['100%','Completion Rate']].map(([v,l]) => (
                    <div className="t-stat" key={l}><div className="ts-val">{v}</div><div className="ts-lbl">{l}</div></div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
