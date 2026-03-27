import { useState, useEffect, useRef } from 'react'
import '../styles/Projects.css'

/* ── Icons ── */
const GH = () => (<svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>)

const ChevL = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
)
const ChevR = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)
const ImgIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
)

/* ── Reveal on scroll (same as Skills page) ── */
function Reveal({ children, className = '', delay = 0, dir = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el); return () => obs.disconnect()
  }, [])
  const cls = dir === 'left' ? 'reveal-left' : dir === 'right' ? 'reveal-right' : dir === 'scale' ? 'reveal-scale' : 'reveal'
  return <div ref={ref} className={`${cls} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : {}}>{children}</div>
}


/* ────────────────────────────────────────────
   PROJECT DATA
   Add your image paths to the `images` array.
   Place images in /public/projects/ folder.
   Example: images: ['/projects/stock-1.png', '/projects/stock-2.png']
   Leave images: [] to show the placeholder slots.
──────────────────────────────────────────── */
const PROJECTS = [
  {
    n: '01',
    badge: 'Dashboard',
    title: 'Real-Time Stock Market Dashboard',
    desc: 'End-to-end data pipeline fetching, processing and streaming live US equity data into an interactive Power BI dashboard with automated cloud refresh.',
    hi: [
      'Built Python pipeline using yfinance API to fetch and stream live stock data for multiple US equities in real time.',
      'Integrated Power BI Service with automated dataset refresh, dynamic slicers, and advanced DAX measures for trend analysis.',
      'User-defined watchlists via customisable Python script. Full documentation and version control on GitHub.',
    ],
    tags: ['Python', 'yfinance', 'Pandas', 'Power BI', 'DAX', 'GitHub'],
    gh: 'https://github.com/ANAND255/Real-Time-Stock-Tracker',
    period: 'Sep 2025',
    /* ↓ Add your image paths here */
    images: [
       '/projects/stock.jpeg', 
      /* '/projects/stock-2.png', */
      /* '/projects/stock-3.png', */
    ],
    imgLabel: 'Stock Dashboard',
  },
  {
    n: '02',
    badge: 'Machine Learning',
    title: 'Heart Disease Detection',
    desc: 'Complete ML pipeline predicting heart disease risk from real patient data, with an interactive Power BI dashboard for clinical insights.',
    hi: [
      'Data cleaning, preprocessing and feature engineering on real-world patient health datasets from medical repositories.',
      'Trained Logistic Regression & Random Forest models — evaluated via accuracy, precision, recall, F1-score and ROC-AUC.',
      'Power BI dashboard showing risk distribution, feature importance, patient profiles for data-driven clinical decision support.',
    ],
    tags: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Jupyter', 'Power BI', 'Excel'],
    gh: 'https://github.com/ANAND255/Heart-Disease-Detection',
    period: 'Jul 2025',
    /* ↓ Add your image paths here */
    images: [
      '/projects/heart.jpeg',
      /* '/projects/heart-1.png', */
      /* '/projects/heart-2.png', */
    ],
    imgLabel: 'ML Model',
  },
  {
    n: '01',
    badge: 'Dashboard',
    title: ' Road Accident Analysis Dashboard',
    desc: 'End-to-end data analysis and visualization project uncovering accident trends, severity patterns, and key risk factors across India using Power BI.',
    hi: [
      'Built an interactive Power BI dashboard to analyze road accident trends, severity, and fatalities across India.',
      'Performed in-depth analysis of risk factors including alcohol involvement, time of day, road conditions, and vehicle types.',
      'Implemented DAX measures and dynamic visualizations to deliver actionable insights for road safety awareness and decision-making.',
    ],
    tags: ['Power BI', 'Excel'],
    gh: 'https://github.com/ANAND255/Road-accident-analysis-Powerbi',
    period: 'Sep 2025',
    /* ↓ Add your image paths here */
    images: [
       '/projects/road1.jpeg',
       '/projects/road2.jpeg', 
      /* '/projects/stock-2.png', */
      /* '/projects/stock-3.png', */
    ],
    imgLabel: 'Road accident ananlysis Dashboard',
  },
]

const FILTERS = ['All', 'Dashboard', 'Machine Learning']

/* ── Carousel Component ── */
function Carousel({ images, label }) {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx(i => Math.max(0, i - 1))
  const next = () => setIdx(i => Math.min(images.length - 1, i + 1))

  if (!images || images.length === 0) {
    return (
      <div className="pc2-carousel">
        <div className="pc2-slides">
          <div className="pc2-placeholder">
            <ImgIcon />
            <p>Add project images</p>
            <div className="ph-slots">
              {[1, 2, 3].map(n => (
                <div className="ph-slot" key={n}>img {n}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="pc2-controls">
          <div className="pc2-arrows">
            <button className="pc2-arrow" disabled><ChevL /></button>
            <button className="pc2-arrow" disabled><ChevR /></button>
          </div>
          <div className="pc2-dots">
            <span className="pc2-dot active" />
          </div>
          <span className="pc2-counter">1 / 1</span>
        </div>
      </div>
    )
  }

  return (
    <div className="pc2-carousel">
      {/* ✅ Fixed-height wrapper so absolute children have a parent to fill */}
      <div className="pc2-slides" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
        <div className="pc2-badge">{label}</div>

        {images.map((src, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',   // ✅ ALL slides absolutely positioned
              inset: 0,
              opacity: i === idx ? 1 : 0,
              transition: 'opacity .4s ease, transform .4s ease',
              transform: i === idx ? 'translateX(0)' : i < idx ? 'translateX(-24px)' : 'translateX(24px)',
              zIndex: i === idx ? 1 : 0,
              pointerEvents: i === idx ? 'auto' : 'none',
            }}
          >
            <img
              src={src}
              alt={`${label} screenshot ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      <div className="pc2-controls">
        <div className="pc2-arrows">
          <button className="pc2-arrow" onClick={prev} disabled={idx === 0}><ChevL /></button>
          <button className="pc2-arrow" onClick={next} disabled={idx === images.length - 1}><ChevR /></button>
        </div>
        <div className="pc2-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`pc2-dot ${i === idx ? 'active' : ''}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
        <span className="pc2-counter">{idx + 1} / {images.length}</span>
      </div>
    </div>
  )
}
/* ── Main Component ── */
export default function Projects() {
  const [active, setActive] = useState('All')
  const list = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.badge === active)

  return (
    <main className="page">
      <div className="banner">
        <div className="wrap">
          <span className="tag u1">My Work</span>
          <div className="lg u2" style={{ marginTop: 18 }}>Projects</div>
          <p className="banner-sub u3">Real-world data problems solved with end-to-end pipelines, ML models and Power BI dashboards.</p>
        </div>
      </div>

      <section className="sec">
        <div className="wrap">
          <Reveal><span className="tag">Portfolio</span></Reveal>
          <Reveal delay={80}><h2 className="md" style={{ marginTop: 14 }}>Featured Projects</h2></Reveal>

          {/* Filter */}
          <Reveal delay={120}><div className="filter-row">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`f-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div></Reveal>

          {/* Project items with carousel */}
          <div className="proj-cards-v2">
            {list.map((p, i) => (
              <Reveal key={p.title} dir={i % 2 === 0 ? 'left' : 'right'} delay={i * 120}>
              <div className={`proj-item ${i % 2 === 1 ? 'rev' : ''}`}>

                {/* LEFT — Carousel + tech stack below */}
                <div className="pc2-left-col">
                  <Carousel images={p.images} label={p.imgLabel} />
                  <div className="pc2-below">
                    <div className="fl">Tech Stack</div>
                    <div className="chips">
                      {p.tags.map(t => <span className="chip" key={t}>{t}</span>)}
                    </div>
                    <a href={p.gh} target="_blank" rel="noreferrer" className="pc2-gh">
                      <GH /> View on GitHub
                    </a>
                  </div>
                </div>

                {/* RIGHT — Info only */}
                <div className="pc2-info">
                  <div className="pc2-num">{p.n}</div>

                  <div className="pc2-info-top">
                    <div className="pc2-top">
                      <span className="pc-badge">{p.badge}</span>
                      <span style={{
                        fontFamily: 'var(--mono)', fontSize: '.6rem',
                        letterSpacing: '.12em', textTransform: 'uppercase',
                        color: 'var(--la2)'
                      }}>{p.period}</span>
                    </div>

                    <h3>{p.title}</h3>
                    <p className="pc2-desc">{p.desc}</p>

                    <div className="pc2-hi">
                      {p.hi.map((h, j) => (
                        <div className="hi-row" key={j}>{h}</div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TRAINING */}
      <section className="sec sec-alt">
        <div className="wrap">
          <Reveal><span className="tag">Training</span></Reveal>
          <Reveal delay={80}><h2 className="md" style={{ marginTop: 14 }}>Hands-On Training</h2></Reveal>
          <Reveal delay={140}><div className="training-block" style={{ marginTop: 40 }}>
            <div className="training-bg-text">TRAINING</div>
            <div className="training-inner">
              <div className="training-left">
                <span className="t-tag">Summer Training · Jun–Jul 2025</span>
                <h3>From Data to Insights: A Hands-On Approach to Data Science</h3>
                <div className="t-org">Lovely Professional University · Punjab</div>
                <p>Completed intensive summer training in Data Science with a focus on predictive modeling and interactive data visualization to address real-world healthcare challenges such as heart disease risk analysis. Applied ML techniques on patient health datasets and utilised Power BI for KPI reporting and dynamic dashboards to support data-driven decision-making.</p>
              </div>
              <div className="training-right">
                <div className="t-stat">
                  <div className="ts-val">6</div>
                  <div className="ts-lbl">Weeks Duration</div>
                </div>
                <div className="t-stat">
                  <div className="ts-val">2</div>
                  <div className="ts-lbl">Projects Delivered</div>
                </div>
                <div className="t-stat">
                  <div className="ts-val">100%</div>
                  <div className="ts-lbl">Completion Rate</div>
                </div>
              </div>
            </div>
          </div></Reveal>
        </div>
      </section>
    </main>
  )
}