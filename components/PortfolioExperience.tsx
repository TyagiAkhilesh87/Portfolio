'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowDown, ArrowRight, ArrowUpRight, Code, EnvelopeSimple, GithubLogo, ImageSquare, LinkedinLogo, List, MonitorPlay, PhoneCall, ShoppingBag, WhatsappLogo, X } from '@phosphor-icons/react';
import { SiFigma, SiGithub, SiGraphql, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiShopify, SiTypescript } from 'react-icons/si';
import { projects } from '@/content/projects';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akhilesh-kumar-tyagi-34286012a/', Icon: LinkedinLogo },
  { label: 'GitHub', href: 'https://github.com/tyagiakhilesh87', Icon: GithubLogo },
  { label: 'Email', href: 'mailto:tyagiakhliesh87@gmail.com', Icon: EnvelopeSimple },
  { label: 'WhatsApp', href: 'https://wa.me/918795943121', Icon: WhatsappLogo },
];

const techStack = [
  { name: 'Shopify', role: 'Commerce architecture', Icon: SiShopify },
  { name: 'React', role: 'Interactive interfaces', Icon: SiReact },
  { name: 'Next.js', role: 'Production storefronts', Icon: SiNextdotjs },
  { name: 'TypeScript', role: 'Reliable application code', Icon: SiTypescript },
  { name: 'Node.js', role: 'Services and APIs', Icon: SiNodedotjs },
  { name: 'GraphQL', role: 'Connected commerce data', Icon: SiGraphql },
  { name: 'MongoDB', role: 'Flexible persistence', Icon: SiMongodb },
  { name: 'JavaScript', role: 'Web foundations', Icon: SiJavascript },
  { name: 'Figma', role: 'Interface systems', Icon: SiFigma },
  { name: 'GitHub', role: 'Versioned delivery', Icon: SiGithub },
];

const orbitLabel = 'AKHILESH KUMAR TYAGI · SHOPIFY · UI/UX ·';

