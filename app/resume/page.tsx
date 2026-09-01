import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

export default function ResumePage() {
  return <main className="pf-resume">
    <header><Link href="/"><ArrowLeft size={16} /> Portfolio</Link><a href="https://www.linkedin.com/in/akhilesh-kumar-tyagi-34286012a/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a></header>
    <section className="pf-resume-hero"><p>Shopify and frontend developer</p><h1>Akhilesh<br />Kumar Tyagi</h1><span>Web developer with Shopify, MERN, Java and Android foundations. Based in the Greater Lucknow Area.</span></section>
    <section className="pf-resume-grid"><h2>Experience</h2><div><article><span>Oct 2025 to present</span><h3>Web Developer</h3><p>Digital Heroes, full-time and hybrid</p><small>Shopify development, web design, GraphQL, API work and responsive implementation.</small></article><article><span>Feb 2025 to Aug 2025</span><h3>Web Development Intern</h3><p>Hanumant Technology Pvt. Ltd.</p><small>MERN stack web development.</small></article></div></section>
    <section className="pf-resume-grid"><h2>Education</h2><div><article><span>2020 to 2023</span><h3>BTech, Computer Science</h3><p>SRIMT Lucknow</p><small>Grade: 78%</small></article><article><span>2017 to 2020</span><h3>Diploma, Information Technology</h3><p>Hewett Polytechnic Lucknow</p><small>Grade: 77%</small></article></div></section>
    <section className="pf-resume-grid"><h2>Credentials</h2><div><article><span>2023</span><h3>Developer Virtual Experience Program</h3><p>Accenture</p></article><article><span>2023</span><h3>Software Engineering Virtual Experience Program</h3><p>Goldman Sachs</p></article></div></section>
    <section className="pf-resume-skills"><h2>Core skills</h2><div>{['Shopify', 'Liquid', 'React', 'JavaScript', 'GraphQL', 'MERN Stack', 'Responsive Web Design', 'Web Design', 'API Integration', 'Java', 'Android', 'GitHub'].map((skill) => <span key={skill}>{skill}</span>)}</div></section>
  </main>;
}
