import '../styles/About.css'
const ChevR=()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14"><polyline points="9 18 15 12 9 6"/></svg>)
const INTERESTS=[
  {title:'Data Analytics',desc:'Exploring patterns in complex datasets to uncover actionable business insights.',
   Icon:()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>)},
  {title:'Machine Learning',desc:'Building predictive models that solve real healthcare and finance problems.',
   Icon:()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.22-7.78-2.12 2.12M7.34 16.66l-2.12 2.12M16.66 16.66l2.12 2.12M7.34 7.34 5.22 5.22"/></svg>)},
  {title:'Data Visualization',desc:'Crafting dashboards that turn raw numbers into compelling visual stories.',
   Icon:()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 17V9m5 8V5m5 12v-4"/></svg>)},
]
const DETAILS=[{k:'Degree',v:'B.Tech CSE'},{k:'University',v:'LPU, Punjab'},{k:'CGPA',v:'7.0 / 10'},{k:'Location',v:'Punjab, India'},{k:'Email',v:'anandbijoy255@gmail.com'},{k:'Phone',v:'+91 8714575989'}]
const SOFT=['Analytical Thinking','Problem Solving','Adaptability','Communication','Time Management','Collaboration','Critical Thinking','Attention to Detail']
export default function About() {
  return (
    <main className="page">
      <div className="banner"><div className="wrap"><span className="tag">Who I Am</span><div className="lg" style={{marginTop:18}}>About Me</div><p>A data-driven problem solver passionate about analytics and intelligent systems.</p></div></div>
      <section className="sec">
        <div className="wrap">
          <div className="about-split">
            <div className="a-img-col">
              <div className="a-img-box">
                {/* Replace: <img src="/photo.jpg" alt="Anand" /> */}
                <div className="a-img-ph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><p>Add Your Photo</p></div>
                <div className="a-img-outline"/>
              </div>
              <div className="a-badge"><div className="n">2+</div><div className="l">Yrs Learning</div></div>
            </div>
            <div className="a-text-col">
              <span className="tag">My Story</span>
              <div className="md" style={{marginTop:14,marginBottom:18}}>Passionate about <span style={{color:'var(--g3)'}}>data</span></div>
              <p className="a-body-text">I'm Anand Bijoy, a B.Tech CSE student at LPU. My journey into data began when I realised that numbers, treated right, tell stories that words cannot.</p>
              <p className="a-body-text">From building real-time stock market dashboards to training ML models for heart disease detection, I love the full pipeline — from raw ingestion to polished, actionable insights.</p>
              <div className="a-details">{DETAILS.map(d=><div className="a-detail" key={d.k}><div className="k">{d.k}</div><div className="v">{d.v}</div></div>)}</div>
              <a href="/Anand_Bijoy_-_Business_analyst.pdf" target="_blank" rel="noreferrer" className="btn btn-w">Download Resume</a>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"/>
      <section className="sec sec-alt">
        <div className="wrap">
          <span className="tag">Focus Areas</span>
          <div className="md" style={{marginTop:14}}>What I Love</div>
          <div className="interest-list">
            {INTERESTS.map(i=>(<div className="int-card" key={i.title}><div className="int-icon"><i.Icon/></div><h4>{i.title}</h4><p>{i.desc}</p></div>))}
          </div>
        </div>
      </section>
      <div className="divider"/>
      <section className="sec">
        <div className="wrap">
          <span className="tag">Soft Skills</span>
          <div className="md" style={{marginTop:14}}>Beyond Code</div>
          <div className="soft-cluster">
            {SOFT.map(s=>(<div className="soft-pill" key={s}><span/>{s}</div>))}
          </div>
        </div>
      </section>
    </main>
  )
}
