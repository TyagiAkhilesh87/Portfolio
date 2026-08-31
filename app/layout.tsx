import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: { default:'Akhilesh Kumar Tyagi — Shopify & Ecommerce Developer', template:'%s | Akhilesh Kumar Tyagi' },
  description: 'Shopify and frontend developer building responsive, conversion-aware ecommerce experiences.',
  alternates: { canonical:'/' },
  openGraph: { title:'Commerce, shaped for the real world.', description:'Akhilesh Kumar Tyagi — Shopify & Ecommerce Developer', type:'website', images:[{url:'/og.png',width:1200,height:630,alt:'Commerce, shaped for the real world — Akhilesh Kumar Tyagi'}] },
  twitter: { card:'summary_large_image', title:'Commerce, shaped for the real world.', description:'Akhilesh Kumar Tyagi — Shopify & Ecommerce Developer', images:['/og.png'] },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Person',name:'Akhilesh Kumar Tyagi',url:process.env.NEXT_PUBLIC_SITE_URL,jobTitle:'Shopify and Ecommerce Developer',sameAs:['https://www.linkedin.com/in/akhilesh-kumar-tyagi-34286012a/']})}} />
        {children}
      </body>
    </html>
  );
}
