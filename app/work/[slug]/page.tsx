/* eslint-disable @next/next/no-html-link-for-pages -- native anchors preserve hash navigation in the current Vinext runtime */
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { getProject, projects } from '@/content/projects';
import CaseStorePreview from '@/components/CaseStorePreview';

export const generateStaticParams = () => projects.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: `${project.title} | Akhilesh Kumar Tyagi`, description: project.shortDescription, openGraph: { title: `${project.title} | Ecommerce case study`, description: project.shortDescription, images: [project.previewImage] }, twitter: { card: 'summary_large_image', title: `${project.title} | Ecommerce case study`, description: project.shortDescription, images: [project.previewImage] } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const next = projects[(projects.findIndex((item) => item.id === project.id) + 1) % projects.length];
  return <main className="case-page">
    <header className="case-header">
      <a className="case-brand" href="/"><Image src="/portrait-assets/ak-monogram-v1.png" alt="AK monogram" width={44} height={44} /><span><strong>AKHILESH KUMAR TYAGI</strong><small>Commerce case study</small></span></a>
      <nav><a href="/#work"><ArrowLeft size={15} /> Back to selected work</a><a href="#preview">Preview store</a><a href="#details">Project details</a></nav>
      <a className="case-live-link" href={project.url} target="_blank" rel="noreferrer">Open live site <ArrowUpRight size={16} /></a>
    </header>
    <a className="case-floating-back" href="/#work"><ArrowLeft size={18} /><span>All work</span></a>
    <section className="case-hero"><div><p>{project.category}</p><h1>{project.title}</h1></div><span>{project.shortDescription}</span></section>
    <CaseStorePreview title={project.title} url={project.url} previewImage={project.previewImage} previewNote={project.previewNote} />
    <section className="case-context" id="details"><div><p className="case-eyebrow">PROJECT CONTEXT / HONESTLY PRESENTED</p><h2>A working store,<br /><em>seen in context.</em></h2></div><div><p>{project.longDescription ?? project.shortDescription}</p><dl><div><dt>Industry</dt><dd>{project.category}</dd></div><div><dt>Positioning</dt><dd>{project.industries.join(' / ')}</dd></div><div><dt>Preview source</dt><dd>{project.previewNote ?? 'Current public storefront landing view'}</dd></div></dl></div></section>
    <section className="case-note"><p>This portfolio does not invent conversion results, responsibilities or implementation details. Verified outcomes can be added as project documentation becomes available.</p></section>
    <section className="case-next"><span>Next project</span><a href={`/work/${next.slug}`}>{next.title} <ArrowRight size={34} /></a></section>
  </main>;
}
