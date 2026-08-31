'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { projects } from '@/content/projects';

const process = [
  ['01','Understand','The business, customer and product come first.'],
  ['02','Design','Shape a clear path through the ecommerce experience.'],
  ['03','Engineer','Build reusable components and maintainable Shopify architecture.'],
  ['04','Optimize','Improve responsiveness, usability and technical quality.'],
  ['05','Refine','Test the important details across devices and interactions.'],
];

const expertise = [
  ['Shopify',['Liquid','Custom sections','Theme architecture','Metafields','Product templates','Collections','Ecommerce UX']],
  ['Frontend',['HTML','CSS','JavaScript','React','Responsive UI','Component architecture','Accessibility']],
  ['Engineering',['Git','REST APIs','API integrations','Performance','SEO','Debugging','Browser compatibility']],
];

export default function PortfolioExperience() {
  const [theme,setTheme] = useState<'light'|'dark'>('light');
  const [menu,setMenu] = useState(false);
  const [command,setCommand] = useState(false);
  const [query,setQuery] = useState('');
  const [filter,setFilter] = useState('All');
  const [active,setActive] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as 'light'|'dark'|null;
    const initial = saved ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initial); document.documentElement.dataset.theme = initial;
  },[]);
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('portfolio-theme',theme); },[theme]);
  useEffect(() => {
    const onKey = (event:KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setCommand(true); }
      if (event.key === 'Escape') { setCommand(false); setMenu(false); }
    };
    addEventListener('keydown',onKey); return () => removeEventListener('keydown',onKey);
  },[]);
  useEffect(() => { if(command) dialogRef.current?.showModal(); else dialogRef.current?.close(); },[command]);

  const filters = useMemo(() => ['All',...Array.from(new Set(projects.flatMap((p) => p.industries)))],[]);
  const visible = projects.filter((p) => (filter === 'All' || p.industries.includes(filter)) && `${p.title} ${p.category} ${p.tags.join(' ')} ${p.technologies.join(' ')}`.toLowerCase().includes(query.toLowerCase()));
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return <main>
    <div className="scroll-line" aria-hidden="true" />
    <header className="site-header">
      <Link className="wordmark" href="#top"><span>AKT</span><span className="wordmark-role">Shopify / Frontend</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation"><Link href="#work">Work</Link><Link href="#about">About</Link><Link href="#expertise">Expertise</Link></nav>
      <div className="header-tools"><button className="icon-button" onClick={() => setCommand(true)} aria-label="Open command menu">⌘K</button><button className="icon-button theme-button" onClick={toggleTheme} aria-label="Toggle color theme">{theme === 'light' ? '●' : '○'}</button><Link className="header-cta" href="#contact">Let&apos;s talk ↗</Link><button className="menu-button" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Toggle navigation">Menu</button></div>
    </header>
    {menu && <nav className="mobile-menu" aria-label="Mobile navigation">{['work','about','expertise','contact'].map((item) => <Link key={item} href={`#${item}`} onClick={() => setMenu(false)}>{item}</Link>)}</nav>}

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Available for thoughtful commerce work</p><h1>Commerce, shaped<br />for the <em>real world.</em></h1><p className="hero-intro">I&apos;m Akhilesh — a Shopify and frontend developer building clear, responsive storefronts where design, engineering and ecommerce meet.</p><div className="hero-actions"><Link className="button button-dark" href="#work">Explore selected work <span>↘</span></Link><Link className="text-link" href="#about">More about me →</Link></div></div>
      <div className="hero-art" aria-label="Abstract ecommerce storefront composition"><div className="browser-shell"><div className="browser-top"><i/><i/><i/><span>storefront.preview</span></div><div className="store-nav"><b>FORM / 01</b><span>Shop&nbsp;&nbsp; Journal&nbsp;&nbsp; Cart (0)</span></div><div className="product-visual"><div className="product-copy"><small>OBJECT NO. 04</small><strong>Designed to<br/>be chosen.</strong></div><div className="product-orbit"><div className="product-core"/></div></div><div className="store-footer"><span>Custom product experience</span><b>Add to bag — ₹4,800</b></div></div><div className="code-note"><span>01 / LIQUID</span><code>{'{% section \'product-form\' %}'}</code></div><div className="system-note"><span>DESIGN SYSTEM</span><div><i/><i/><i/><i/></div><b>08:24</b></div></div>
    </section>

    <section className="work-section" id="work">
      <div className="section-heading"><p className="eyebrow">Selected work / 2025–26</p><h2>Built for products<br/><em>people choose.</em></h2><p>Real ecommerce references, presented without invented metrics or outcomes.</p></div>
      <div className="project-tools"><div className="filters" aria-label="Project filters">{filters.map((item) => <button className={filter===item?'active':''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><label className="search-field"><span className="sr-only">Search projects</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects"/><kbd>⌘K</kbd></label></div>
      <div className="project-index">
        <div className="project-preview" style={{'--preview':visible[active]?.surface ?? '#888','--accent':visible[active]?.accent ?? '#fff'} as React.CSSProperties}><div className="preview-window"><span>{visible[active]?.title ?? 'No project'}</span><div className="preview-object"/><small>Commerce / Interface / System</small></div></div>
        <div className="project-list">{visible.length ? visible.map((project,index) => <article key={project.id} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}><span>{String(project.order).padStart(2,'0')}</span><div><p>{project.category}</p><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><div className="project-tags">{project.industries.map(tag => <small key={tag}>{tag}</small>)}</div></div><div className="project-links"><Link href={`/work/${project.slug}`}>Case study →</Link><a href={project.url} target="_blank" rel="noreferrer">Live ↗</a></div></article>) : <div className="no-results"><p>No projects match that search.</p><button onClick={() => {setQuery('');setFilter('All')}}>Clear search</button></div>}</div>
      </div>
    </section>

    <section className="statement"><p>I don&apos;t just build websites.</p><h2>I build digital commerce experiences.</h2><div className="marquee" aria-hidden="true">LIQUID · STOREFRONTS · RESPONSIVE UX · PERFORMANCE · SHOPIFY ·</div></section>

    <section className="process-section"><div className="section-kicker">How I think</div><div className="process-intro"><h2>From business context<br/>to browser detail.</h2><p>A practical process for turning requirements and designs into maintainable commerce experiences.</p></div><div className="process-list">{process.map(([number,title,copy],i) => <details key={number} open={i===0}><summary><span>{number}</span><strong>{title}</strong><i>+</i></summary><p>{copy}</p></details>)}</div></section>

    <section className="expertise-section" id="expertise"><div className="section-kicker">Expertise</div><div className="expertise-head"><h2>Built for the browser.<br/><em>Structured for the business.</em></h2><p>Shopify implementation, frontend engineering and the systems that keep ecommerce experiences clear and adaptable.</p></div><div className="expertise-grid">{expertise.map(([title,items],i) => <article key={title as string}><span>0{i+1}</span><h3>{title as string}</h3><ul>{(items as string[]).map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="about-section" id="about"><div className="about-label">About / AKT</div><div className="about-copy"><h2>Design sense.<br/>Engineering discipline.<br/><em>Commerce context.</em></h2><p>My background began in computer science and moved into the practical details of Shopify and ecommerce development. I enjoy the work that happens where design, code, business requirements and customer experience overlap.</p><p>With approximately one year of professional experience, including work in a top 1% freelance agency environment, I&apos;m focused on sharpening the craft through real storefronts and production constraints.</p><Link className="text-link" href="/resume">View résumé →</Link></div><aside><p>Education</p><article><strong>BTech, Computer Science</strong><span>SRIMT Lucknow · 2020–2023 · 78%</span></article><article><strong>Diploma, Information Technology</strong><span>Hewett Polytechnic Lucknow · 2017–2020 · 77%</span></article></aside></section>

    <section className="contact-section" id="contact"><div className="contact-copy"><p className="eyebrow">Start a conversation</p><h2>Have a store that needs<br/><em>better engineering?</em></h2><p>Let&apos;s build something worth remembering.</p><a href="https://www.linkedin.com/in/akhilesh-kumar-tyagi-34286012a/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><ContactForm/></section>
    <footer><div><strong>Akhilesh Kumar Tyagi</strong><span>Shopify Developer / Ecommerce Developer</span></div><nav><Link href="#work">Work</Link><Link href="#about">About</Link><Link href="#expertise">Expertise</Link><Link href="#contact">Contact</Link></nav><p>Designed &amp; engineered with attention to detail. © {new Date().getFullYear()}</p></footer>

    <dialog ref={dialogRef} className="command-dialog" onCancel={() => setCommand(false)}><div className="command-head"><input autoFocus placeholder="Type a command or search…" value={query} onChange={(e) => setQuery(e.target.value)}/><button onClick={() => setCommand(false)}>ESC</button></div><nav>{[['Work','#work'],['About','#about'],['Expertise','#expertise'],['Contact','#contact'],['Résumé','/resume']].map(([label,href]) => <Link key={label} href={href} onClick={() => setCommand(false)}><span>Go to {label}</span><kbd>↵</kbd></Link>)}<button onClick={() => {toggleTheme();setCommand(false)}}><span>Toggle theme</span><kbd>T</kbd></button><a href="https://www.linkedin.com/in/akhilesh-kumar-tyagi-34286012a/" target="_blank" rel="noreferrer"><span>Open LinkedIn</span><kbd>↗</kbd></a></nav></dialog>
  </main>;
}

function ContactForm() {
  const [state,setState] = useState<'idle'|'loading'|'success'|'error'>('idle');
  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState('loading');
    const form = new FormData(event.currentTarget);
    try { const response = await fetch('/api/contact',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(Object.fromEntries(form))}); if(!response.ok) throw new Error(); setState('success'); event.currentTarget.reset(); } catch { setState('error'); }
  }
  if(state==='success') return <div className="form-message" role="status"><span>Message received</span><h3>Thanks for reaching out.</h3><p>I&apos;ll review the project details and get back to you.</p><button onClick={() => setState('idle')}>Send another message</button></div>;
  return <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Name<input name="name" required minLength={2}/></label><label>Email<input name="email" type="email" required/></label></div><div className="form-row"><label>Project type<select name="projectType" required defaultValue=""><option value="" disabled>Select one</option><option>Shopify storefront</option><option>Theme development</option><option>Frontend implementation</option><option>Other</option></select></label><label>Budget range<select name="budget" required defaultValue=""><option value="" disabled>Select range</option><option>Exploring</option><option>₹25k–₹75k</option><option>₹75k–₹2L</option><option>₹2L+</option></select></label></div><label>Project details<textarea name="message" required minLength={20} rows={4}/></label><button className="button button-light" disabled={state==='loading'}>{state==='loading'?'Sending…':'Send inquiry →'}</button>{state==='error'&&<p className="error-message" role="alert">Something went wrong. Please try again or reach out on LinkedIn.</p>}</form>;
}