export default function PortfolioExperience() {
  const [menu, setMenu] = useState(false);
  const [entered, setEntered] = useState(false);
  const [selected, setSelected] = useState(projects[0]);
  const workShowcaseRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const manualProjectRef = useRef(false);
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0), mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 140, damping: 24, mass: .3 });
  const smoothY = useSpring(mouseY, { stiffness: 140, damping: 24, mass: .3 });
  const heroX = useTransform(smoothX, [-1, 1], [-11, 11]);
  const heroY = useTransform(smoothY, [-1, 1], [-8, 8]);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  const aboutInView = useInView(aboutRef, { once: true, amount: .08 });

  useEffect(() => {
    const timer = window.setTimeout(() => setEntered(true), reduceMotion ? 50 : 1900);
    const move = (event: PointerEvent) => {
      mouseX.set(event.clientX / innerWidth * 2 - 1); mouseY.set(event.clientY / innerHeight * 2 - 1);
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };
    addEventListener('pointermove', move, { passive: true });
    return () => { clearTimeout(timer); removeEventListener('pointermove', move); };
  }, [mouseX, mouseY, reduceMotion]);

  const heroProjects = useMemo(() => projects.slice(0, 3), []);
  const scrollProjects = useMemo(() => projects.slice(0, 4), []);
  const forcedProjectIndex = scrollProjects.findIndex((project) => project.id === selected.id);
  const selectedProjectIndex = projects.findIndex((project) => project.id === selected.id);

  useEffect(() => {
    let frame = 0;
    const syncFeaturedStore = () => {
      const showcase = workShowcaseRef.current;
      if (!showcase || innerWidth <= 1100 || manualProjectRef.current) return;
      const rect = showcase.getBoundingClientRect();
      const travel = Math.max(showcase.offsetHeight - innerHeight, 1);
      if (rect.top > innerHeight * .58 || rect.bottom < innerHeight * .42) return;
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      const index = Math.min(scrollProjects.length - 1, Math.floor(progress * scrollProjects.length));
      setSelected((current) => current.id === scrollProjects[index].id ? current : scrollProjects[index]);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncFeaturedStore);
    };
    syncFeaturedStore();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
    };
  }, [scrollProjects]);

  const selectFeaturedStore = (project: (typeof projects)[number], index: number, shouldScroll = true) => {
    setSelected(project);
    manualProjectRef.current = index >= scrollProjects.length;
    const showcase = workShowcaseRef.current;
    if (!shouldScroll || !showcase || innerWidth <= 1100 || index >= scrollProjects.length) return;
    const showcaseTop = scrollY + showcase.getBoundingClientRect().top;
    const travel = Math.max(showcase.offsetHeight - innerHeight, 0);
    const destination = showcaseTop + travel * (index / Math.max(scrollProjects.length - 1, 1));
    scrollTo({ top: destination, behavior: reduceMotion ? 'auto' : 'smooth' });
  };
  return <main className="nx-site" id="top">
    <AnimatePresence>{!entered && <motion.div className="nx-entrance" exit={{ y: '-100%' }} transition={{ duration: .85, ease: [0.76, 0, 0.24, 1] }}>
      <motion.div className="nx-entrance-lockup" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [0.16, 1, 0.3, 1] }}>
        <motion.div className="nx-entrance-mark" initial={{ opacity: 0, scale: .76, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .75, ease: [0.16, 1, 0.3, 1] }}><Image src="/portrait-assets/ak-monogram-v1.png" alt="AK monogram" width={120} height={120} priority /></motion.div>
        <div className="nx-entrance-name"><p>PORTFOLIO / LOADING</p><strong><motion.span initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .16, duration: .58 }}>AKHILESH</motion.span><motion.span initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .27, duration: .58 }}>KUMAR TYAGI</motion.span></strong><small>SHOPIFY · UI/UX · FULL STACK</small></div>
      </motion.div>
      <div className="nx-entrance-progress"><span>BUILDING THE EXPERIENCE</span><b>100%</b><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.55, ease: [0.16, 1, 0.3, 1] }} /></div>
    </motion.div>}</AnimatePresence>
    <motion.div className="nx-progress" style={{ scaleX: progress }} /><div className="nx-cursor" aria-hidden="true" />
    <header className="nx-nav"><a className="nx-brand" href="#top"><Image className="nx-brand-mark" src="/portrait-assets/ak-monogram-v1.png" alt="AK monogram" width={46} height={46} priority /><span><strong>AKHILESH KUMAR TYAGI</strong><small>Developer · Designer · Problem Solver</small></span></a><nav>{['Work', 'Expertise', 'Stack', 'About', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav><div className="nx-nav-right"><div className="nx-socials">{socials.map(({ label, href, Icon }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}><Icon size={18} weight="bold" /></a>)}</div><a className="nx-talk" href="mailto:tyagiakhliesh87@gmail.com">Let&apos;s talk <ArrowUpRight size={17} /></a><button onClick={() => setMenu(true)} aria-label="Open menu"><List size={22} /></button></div></header>
    <AnimatePresence>{menu && <motion.aside className="nx-menu" initial={{ opacity: 0, y: '-100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-100%' }}><button onClick={() => setMenu(false)} aria-label="Close menu"><X size={26} /></button>{['work','expertise','stack','about','contact'].map(item => <a key={item} href={`#${item}`} onClick={() => setMenu(false)}>{item}</a>)}</motion.aside>}</AnimatePresence>

    <section className="nx-hero"><motion.div className="nx-hero-copy" initial={reduceMotion ? false : { opacity: 0, x: -34 }} animate={entered ? { opacity: 1, x: 0 } : {}} transition={{ duration: .8 }}><p className="nx-kicker">{'// SPATIAL PORTFOLIO OS'}</p><h1>I build<br />storefronts<br />with a <em>point<br />of view.</em></h1><p className="nx-intro">Shopify + UI/UX first.<br />Full-stack development that scales.</p><div className="nx-actions"><a href="#work">Explore work <ArrowUpRight size={17} /></a><a href="/resume">View résumé <ArrowUpRight size={15} /></a></div><span className="nx-availability"><i /> Available for full-time &amp; remote opportunities</span></motion.div>
      <motion.div className="nx-portrait-stage" style={reduceMotion ? undefined : { x: heroX, y: heroY }}><Image className="nx-aperture" src="/portrait-assets/spatial-aperture-cutout-v2.png" alt="" width={1160} height={1356} priority /><Image className="nx-person" src="/portrait-assets/akhilesh-professional-cutout-v2.png" alt="Akhilesh Kumar Tyagi" width={1160} height={1356} priority /><span className="nx-orbit" aria-label={orbitLabel}>{orbitLabel.split('').map((character, index) => <i aria-hidden="true" key={`${character}-${index}`} style={{ '--orbit-angle': `${-86 + (172 * index) / (orbitLabel.length - 1)}deg` } as React.CSSProperties}>{character === ' ' ? '\u00A0' : character}</i>)}</span><div className="nx-profile-note"><b>Akhilesh Kumar Tyagi</b><span>Open to on-site, hybrid<br />and remote roles.</span><ArrowUpRight size={17} /></div></motion.div>
      <motion.div className="nx-store-stack" initial={reduceMotion ? false : { opacity: 0, x: 70 }} animate={entered ? { opacity: 1, x: 0 } : {}} transition={{ duration: .9, delay: .18 }}><p><i /> LIVE COMMERCE WORK</p>{heroProjects.map((project, index) => <button key={project.id} className={`nx-phone nx-phone-${index}`} onClick={() => { document.querySelector('#work')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); window.setTimeout(() => selectFeaturedStore(project, index), reduceMotion ? 0 : 650); }} aria-label={`Preview ${project.title}`}><span>{new URL(project.url).hostname.replace('www.','')}</span><Image src={project.previewImage} alt={`${project.title} storefront`} fill sizes="260px" priority={index === 0} /></button>)}</motion.div><a className="nx-scroll" href="#work" aria-label="Scroll to work"><ArrowDown size={18} /></a></section>

    <section className="nx-focus"><span>EXPERIENCE TIMELINE <i /></span><article><b>01</b><div><h2>Shopify &amp; UI/UX <small>PRIMARY FOCUS</small></h2><p>Strategy, design and development of high-converting, premium Shopify storefronts.</p></div></article><ArrowRight className="nx-focus-arrow" size={24} /><article><b>02</b><div><h2>Full Stack Development <small>SECOND FOCUS</small></h2><p>Scalable web applications with clean architecture and robust engineering.</p></div></article><article><b>03</b><div><h2>Continuous Craft</h2><p>Performance, accessibility and experience refinement.</p></div></article></section>
    <section className="nx-tools"><span>TECH &amp; TOOLS <i /></span>{['SHOPIFY','LIQUID','TS','NEXT','REACT','NODE','GRAPHQL'].map(tool => <b key={tool}>{tool}</b>)}<p>Based in India · UTC +05:30 · Available worldwide <i /></p></section>

    <section className="nx-work" id="work">
      <motion.div className="nx-work-art" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0, x: 130, scale: 1.04 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true, amount: .12 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}><Image src="/portrait-assets/work-commerce-constellation-v1.png" alt="" fill sizes="70vw" /></motion.div>
      <motion.div className="nx-work-head" initial={reduceMotion ? false : { opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .22 }} transition={{ duration: .72, delay: .22, ease: [0.16, 1, 0.3, 1] }}><p className="nx-eyebrow">SELECTED COMMERCE WORK / 01—10</p><KineticHeading lines={[{ text: 'Real stores.' }, { text: 'Previewed clearly.', muted: true }]} /></motion.div>
      <div className="nx-scroll-showcase" ref={workShowcaseRef}>
        <div className="nx-live-layout">
          <div className="nx-project-list">
            <div className="nx-project-list-head"><span>STORE INDEX</span><b>ALL 10 PROJECTS</b></div>
            {projects.map((project, index) => <motion.button initial={reduceMotion ? false : { opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .38, delay: Math.min(index * .045, .3) }} className={selected.id === project.id ? 'active' : ''} key={project.id} onClick={() => selectFeaturedStore(project, index)} aria-current={selected.id === project.id ? 'true' : undefined}><span>{String(index + 1).padStart(2,'0')}</span><div><strong>{project.title}</strong><small>{project.category}</small></div><ArrowUpRight size={17} /></motion.button>)}
            <div className="nx-scroll-cue"><span>{forcedProjectIndex >= 0 ? `${String(forcedProjectIndex + 1).padStart(2, '0')} / 04` : `${String(selectedProjectIndex + 1).padStart(2, '0')} / 10`}</span><i><b style={{ transform: `scaleX(${forcedProjectIndex >= 0 ? (forcedProjectIndex + 1) / 4 : (selectedProjectIndex + 1) / 10})` }} /></i><small>{forcedProjectIndex >= 0 ? 'Scroll story · first four stores' : 'Manual project selected · scroll the index for more'}</small></div>
          </div>
          <motion.div className="nx-live-stage" key={selected.id} initial={reduceMotion ? false : { opacity: .35, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .48, ease: [0.16, 1, 0.3, 1] }}>
            <div className="nx-browser-bar"><span /><span /><span /><b>{new URL(selected.url).hostname}</b><div className="nx-preview-tabs" aria-label="Store preview actions"><span className="active"><ImageSquare size={13} /> Portfolio preview</span><a href={selected.url} target="_blank" rel="noreferrer"><MonitorPlay size={13} /> Open live</a></div><a className="nx-browser-live" href={selected.url} target="_blank" rel="noreferrer"><ArrowUpRight size={14} /> Full site</a></div>
            <div className="nx-frame-wrap image"><Image src={selected.previewImage} alt={`${selected.title} storefront preview`} fill sizes="70vw" /><a className="nx-live-launch" href={selected.url} target="_blank" rel="noreferrer" aria-label={`Open ${selected.title} live storefront`}><MonitorPlay size={22} /> Open live storefront</a></div>
            <div className="nx-live-caption"><div><span>STOREFRONT PREVIEW / LIVE SITE AVAILABLE</span><h3>{selected.title}</h3><p>{selected.shortDescription}</p>{selected.previewNote && <small>{selected.previewNote}</small>}</div><a href={`/work/${selected.slug}`}>View case <ArrowRight size={17} /></a></div>
            <p className="nx-frame-note">The visual preview stays available here. Open Live launches the current storefront securely in a new tab for full interaction.</p>
          </motion.div>
        </div>
        <div className="nx-project-scroll-track" aria-hidden="true">{scrollProjects.map(project => <span key={project.id} />)}</div>
      </div>
    </section>

    <section className="nx-expertise" id="expertise">
      <div className="nx-expertise-art" aria-hidden="true"><Image src="/portrait-assets/expertise-developer-commerce-atelier-v2.png" alt="" fill sizes="60vw" /></div>
      <motion.div className="nx-expertise-head" initial={reduceMotion ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .72, delay: .22, ease: [0.16, 1, 0.3, 1] }}><p className="nx-eyebrow">DESIGN SYSTEM / COMMERCE THINKING</p><KineticHeading lines={[{ text: 'Shopify thinking,' }, { text: 'full-stack depth.', muted: true }]} /></motion.div>
      <motion.div className="nx-service-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={{ hidden: {}, visible: { transition: { delayChildren: .48, staggerChildren: .12 } } }}>
        {[{ Icon: ShoppingBag, label: '01 / PRIMARY', title: 'Shopify + UI/UX', body: 'Store architecture, responsive product storytelling, Liquid sections, collection journeys and interaction design shaped around conversion.' }, { Icon: Code, label: '02 / SECONDARY', title: 'Full-stack engineering', body: 'React and MERN applications, API integrations and maintainable interfaces built beyond the storefront.' }, { Icon: MonitorPlay, label: '03 / QUALITY', title: 'Responsive craft', body: 'Motion, accessibility, performance and device-aware polish carried from concept through implementation.' }].map(({ Icon, label, title, body }) => <motion.article key={title} variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: .62, ease: [0.16, 1, 0.3, 1] } } }}><Icon size={28} /><span>{label}</span><h3>{title}</h3><p>{body}</p></motion.article>)}
      </motion.div>
    </section>
    <section className="nx-stack" id="stack"><Image className="nx-stack-art" src="/portrait-assets/enchanted-tech-observatory-v2.png" alt="A symmetrical dark glass technology observatory with luminous orbital rings and crystalline artifacts" fill sizes="100vw" /><div className="nx-stack-shade" /><div className="nx-stack-head"><Reveal><p className="nx-eyebrow">THE ENCHANTED TECHNOLOGY ARCHIVE / 01—10</p><KineticHeading lines={[{ text: 'Tools, in orbit.' }, { text: 'Built for real work.', muted: true }]} /><p>Each technology has a precise role in the system—from interface craft and Shopify architecture to APIs, data and dependable delivery.</p></Reveal></div><div className="nx-stack-grid">{techStack.map(({ name, role, Icon }, index) => <motion.article key={name} initial={reduceMotion ? false : { opacity: 0, y: 26, rotate: index % 2 ? 1 : -1 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .55, delay: Math.min(index * .055, .4), ease: [0.16, 1, 0.3, 1] }} style={{ animationDelay: `${index * -.73}s` }}><span>{String(index + 1).padStart(2, '0')}</span><Icon aria-hidden="true" /><div><strong>{name}</strong><small>{role}</small></div></motion.article>)}</div></section>
    <section className="nx-about" id="about" ref={aboutRef}><motion.div className="nx-about-art" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0, x: 120, clipPath: 'inset(0 0 0 100%)' }} animate={reduceMotion || aboutInView ? { opacity: .46, x: 0, clipPath: 'inset(0 0 0 0%)' } : { opacity: 0, x: 120, clipPath: 'inset(0 0 0 100%)' }} transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}><Image src="/portrait-assets/about-design-bridge-v1.png" alt="" fill sizes="65vw" /></motion.div><motion.div className="nx-photo" initial={reduceMotion ? false : { opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .72, delay: .2, ease: [0.16, 1, 0.3, 1] }}><Image src="/portrait-assets/akhilesh-editorial.jpg" alt="Akhilesh Kumar Tyagi" fill sizes="45vw" /></motion.div><motion.div className="nx-about-copy" initial={reduceMotion ? false : { opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .78, delay: .34, ease: [0.16, 1, 0.3, 1] }}><p className="nx-eyebrow">ABOUT / LUCKNOW, INDIA</p><KineticHeading lines={[{ text: 'Design instinct.' }, { text: 'Developer discipline.' }]} /><p>I’m a Web Developer at Digital Heroes with a commerce-first focus. My background moves through Java, Android, MERN and modern frontend engineering, giving me the range to think about the entire product, not only the surface.</p><div className="nx-timeline"><article><span>2025—NOW</span><i /><div><h3>Web Developer · Digital Heroes</h3><p>Shopify development, responsive web design, GraphQL and API work.</p></div></article><article><span>2025</span><i /><div><h3>Web Development Intern</h3><p>Hanumant Technology Pvt. Ltd. · MERN stack development.</p></div></article><article><span>2020—2023</span><i /><div><h3>B.Tech · Computer Science</h3><p>SR Group of Institute Management and Technology · 78%.</p></div></article><article><span>2017—2020</span><i /><div><h3>Diploma · Information Technology</h3><p>Hewett Polytechnic Lucknow · 77%.</p></div></article></div></motion.div></section>
    <section className="nx-contact" id="contact"><div><p className="nx-eyebrow">AVAILABLE FOR THE RIGHT TEAM</p><KineticHeading lines={[{ text: 'Let’s build the store' }, { text: 'people remember.', muted: true }]} /></div><div className="nx-contact-links"><a href="mailto:tyagiakhliesh87@gmail.com"><span><EnvelopeSimple size={20} /> tyagiakhliesh87@gmail.com</span><ArrowUpRight size={20} /></a><a href="tel:+918795943121"><span><PhoneCall size={20} /> +91 87959 43121</span><ArrowUpRight size={20} /></a><a href="https://wa.me/918795943121" target="_blank" rel="noreferrer"><span><WhatsappLogo size={20} /> WhatsApp</span><ArrowUpRight size={20} /></a><a href="https://www.linkedin.com/in/akhilesh-kumar-tyagi-34286012a/" target="_blank" rel="noreferrer"><span><LinkedinLogo size={20} /> LinkedIn</span><ArrowUpRight size={20} /></a><a href="https://github.com/tyagiakhilesh87" target="_blank" rel="noreferrer"><span><GithubLogo size={20} /> GitHub</span><ArrowUpRight size={20} /></a></div></section>
    <footer className="nx-footer"><div className="nx-footer-logo"><Image src="/portrait-assets/ak-monogram-v1.png" alt="AK monogram" width={140} height={140} /></div><div className="nx-footer-identity"><strong>AKHILESH<br />KUMAR TYAGI</strong><span>Shopify · UI/UX · Full Stack</span><p>Built for thoughtful teams<br />and ambitious commerce.</p></div><div className="nx-footer-nav"><a href="#work">Selected work</a><a href="#expertise">Expertise</a><a href="#stack">Tech stack</a><a href="#about">About</a><a href="#contact">Contact</a></div><div className="nx-footer-meta"><address>Greater Lucknow Uttar Pradesh East,<br />India - 226021</address><span>© {new Date().getFullYear()} · Available worldwide</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></div></footer>
  </main>;
}

function Reveal({ children }: { children: React.ReactNode }) { const reduce = useReducedMotion(); return <motion.div initial={reduce ? false : { opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .75, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>; }

function KineticHeading({ lines }: { lines: Array<{ text: string; muted?: boolean }> }) {
  const reduce = useReducedMotion();
  const headingVariants = { hidden: {}, visible: { transition: { staggerChildren: .1 } } };
  const lineVariants = { hidden: {}, visible: { transition: { staggerChildren: .07 } } };
  const wordVariants = {
    hidden: { opacity: 0, y: '110%', rotate: 2 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: .62, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return <motion.h2 className="nx-kinetic-heading" aria-label={lines.map((line) => line.text).join(' ')} initial={reduce ? false : 'hidden'} whileInView={reduce ? undefined : 'visible'} viewport={{ once: true, amount: .2 }} variants={headingVariants}>{lines.map((line) => <motion.span className={`nx-kinetic-line${line.muted ? ' muted' : ''}`} variants={lineVariants} key={line.text}>{line.text.split(' ').map((word, wordIndex) => <motion.span aria-hidden="true" variants={wordVariants} key={`${word}-${wordIndex}`}>{word}&nbsp;</motion.span>)}</motion.span>)}</motion.h2>;
}
