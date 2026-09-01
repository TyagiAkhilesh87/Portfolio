import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL??'https://akhileshportfolio-one.vercel.app';return [{url:base,priority:1,changeFrequency:'monthly'},...projects.map(project=>({url:`${base}/work/${project.slug}`,priority:.8,changeFrequency:'monthly' as const}))]}
