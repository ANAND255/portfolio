import '../styles/Education.css'

const Award=()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="6"/><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/></svg>)

const EDU = [
  { num:'01', deg:'Bachelor of Technology — Computer Science & Engineering', sch:'Lovely Professional University', loc:'Punjab, India', period:'Aug 2023 – Present', score:'7.0', scoreLabel:'CGPA', status:'current' },
  { num:'02', deg:'Intermediate (Class XII)',  sch:'Veda Vyasa Vidyalayam', loc:'Kozhikode, Kerala', period:'Jun 2020 – Mar 2022', score:'84%', scoreLabel:'Score', status:'done' },
  { num:'03', deg:'Matriculation (Class X)',   sch:'Veda Vyasa Vidyalayam', loc:'Kozhikode, Kerala', period:'Jun 2019 – Mar 2020', score:'81%', scoreLabel:'Score', status:'done' },
]

const CERTS_BIG = { n:'01', title:'288 Hours of Intensive Learning', issuer:'iamneo Learning Platform', date:'May 2025', desc:'Completed 4 comprehensive courses over 288 hours — the most consistent and disciplined learning commitment of the academic journey.' }

const CERTS_SMALL = [
  { title:'Data Structures & Algorithms', issuer:'NeoColab', date:'Dec 2024' },
  { title:'Bits & Bytes of Networking', issuer:'Coursera (Google)', date:'May 2024' },
  { title:'Python Industrial Training', issuer:'Code Sprint', date:'Mar 2024' },
]

const SOFT = ['Analytical Thinking','Problem Solving','Adaptability','Communication','Time Management','Collaboration','Critical Thinking','Attention to Detail']

export default function Education() {
  return (
    <main className="page">
      <div className="banner">
        <div className="wrap">
          <span className="tag">Academic Journey</span>
          <div className="lg" style={{marginTop:18}}>Education</div>
          <p className="banner-sub">A strong academic foundation backed by 288+ hours of self-driven learning and multiple industry certifications.</p>
        </div>
      </div>

      {/* DEGREE CARDS */}
      <section className="sec">
        <div className="wrap">
          <span className="tag">Academics</span>
          <h2 className="md" style={{marginTop:14}}>Formal Education</h2>
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
        </div>
      </section>

      <div className="divider"/>

      {/* CERTS — bento */}
      <section className="sec sec-alt">
        <div className="wrap">
          <span className="tag">Credentials</span>
          <h2 className="md" style={{marginTop:14}}>Certificates</h2>
          <div className="cert-bento">
            <div className="cert-big">
              <div>
                <div className="cert-n">{CERTS_BIG.n} — Featured</div>
                <h3>{CERTS_BIG.title}</h3>
                <p style={{fontSize:'.88rem',color:'rgba(0,0,0,.5)',lineHeight:1.75,marginTop:8}}>{CERTS_BIG.desc}</p>
              </div>
              <div>
                <div className="cert-issuer">{CERTS_BIG.issuer}</div>
                <div className="cert-date">{CERTS_BIG.date}</div>
              </div>
            </div>
            <div className="cert-small">
              {CERTS_SMALL.map(c => (
                <div className="cert-card" key={c.title}>
                  <div>
                    <div className="cert-icon"><Award/></div>
                    <h4>{c.title}</h4>
                    <div className="cert-issuer">{c.issuer}</div>
                  </div>
                  <div className="cert-date">{c.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* SOFT SKILLS */}
      <section className="sec">
        <div className="wrap">
          <span className="tag">Soft Skills</span>
          <h2 className="md" style={{marginTop:14}}>Beyond Code</h2>
          <p className="body" style={{marginTop:14,maxWidth:520}}>Technical skills get you in the room. These are what keep you there.</p>
          <div className="skill-track">
            {SOFT.map(s => (
              <div className="soft-chip" key={s}>{s}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
