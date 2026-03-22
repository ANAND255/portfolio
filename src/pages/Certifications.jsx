import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Certifications.css'

/* ── Reveal helper ── */
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
  return (
    <div ref={ref} className={`${cls} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : {}}>
      {children}
    </div>
  )
}

/* ── Icons ── */
const ExternalLink = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)
const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="8" r="6"/>
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
  </svg>
)
const CheckBadge = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 12l2 2 4-4"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
  </svg>
)
const Code2 = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
  </svg>
)
const Network = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="16" y="16" width="6" height="6" rx="1"/>
    <rect x="2" y="16" width="6" height="6" rx="1"/>
    <rect x="9" y="2" width="6" height="6" rx="1"/>
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/>
    <path d="M12 12V8"/>
  </svg>
)
const Brain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
)
const Database = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
)
const Shield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const Layers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
)

/* ── Cert data ── */
const FEATURED = [
  {
    id: 'f1',
    title: 'Data Structures & Algorithms',
    issuer: 'NeoColab',
    platform: 'NeoColab Platform',
    date: 'Dec 2024',
    category: 'Computer Science',
    categoryColor: '#F5A623',
    Icon: Code2,
    desc: 'Comprehensive coverage of arrays, linked lists, trees, graphs, sorting and searching algorithms with complexity analysis.',
    skills: ['Arrays', 'Trees', 'Graphs', 'Dynamic Programming', 'Big O'],
    link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2B9%2FJVBtWQVEM32eo9zuZLGNaZudB6MVLY%3D',
  },
  {
    id: 'f2',
    title: 'Bits & Bytes of Computer Networking',
    issuer: 'Google',
    platform: 'Coursera',
    date: 'May 2024',
    category: 'Networking',
    categoryColor: '#00CFFF',
    Icon: Network,
    desc: 'Deep dive into network protocols, TCP/IP, DNS, HTTP/HTTPS, network hardware and troubleshooting in modern infrastructure.',
    skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'Routing', 'Firewalls'],
    link: 'https://www.coursera.org/account/accomplishments/verify/9R998KO3L9A0',
  },
  {
    id: 'f3',
    title: 'Python Industrial Training',
    issuer: 'Code Sprint',
    platform: 'Code Sprint',
    date: 'Mar 2024',
    category: 'Programming',
    categoryColor: '#74DE80',
    Icon: Brain,
    desc: 'Industry-level Python programming covering OOP, file handling, API integrations, data processing and automation workflows.',
    skills: ['OOP', 'File I/O', 'APIs', 'Automation', 'Pandas'],
    link: 'https://certify.codesprint.in/verify/8IAo0sg6',
  },
]

const GRID_CERTS = [
  {
    id: 'g1',
    title: 'Machine Learning Fundamentals',
    issuer: 'Coursera',
    date: 'Jan 2025',
    category: 'ML / AI',
    Icon: Brain,
    accent: '#F5A623',
    link: '#',
  },
  {
    id: 'g2',
    title: 'SQL for Data Analysis',
    issuer: 'NeoColab',
    date: 'Nov 2024',
    category: 'Database',
    Icon: Database,
    accent: '#00CFFF',
    link: '#',
  },
  {
    id: 'g3',
    title: 'Power BI Data Visualization',
    issuer: 'iamneo',
    date: 'Oct 2024',
    category: 'BI Tools',
    Icon: Layers,
    accent: '#F2C811',
    link: '#',
  },
  {
    id: 'g4',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco NetAcad',
    date: 'Sep 2024',
    category: 'Security',
    Icon: Shield,
    accent: '#74DE80',
    link: '#',
  },
]

const STATS = [
  { val: '7+', label: 'Certifications' },
  { val: '4', label: 'Platforms' },
  { val: '288', label: 'Learning Hours' },
  { val: '2024–25', label: 'Active Period' },
]

/* ── Featured Card ── */
function FeaturedCard({ cert, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Reveal dir={index % 2 === 0 ? 'left' : 'right'} delay={index * 100}>
      <div
        className={`feat-card ${hovered ? 'feat-card--hovered' : ''}`}
        style={{ '--accent': cert.categoryColor }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left accent bar */}
        <div className="feat-accent-bar" />

        {/* Index watermark */}
        <div className="feat-watermark">0{index + 1}</div>

        {/* Top row */}
        <div className="feat-top">
          <div className="feat-icon-wrap">
            <cert.Icon />
          </div>
          <div className="feat-meta">
            <span className="feat-category" style={{ color: cert.categoryColor, borderColor: cert.categoryColor, background: `${cert.categoryColor}12` }}>
              {cert.category}
            </span>
            <span className="feat-date">{cert.date}</span>
          </div>
        </div>

        {/* Body */}
        <div className="feat-body">
          <h3 className="feat-title">{cert.title}</h3>
          <div className="feat-issuer">
            <span className="feat-issuer-dot" style={{ background: cert.categoryColor }} />
            {cert.issuer} · {cert.platform}
          </div>
          <p className="feat-desc">{cert.desc}</p>

          {/* Skills */}
          <div className="feat-skills">
            {cert.skills.map(s => (
              <span key={s} className="feat-skill-tag">{s}</span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="feat-footer">
          
          <a
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="cert-view-btn"
            style={{ '--btn-color': cert.categoryColor }}
          >
            <CheckBadge />
            View Certificate
            <ExternalLink />
          </a>
        </div>
      </div>
    </Reveal>
  )
}

/* ── Grid Card ── */
function GridCard({ cert, index }) {
  return (
    <Reveal dir="scale" delay={index * 70}>
      <div className="grid-cert-card" style={{ '--accent': cert.accent }}>
        {/* Shimmer overlay */}
        <div className="gc-shimmer" />

        {/* Corner decoration */}
        <div className="gc-corner-tl" />
        <div className="gc-corner-br" />

        <div className="gc-icon">
          <cert.Icon />
        </div>

        <div className="gc-body">
          <span className="gc-category" style={{ color: cert.accent }}>{cert.category}</span>
          <h4 className="gc-title">{cert.title}</h4>
          <div className="gc-issuer">{cert.issuer}</div>
        </div>

        <div className="gc-footer">
          <span className="gc-date">{cert.date}</span>
          <a
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="gc-view-btn"
            style={{ color: cert.accent, borderColor: `${cert.accent}40` }}
          >
            View <ExternalLink />
          </a>
        </div>
      </div>
    </Reveal>
  )
}

/* ── Main Page ── */
export default function Certifications() {
  return (
    <main className="page">

      {/* Banner */}
      <div className="banner">
        <div className="banner-ring" />
        <div className="wrap">
          <span className="tag u1">Credentials</span>
          <div className="lg u2" style={{ marginTop: 18 }}>Certifications</div>
          <p className="banner-sub u3">
            Verified credentials from industry-leading platforms — each one a commitment to continuous growth.
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="cert-stats-strip">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="css-item">
              <div className="css-val">{s.val}</div>
              <div className="css-lbl">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Featured certifications */}
      <section className="sec">
        <div className="wrap">
          <Reveal>
            <div className="cert-section-head">
              <div>
                <span className="tag">Highlighted</span>
                <h2 className="md" style={{ marginTop: 14 }}>Featured Certifications</h2>
              </div>
              <p className="cert-section-sub">Core credentials that define my technical foundation</p>
            </div>
          </Reveal>

          <div className="feat-cards-list">
            {FEATURED.map((cert, i) => (
              <FeaturedCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />
            {/* Grid certifications */}
      {/* <section className="sec sec-alt">
        <div className="wrap">
          <Reveal>
            <div className="cert-section-head">
              <div>
                <span className="tag">More Credentials</span>
                <h2 className="md" style={{ marginTop: 14 }}>Additional Certifications</h2>
              </div>
              <p className="cert-section-sub">Expanding expertise across tools, platforms and domains</p>
            </div>
          </Reveal>
 
          <div className="grid-certs-grid">
            {GRID_CERTS.map((cert, i) => (
              <GridCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </section>
       */}

      <div className="divider" />

      {/* CTA — link back to education */}
      <section className="sec">
        <div className="wrap">
          <Reveal>
            <div className="cert-cta-block">
              <div className="cert-cta-ring" />
              <div className="cert-cta-inner">
                <span className="tag">Academic Record</span>
                <h3 className="md" style={{ marginTop: 16, marginBottom: 14 }}>View Full Education</h3>
                <p>Explore my academic background, university details and the full timeline of learning.</p>
                <Link to="/education" className="btn btn-w" style={{ marginTop: 28 }}>
                  Education Page →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}