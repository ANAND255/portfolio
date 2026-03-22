import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Education.css'

function Reveal({ children, className = '', delay = 0, dir = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el); return () => obs.disconnect()
  }, [])
  const cls = dir === 'left' ? 'reveal-left' : dir === 'right' ? 'reveal-right' : dir === 'scale' ? 'reveal-scale' : 'reveal'
  return (
    <div ref={ref} className={`${cls} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : {}}>
      {children}
    </div>
  )
}

const Ar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

const EDU = [
  { num:'01', deg:'Bachelor of Technology — Computer Science & Engineering', sch:'Lovely Professional University', loc:'Punjab, India', period:'Aug 2023 – Present', score:'7.0', scoreLabel:'CGPA', status:'current' },
  { num:'02', deg:'Intermediate (Class XII)', sch:'Veda Vyasa Vidyalayam', loc:'Kozhikode, Kerala', period:'Jun 2020 – Mar 2022', score:'84%', scoreLabel:'Score', status:'done' },
  { num:'03', deg:'Matriculation (Class X)', sch:'Veda Vyasa Vidyalayam', loc:'Kozhikode, Kerala', period:'Jun 2019 – Mar 2020', score:'81%', scoreLabel:'Score', status:'done' },
]

const SOFT = ['Analytical Thinking','Problem Solving','Adaptability','Communication','Time Management','Collaboration','Critical Thinking','Attention to Detail']

export default function Education() {
  return (
    <main className="page">
      <div className="banner">
        <div className="banner-ring" />
        <div className="wrap">
          <span className="tag u1">Academic Journey</span>
          <div className="lg u2" style={{marginTop:18}}>Education</div>
          <p className="banner-sub u3">A strong academic foundation backed by continuous self-driven learning and industry-verified credentials.</p>
        </div>
      </div>

      {/* Formal Education */}
      <section className="sec">
        <div className="wrap">
          <Reveal><span className="tag">Academics</span></Reveal>
          <Reveal delay={80}><h2 className="md" style={{marginTop:14}}>Formal Education</h2></Reveal>
          <Reveal delay={120}>
            <div className="edu-cards">
              {EDU.map(e => (
                <div className="edu-card" key={e.num}>
                  <div className="edu-num">{e.num}</div>
                  <div className="edu-body">
                    <div className="edu-degree">{e.deg}</div>
                    <div className="edu-school">{e.sch}</div>
                    <div className="edu-loc">{e.loc}</div>
                  </div>
                  <div className="edu-right">
                    <div className="edu-score">{e.score}</div>
                    <div className="edu-period">{e.period}</div>
                    <span className={`edu-pill ${e.status}`}>{e.status === 'current' ? 'Ongoing' : 'Completed'}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {/* Certifications teaser — links to /certifications */}
      <section className="sec sec-alt">
        <div className="wrap">
          <Reveal>
            <div className="edu-cert-teaser">
              <div className="ect-left">
                <span className="tag">Credentials</span>
                <h2 className="md" style={{marginTop:14,marginBottom:14}}>Certifications</h2>
                <p style={{color:'var(--g5)',fontSize:'.95rem',lineHeight:1.8,maxWidth:480}}>
                  Verified certificates from Google, NeoColab, Coursera, Code Sprint and more —
                  spanning algorithms, networking, Python, ML and data visualization.
                </p>
                <div className="ect-pills">
                  {['DSA','Networking','Python','Machine Learning','Power BI','SQL'].map(t => (
                    <span key={t} className="ect-pill">{t}</span>
                  ))}
                </div>
              </div>
              <div className="ect-right">
                <div className="ect-stats">
                  <div className="ect-stat">
                    <div className="ect-stat-val">7+</div>
                    <div className="ect-stat-lbl">Certifications</div>
                  </div>
                  <div className="ect-stat">
                    <div className="ect-stat-val">288</div>
                    <div className="ect-stat-lbl">Hrs Logged</div>
                  </div>
                </div>
                <Link to="/certifications" className="btn btn-w ect-btn">
                  View All Certificates <Ar />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {/* Soft Skills */}
      <section className="sec">
        <div className="wrap">
          <Reveal><span className="tag">Soft Skills</span></Reveal>
          <Reveal delay={80}><h2 className="md" style={{marginTop:14}}>Beyond Code</h2></Reveal>
          <Reveal delay={120}><p className="body" style={{marginTop:14,maxWidth:520}}>Technical skills get you in the room. These are what keep you there.</p></Reveal>
          <div className="skill-track">
            {SOFT.map((s, i) => (
              <Reveal key={s} delay={i * 55}>
                <div className="soft-chip">{s}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}