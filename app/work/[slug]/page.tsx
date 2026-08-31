import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/content/projects';

export const generateStaticParams = () => projects.map(({slug}) => ({slug}));

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
  const project = getProject((await params).slug);
  if(!project) return {};
  return { title:`${project.title} — Akhilesh Kumar Tyagi`, description:project.shortDescription, openGraph:{title:`${project.title} — Ecommerce case study`,description:project.shortDescription,images:[]}, twitter:{card:'summary',title:`${project.title} — Ecommerce case study`,description:project.shortDescription,images:[]} };
}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
  const project = getProject((await params).slug); if(!project) notFound();
  const next = projects[(projects.findIndex(p => p.id===project.id)+1)%projects.length];
  const facts = [['Industry',project.category],['Positioning',project.industries.join(' / ')],...(project.technologies.length?[['Technology',project.technologies.join(' / ')]]:[])];
  return <main className="case-page"><header className="case-nav"><Link href="/">AKT</Link><Link href="/#work">← All work</Link><a href={project.url} target="_blank" rel="noreferrer">View live ↗</a></header><section className="case-hero"><p className="eyebrow">Case study / {String(project.order).padStart(2,'0')}</p><h1>{project.title}</h1><p>{project.shortDescription}</p></section><div className="case-visual" style={{'--preview':project.surface,'--accent':project.accent} as React.CSSProperties}><div className="case-browser"><span>{project.title}</span><div className="case-object"/><small>{project.category}</small></div></div><section className="case-overview"><div><p className="eyebrow">Overview</p><h2>A storefront reference,<br/>presented with context.</h2></div><div><p>{project.longDescription ?? project.shortDescription}</p><dl>{facts.map(([key,value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl></div></section><section className="case-note"><p>No fabricated results</p><h2>Verified outcomes and technical details can be added as the case study is documented.</h2><p>This page intentionally avoids claiming a role, implementation method or business result that has not been supplied.</p></section><section className="next-project"><p>Next project</p><Link href={`/work/${next.slug}`}>{next.title} <span>→</span></Link></section></main>;
}
