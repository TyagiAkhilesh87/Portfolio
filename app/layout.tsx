import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './portfolio-v4.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://akhileshportfolio-one.vercel.app';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default:'Akhilesh Kumar Tyagi | Shopify & Ecommerce Developer', template:'%s | Akhilesh Kumar Tyagi' },
  description: 'Akhilesh Kumar Tyagi builds distinctive Shopify storefronts and responsive ecommerce experiences.',
  alternates: { canonical:'/' },
  openGraph: { title:'Storefronts with a point of view.', description:'Akhilesh Kumar Tyagi | Shopify Developer', type:'website', images:[{url:'/project-previews/my-name-rings.png',width:1708,height:782,alt:'Akhilesh Kumar Tyagi Shopify development portfolio.'}] },
  twitter: { card:'summary_large_image', title:'Storefronts with a point of view.', description:'Akhilesh Kumar Tyagi | Shopify Developer', images:['/project-previews/my-name-rings.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Person',name:'Akhilesh Kumar Tyagi',url:siteUrl,jobTitle:'Shopify and Ecommerce Developer',sameAs:['https://www.linkedin.com/in/akhilesh-kumar-tyagi-34286012a/']})}} />
        {children}
      </body>
    </html>
  );
}
