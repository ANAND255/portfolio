import { useState } from 'react'
import '../styles/Contact.css'
const LI=()=>(<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v2a6 6 0 0 1 2-3zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>)
const GH=()=>(<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>)
const Send=()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>)
const Check=()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>)
const Mail=()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>)
const Phone=()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.3a2 2 0 0 1 1.98-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.95-1.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>)
const Loc=()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>)
const Uni=()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>)
const CIS=[{Icon:Mail,label:'Email',val:'anandbijoy255@gmail.com',href:'mailto:anandbijoy255@gmail.com'},{Icon:Phone,label:'Phone',val:'+91 8714575989',href:'tel:+918714575989'},{Icon:Loc,label:'Location',val:'Punjab, India',href:null},{Icon:Uni,label:'University',val:'LPU, Punjab',href:null}]
export default function Contact() {
  const [form,setForm]=useState({name:'',email:'',subject:'',message:''})
  const [sent,setSent]=useState(false)
  const [loading,setLoading]=useState(false)
  const handle=e=>setForm(f=>({...f,[e.target.name]:e.target.value}))
  const submit=e=>{e.preventDefault();if(!form.name||!form.email||!form.message)return;setLoading(true);setTimeout(()=>{setLoading(false);setSent(true)},1200)}
  return (
    <main className="page">
      <div className="banner"><div className="wrap"><span className="tag">Get In Touch</span><div className="lg" style={{marginTop:18}}>Contact</div><p style={{color:'var(--g3)',marginTop:12,fontSize:'0.95rem'}}>Open to internships, collaborations, and data conversations.</p></div></div>
      <section className="sec">
        <div className="wrap">
          <div className="contact-layout">
            <div className="c-info">
              <span className="tag">Contact Info</span>
              <h2 className="md" style={{marginTop:14,marginBottom:14}}>Say Hello</h2>
              <p>Whether you have a project, opportunity, or just want to talk data — I'd love to hear from you.</p>
              <div className="ci-list">
                {CIS.map(ci=>(<div className="ci-row" key={ci.label}><div className="ci-icon"><ci.Icon/></div><div><div className="ci-lbl">{ci.label}</div>{ci.href?<a href={ci.href} className="ci-val">{ci.val}</a>:<span className="ci-val">{ci.val}</span>}</div></div>))}
              </div>
              <div className="soc-btns">
                <a href="http://www.linkedin.com/in/anandbijoy" target="_blank" rel="noreferrer" className="soc-b"><LI/> LinkedIn</a>
                <a href="https://github.com/ANAND255" target="_blank" rel="noreferrer" className="soc-b"><GH/> GitHub</a>
              </div>
            </div>
            <div className="form-box">
              {sent?(
                <div className="success"><div className="s-icon"><Check/></div><h4>Message Sent!</h4><p>Thanks for reaching out. I'll get back to you within 24 hours.</p></div>
              ):(
                <>
                  <h3>Send a Message</h3>
                  <p>Fill in the form and I'll respond as soon as possible.</p>
                  <form onSubmit={submit} noValidate>
                    <div className="row2">
                      <div className="fg"><label>Name</label><input name="name" placeholder="Your full name" value={form.name} onChange={handle} required/></div>
                      <div className="fg"><label>Email</label><input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handle} required/></div>
                    </div>
                    <div className="fg"><label>Subject</label><input name="subject" placeholder="What's this about?" value={form.subject} onChange={handle}/></div>
                    <div className="fg"><label>Message</label><textarea name="message" placeholder="Tell me about your project or opportunity..." value={form.message} onChange={handle} required/></div>
                    <button type="submit" className="btn btn-w submit" disabled={loading}>{loading?'Sending…':<><Send/> Send Message</>}</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
